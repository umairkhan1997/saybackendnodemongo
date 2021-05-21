const BooksAllModel = require("../../model/BookModel/BooksAll");
const cloudinary = require("../../../cloudinary");
const checkField = require("../../FieldValidation/checkField");
const _ = require("underscore");
const fs = require("fs");
const upload = require("../../../cloudinary").upload;
const vm = require("v-response");




BooksAllAdd = async (req, res, next) => {
  const {
    bookName,
    imgCollection,
    bookLang,
    bookAuthor,
    bookPublisher,
    bookDnldUrl,
  } = req.body;
  // console.log(data, "imgurl");
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
    //  console.log(req.files, 'req.files')
    try {
      let urls = [];
      let multiple = async (path) => await upload(path);
      for (const file of files) {
        const { path } = file;
        // console.log("path", file);

        const newPath = await multiple(path);
        urls.push(newPath);
        fs.unlinkSync(path);
      }
      // console.log("urls", urls, "urls");
      if (urls) {
        let body = req.body;
        body.bookDnldUrl = urls[1];
        // console.log(body, 'body body ')
        let bodyw = _.extend(body, { imgCollection: urls[0] });
        let new_user = new BooksAllModel(bodyw);
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
      //    console.log("err :", e);
      return next(e);
    }
  }
};

BooksAllGet = async (req, res) => {
  // checkField;
  const result = await BooksAllModel.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};

BooksAllDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("Book ID"));
  } else {
    let resu = await BooksAllModel.findById(id);
    try {
      if (!resu) {
        return res.status(404).json({
          success: false,
          message: "Book Not Found",
        });
      } else {
        await BooksAllModel.findByIdAndDelete(id, function (err, result) {
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
  BooksAllAdd,
  BooksAllGet,
  BooksAllDel,
};
