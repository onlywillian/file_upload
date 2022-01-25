const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.listen(3000, console.log("Listening on http://localhost:3000"));