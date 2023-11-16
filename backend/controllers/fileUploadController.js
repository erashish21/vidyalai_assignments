// controllers/fileUploadController.js
const multer = require("multer");
const uploadMiddleware = require("../middlewares/uploadMiddleware");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadFile = (req, res) => {
  // Handle file upload logic here
  // Use req.file.buffer for the file data
  // ...

  const filename = "uploaded-file.pdf"; // Replace with actual filename
  res.json({ filename });
};

module.exports = {
  uploadFile,
};
