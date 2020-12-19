const incubationCatModel = require("../../model/incubationCenterModel/incubationCatModel");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

incubationCatAdd = async (req, res) => {
  const { catImg, catName } = req.body;
  // console.log(data, "imgurl");
  if (!catImg) {
    return res.status(400).json(checkField("Incubation Category Image"));
  } else if (!catName) {
    return res.status(400).json(checkField("Incubation Category Name"));
  } else {
    try {
      const fileStr = catImg;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      try {
        const result = new incubationCatModel({
          catImg: uploadResponse.url,
          catName,
        });
        await result.save();
        return res.status(200).json({ message: "Incubation Category Added" });
      } catch (err) {
        return res.status(422).json({ message: err.message });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
};

incubationCatGet = async (req, res) => {
  // checkField;
  const result = await incubationCatModel.find();
  return res.status(200).json({
    success: true,
    data: result,
  });
};

incubationCatDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("Incubation Category ID"));
  } else {
    let resu = await incubationCatModel.findById(id);
    try {
      if (!resu) {
        return res.status(404).json({
          success: false,
          message: "Incubation Category Not Found",
        });
      } else {
        await incubationCatModel.findByIdAndDelete(id, function (err, result) {
          if (err) {
            return res.status(422).json({
              success: false,
              message: err.message,
            });
          } else {
            return res.status(200).json({
              success: true,
              message: result,
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
  incubationCatAdd,
  incubationCatGet,
  incubationCatDel,
};
