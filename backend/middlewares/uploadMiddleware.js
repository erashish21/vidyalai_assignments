// middlewares/uploadMiddleware.js
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadMiddleware = upload.single("file");

module.exports = uploadMiddleware;
