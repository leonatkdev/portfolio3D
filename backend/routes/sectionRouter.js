const express = require("express");
const router = express.Router();
const PageModel = require("../models/pageModel");

router.post("/pages", async (req, res) => {
  const { title, path, author, manualDate, publishDate, modules } = req.body;
  console.log("req.body", req.body);
  await PageModel.create({
    title: title,
    path: path,
    // authID: author,
  })
    .then((page) => {
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

router.get("/pages/:id", (req, res) => {
  const { id } = req.params;

  PageModel.findById(id)
    .then((page) => {
      if (!page) {
        res.status(404).json({
          message: "Page not found",
        });
      }
      res.send(page);
    })
    .catch((err) => {
      res.status(401).send({ "Server Error": err.message });
    });
});

router.get("/pages", (req, res) => {
  PageModel.find({})
    .then((page) => {
      if (!page) {
        res.status(404).json({
          message: "Page not found",
        });
      }
      res.send(page);
    })
    .catch((err) => {
      res.status(401).send({ "Server Error": err.message });
    });
});

router.put("/pages/:id", (req, res) => {});

router.delete("/pages/:id", (req, res) => {});
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
