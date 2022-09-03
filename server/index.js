const express = require("express");
const Router = require("./routes");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();
const crypto = require("crypto");
const cors = require("cors");
const uploadController = require("./controller/uploadController");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "15MB" }));
app.use("/", Router);
app.use("/uploads", express.static("uploads"));
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".");
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err);

      cb(null, raw.toString("hex") + "." + ext[ext.length - 1]);
    });
  },
});
const upload = multer({ storage: storage });
app.use("/uploadNew", upload.array("file"), uploadController);
app.listen(5000, () => {
  console.log("server running");
});
