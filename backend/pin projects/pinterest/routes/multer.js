// import packges libries
// multer for file uploaded
const multer = require("multer");
// uuid is create unic image id or name
const {v4: uuidv4} = require("uuid");
// path is for file path name like .pdf
const path = require("path");



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads'); //select upload path for file stored
    },

    // set upe file unique path and file name
    filename: function (req, file, cb) {
     const unique = uuidv4(); 
      cb(null, unique+path.extname(file.originalname));
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload;