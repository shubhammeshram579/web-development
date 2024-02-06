const multer = require("multer");
const {v4: uuidv4} = require("uuid");
// find file name path
const path = require("path");

// for example find file path name
// console.log(path.extname("shubham.pdf"));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads')
    },
    filename: function (req, file, cb) {
      const uniquename = uuidv4();
      cb(null, uniquename+path.extname(file.originalname)); // set file path name
    }
  })
  
  const upload = multer({ storage: storage });

  module.exports = upload;