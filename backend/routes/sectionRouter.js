const express = require("express");
const PageModel = require("../models/pageModel");
const AuthorModel = require("../models/AuthorsModel");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../uploads/');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const originalName = file.originalname.replace(/\s+/g, '-'); // Replace spaces with hyphens
    const uploadPath = path.join(__dirname, '../uploads/');
    let finalName = originalName;
    let counter = 1;
    
    while (fs.existsSync(path.join(uploadPath, finalName))) {
      const nameWithoutExt = path.parse(originalName).name;
      const ext = path.extname(originalName);
      finalName = `${nameWithoutExt}-${counter}${ext}`;
      counter++;
    }
    
    cb(null, finalName);
  },
});

const upload = multer({ storage: storage });

const app = express();
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Your other route definitions...

router.get("/pages", (req, res) => {
  PageModel.find({})
    .then((page) => {
      if (!page) {
        return res.status(404).json({
          message: "Page not found",
        });
      }
      res.send(page);
    })
    .catch((err) => {
      res.status(500).send({ "Server Error": err.message });
    });
});

router.post("/pages", async (req, res) => {
  const { title, path, authorID, manualDate, publishDate, modules } = req.body;
  console.log("req.body", req.body);
  await PageModel.create({
    title: title,
    path: path,
    authID: authorID,
  })
    .then((page) => {
      res.status(200).json({
        message: "Page successfully created",
        page,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Page not created",
        error: err.message,
      });
    });
});

router.get("/pages/:id", (req, res) => {
  const { id } = req.params;

  PageModel.findById(id).populate('authID')
    .then((page) => {
      if (!page) {
        return res.status(404).json({
          message: "Page not found",
        });
      }
      res.send(page);
    })
    .catch((err) => {
      res.status(500).send({ "Server Error": err.message });
    });
});

router.put("/pages/:id", (req, res) => {
  const { id } = req.params;

  PageModel.findByIdAndUpdate(id, req.body, { new: true })
    .then((updatedPage) => {
      if (!updatedPage) {
        return res.status(404).json({
          message: "Page not found",
        });
      }
      res.send(updatedPage);
    })
    .catch((err) => {
      res.status(500).send({ "Server Error": err.message });
    });
});

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
    const filename = req.file.filename; // Get the filename with replaced spaces
    const newAuthor = new AuthorModel({
      name: name,
      avatar: filename, // Save only the filename
    });

    await newAuthor.save();

    res.status(200).json({ message: "Author successfully created" });
  } catch (err) {
    res.status(500).json({
      message: "Author not created",
      error: err.message,
    });
  }
});

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
