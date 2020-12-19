// // require('dotenv').config();
// const cloudinary = require("cloudinary").v2;
// cloudinary.config({
//   cloud_name: "dp8ybac11",
//   api_key: "691494556986484",
//   api_secret: "MmBILQnYvJATLA_QyZa97uLk2s0",
// });

// module.exports = { cloudinary };

// require("dotenv").config();
// const cloudinary = require("cloudinary").v2;
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// module.exports = cloudinary;


require('dotenv').config();
const cloudinary = require("cloudinary").v2;
const _ = require('underscore');

const Q = require("q");

function upload(file) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  return new Q.Promise((resolve, reject) => {
    cloudinary.uploader.upload(file, { width: 400, height: 400 }, (err, res) => {
      console.log(res, err, 'req,res cloduinary')
      if (err) {
        console.log('cloudinary err:', err);
        reject(err);
      } else {
        console.log('cloudinary res:', res);
        return resolve(res.url);
      }
    });
  });
};


module.exports.upload = upload;