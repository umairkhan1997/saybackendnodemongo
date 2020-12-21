const multer = require("multer");
// // module.exports = multer({
// //   storage: multer.diskStorage({}),
// //   fileFilter: (req, file, cb) => {
// //     if (!file.mimetype.match(/jpe|jpeg|png|gif$i/)) {
// //       cb(new Error("File is not supported"), false);
// //       return;
// //     }

// //     cb(null, true);
// //   },
// // });


// const DIR = './images/';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, DIR);
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.originalname.toLowerCase().split(' ').join('-');
//     cb(null, uuidv4() + '-' + fileName)
//   }
// });

// module.exports = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//     }
//   }
// });



// const multer = require("multer");



let storage = multer.diskStorage({
  destination: function (req, file, callback) {
    console.log("file", file);
    callback(null, "./images/");
  },
  filename: function (req, file, callback) {
    console.log("multer file:", file);
    callback(null, file.originalname);
  }
});
let maxSize = 1000000 * 1000;
let upload = multer({
  storage: storage,
  limits: {
    fileSize: maxSize
  }
});

module.exports = upload;