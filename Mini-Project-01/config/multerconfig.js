const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

// diskStorage

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) {
    // crypto.randomBytes ek raw ya bytes jo buffer return krta hai hum uska koi bhi name rkh skte hai yaha humne "name" rakha hai usko fir toString('hex') krke hexadecimal mei convert kiya
    crypto.randomBytes(12, function (err, name) { 
      const fn = name.toString('hex') + path.extname(file.originalname);
      cb(null, fn);
    })
  }
})


//export upload variable
const upload = multer({ storage: storage })

module.exports = upload;
