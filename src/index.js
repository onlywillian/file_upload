const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.post('/files/upload', upload.single('recfile'), (req, res) => {
    res.send({ file: req.file });
});

app.listen(3000, console.log("Listening on http://localhost:3000"));