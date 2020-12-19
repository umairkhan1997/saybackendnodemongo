const BookSpecialModel = require("../../model/BookModel/BookSpecial");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");
const _ = require("underscore");
const fs = require("fs");
const upload = require("../../cloudinary").upload;
const vm = require("v-response");
BookSpecialAdd = async (req, res) => {
  // const {
  //   bookName,
  //   bookImgUrl,
  //   bookLang,
  //   bookAuthor,
  //   bookPublisher,
  //   bookDnldUrl,
  // } = req.body;
  // // console.log(data, "imgurl");
  // if (!bookName) {
  //   return res.status(400).json(checkField("Book Name"));
  // } else if (!bookImgUrl) {
  //   return res.status(400).json(checkField("Book Image"));
  // } else if (!bookLang) {
  //   return res.status(400).json(checkField("Book Language"));
  // } else if (!bookAuthor) {
  //   return res.status(400).json(checkField("Book Author"));
  // } else if (!bookPublisher) {
  //   return res.status(400).json(checkField("Book Publisher"));
  // } else if (!bookDnldUrl) {
  //   return res.status(400).json(checkField("Book Download URL"));
  // } else {
  //   try {
  //     const fileStr = bookImgUrl;
  //     const uploadResponse = await cloudinary.uploader.upload(fileStr, {
  //       upload_preset: "prime-asset",
  //     });
  //     // console.log(uploadResponse, "successfully image add");
  //     try {
  //       const result = new BookSpecialModel({
  //         bookImgUrl: uploadResponse.url,
  //         bookName,
  //         bookLang,
  //         bookAuthor,
  //         bookPublisher,
  //         bookDnldUrl,
  //       });
  //       await result.save();
  //       return res.status(200).json({ message: "Book Added" });
  //       // console.log("Faculty Added");
  //     } catch (err) {
  //       return res.status(422).send({ message: err.message });
  //       // console.log(err, "err");
  //     }
  //   } catch (err) {
  //     // console.error(err, "err");
  //     return res.status(500).json({ message: err.message });
  //     // console.log(err, "err 500");
  //   }
  // }

  const {
    bookName,
    imgCollection,
    bookLang,
    bookAuthor,
    bookPublisher,
    bookDnldUrl,
  } = req.body;
  if (!bookName) {
    return res.status(400).json(checkField("Book Name"));
  }
  else if (!bookLang) {
    return res.status(400).json(checkField("Book Language"));
  } else if (!bookAuthor) {
    return res.status(400).json(checkField("Book Author"));
  } else if (!bookPublisher) {
    return res.status(400).json(checkField("Book Publisher"));
  } else {

    if (!req.files || _.isEmpty(req.files)) {
      return res.status(400)
        .json(vm.ApiResponse(false, 400, "No file uploaded'"))
    }
    const files = req.files;
    try {
      let urls = [];
      let multiple = async (path) => await upload(path);
      for (const file of files) {
        const { path } = file;
        const newPath = await multiple(path);
        urls.push(newPath);
        fs.unlinkSync(path);
      }
      if (urls) {
        let body = req.body;
        body.bookDnldUrl = urls[1];
        let bodyw = _.extend(body, { imgCollection: urls[0] });
        let new_user = new BookSpecialModel(bodyw);
        await new_user.save()
          .then(saved => {
            return res.status(200).json({ success: true, message: "Book Added", data: saved });
          }).catch(error => {
            return res
              .status(422)
              .json({ success: false, message: error.message });
          })

      }
      if (!urls) {
        return res.status(400)
          .json(vm.ApiResponse(false, 400, ""))
      }

    }

    catch (e) {
      return next(e);
    }
  }


};

BookSpecialGet = async (req, res) => {
  // checkField;
  const result = await BookSpecialModel.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};

BookSpecialDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("Book ID"));
  } else {
    let resu = await BookSpecialModel.findById(id);
    try {
      if (!resu) {
        return res.status(404).json({
          success: false,
          message: "Book Not Found",
        });
      } else {
        await BookSpecialModel.findByIdAndDelete(id, function (err, result) {
          if (err) {
            return res.status(422).json({
              success: false,
              message: err.message,
            });
          } else {
            return res.status(200).json({
              success: true,
              message: "Book Deleted",
            });
          }
        });
      }
    } catch (err) {
      return res.status(422).json({ success: false, message: err.message });
    }
  }
};

module.exports = {
  BookSpecialAdd,
  BookSpecialGet,
  BookSpecialDel,
};
