const JobBankPopCatModel = require("../../model/JobBank/JobBankPopCat");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

JobBankPopCatAdd = async (req, res) => {
  const { logo, catName } = req.body;
  // console.log(data, "imgurl");
  if (!logo) {
    return res.status(400).json(checkField("logo"));
  } else if (!catName) {
    return res.status(400).json(checkField("Category Name"));
  } else {
    try {
      const fileStr = logo;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      // console.log(uploadResponse, "successfully image add");
      try {
        const result = new JobBankPopCatModel({
          logo: uploadResponse.url,
          catName,
        });
        await result.save();
        return res.status(200).json({ message: "Category Added" });
        // console.log("Faculty Added");
      } catch (err) {
        return res.status(422).send({ message: err.message });
        // console.log(err, "err");
      }
    } catch (err) {
      // console.error(err, "err");
      return res.status(500).json({ message: err.message });
      // console.log(err, "err 500");
    }
  }
};

JobBankPopCatGet = async (req, res) => {
  // checkField;
  const result = await JobBankPopCatModel.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};

JobBankPopCatDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("Category ID"));
  } else {
    let resu = await JobBankPopCatModel.findById(id);
    try {
      if (!resu) {
        return res.status(404).json({
          success: false,
          message: "Category Not Found",
        });
      } else {
        await JobBankPopCatModel.findByIdAndDelete(id, function (err, result) {
          if (err) {
            return res.status(422).json({
              success: false,
              message: err.message,
            });
          } else {
            return res.status(200).json({
              success: true,
              message: "Category Deleted",
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
  JobBankPopCatAdd,
  JobBankPopCatGet,
  JobBankPopCatDel,
};
