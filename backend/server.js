const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const nodemailer = require("nodemailer");

const spotify = require("./routes/spotify.js");

const app = express();
const Port = process.env.PORT || 4001;

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'https://leonat.dev'];

app.use(express.json()); // So you can use req.body
app.use(cookieParser()); // So we can use res.cookie

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin (like mobile apps, curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));


app.get("/", (req, res) => {
  res.send("Hello Bro :) ")
});
app.use("/", spotify);

app.post("/contact", async (req, res) => {
  console.log('process.env.EMAIL_USER', process.env.EMAIL_USER)
  console.log('process.env.EMAIL_PASS', process.env.EMAIL_PASS)
  const { from_name, from_email, message } = req.body;

  if (!from_name || !from_email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${from_name}" <${from_email}>`,
      to: "leonatkdev@gmail.com",
      subject: `New message from ${from_name}`,
      html: `
        <p><strong>Name:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${from_email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully." });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ error: "Failed to send email." });
  }
});

// Start the server
const server = app.listen(Port, () => {
  console.log(`
    Listening on Port ${Port} 
    Local: ${`http://localhost:${Port}`}`);
});

// Handle unhandled rejections
process.on("unhandledRejection", (err) => {
  console.log("Unhandled rejection! Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log("Uncaught exception! Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

