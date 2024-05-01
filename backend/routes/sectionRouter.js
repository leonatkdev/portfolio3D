const express = require("express");
const router = express.Router();
const PageModel = require("../models/pageModel");

router.post("/page", async (req, res) => {
  const { title, path, author,  manualDate, publishDate, modules } = req.body;
  console.log('req.body', req.body)
  await PageModel.create({
    title: title,
    path: path,
    // authID: author,
  }).then((page) => {
    res.status(200).json({
      message: "Page successfully created",
      page,
    });
  })
  .catch((err) => {
    res.status(401).json({  
      message: "Page not created",
      error: err.message,
    });
  });
});

router.get("/page/:id", (req, res) => {

});

router.put("/page/:id", (req, res) => {})


router.delete("/page/:id", (req, res) => {
  
})
/**
 * @swagger
 * /sections:
 *   get:
 *     summary: Get details for all sections
 *     responses:
 *       '200':
 *         description: Successful response
 */

router.get("/sections", (req, res) => {
  res.send(`Details for sections`);
});

/**
 * @swagger
 * /sections/{userId}:
 *   get:
 *     summary: Get details for a specific section
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 */

router.get("/sections/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send(`Details for sections ${userId}`);
});

module.exports = router;
