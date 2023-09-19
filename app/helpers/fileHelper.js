"use strict";
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const originalName = file.originalname;
    cb(null, originalName);
  },
});
const filefilter = (req, file, cb) => {
  const allowedMimeTypes = [
    "image/png",
    "image/jpg",
    "image/jpeg", 
    "application/pdf"
  ];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage: storage, fileFilter: filefilter });

module.exports = { upload };
