const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const parts = file.originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = file.originalname + '-' + Date.now() + '.' + ext;
    cb(null, newPath);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
