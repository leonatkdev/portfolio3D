const express = require("express");
const PageModel = require("../models/pageModel");
const AuthorModel = require("../models/AuthorsModel");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Get Pages
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

// Post Pages
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

// Get Page by ID
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

// Update Page by ID
router.put("/pages/:id", (req, res) => {
  const { id } = req.params;

  PageModel.findByIdAndUpdate(id, req.body, { new: true })
    .then((updatedPage) => {
      if (!updatedPage) {
        res.status(404).json({
          message: "Page not found",
        });
      }
      res.send(updatedPage);
    })
    .catch((err) => {
      res.status(401).send({ "Server Error": err.message });
    });
});

// Delete Page by ID
router.delete("/pages/:id", (req, res) => {});

router.get("/authors", (req, res) => {
  AuthorModel.find({}).then((authors) => {
    res.send(authors);
  });
});

router.post("/authors", upload.single("avatar"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  const { name } = req.body;

  try {
    const newAuthor = new AuthorModel({
      name: name,
      avatar: req.file.buffer,
    });

    await newAuthor.save();

    res.status(200).json({ message: "Author successfully created" });
  } catch (err) {
    res.status(401).json({
      message: "Author not created",
      error: err.message,
    });
  }
});

// router.get("/authors/:id", (req, res) => {
//   const { id } = req.params;

//   UserModel.findById(id)
//     .then((author) => {
//       if (!author) {
//         res.status(404).json({
//           message: "Author not found",
//         });
//       }
//       res.send(author);
//     })
//     .catch((err) => {
//       res.status(401).send({ "Server Error": err.message });
//     });
// });


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
