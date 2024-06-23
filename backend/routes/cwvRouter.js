const express = require('express');
const puppeteer = require('puppeteer');

const router = express.Router();

router.get('/cwv', async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle0' });

    const cwv = await page.evaluate(() => {
      return new Promise((resolve) => {
        if (window.PerformanceObserver) {
          const metrics = {};

          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'largest-contentful-paint') {
                metrics.lcp = entry.startTime;
              } else if (entry.entryType === 'layout-shift') {
                metrics.cls = (metrics.cls || 0) + entry.value;
              } else if (entry.entryType === 'first-input') {
                metrics.fid = entry.processingStart - entry.startTime;
              }
            }
          });

          observer.observe({ type: 'largest-contentful-paint', buffered: true });
          observer.observe({ type: 'layout-shift', buffered: true });
          observer.observe({ type: 'first-input', buffered: true });

          setTimeout(() => {
            observer.disconnect();
            resolve(metrics);
          }, 5000); // Adjust timeout as needed
        } else {
          resolve({ error: 'PerformanceObserver not supported' });
        }
      });
    });

    await browser.close();
    res.json(cwv);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve CWV' });
  }
});

module.exports = router;
