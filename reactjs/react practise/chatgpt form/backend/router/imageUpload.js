const express = require('express');
const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: "dsfepcba9",
    api_key: "111319568374775",
    api_secret: "pySO5Q6eYqkN0tLEuEYomyCniSw",
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        format: async (req, file) => 'jpg',
        public_id: (req, file) => file.filename,
    },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post('/upload', upload.single('image'), (req, res) => {
    res.status(200).json({ url: req.file.path });
});

module.exports = router;
