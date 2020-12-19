const incubationUpcEveModel = require("../../model/incubationCenterModel/incubationUpcEveModel");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

incubationUpcEveAdd = async (req, res) => {
  const { eveDate, eveName, eveTime, eveImg } = req.body;
  // console.log(data, "imgurl");
  if (!eveDate) {
    return res.status(400).json(checkField("Event Date"));
  } else if (!eveName) {
    return res.status(400).json(checkField("Event Date"));
  } else if (!eveTime) {
    return res.status(400).json(checkField("Event Time"));
  } else if (!eveImg) {
    return res.status(400).json(checkField("Event Image"));
  } else {
    try {
      const fileStr = eveImg;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      try {
        const result = new incubationUpcEveModel({
          eveImg: uploadResponse.url,
          eveDate,
          eveName,
          eveTime,
        });
        await result.save();
        return res.status(200).json({ message: "Incubation Event Added" });
      } catch (err) {
        return res.status(422).json({ message: err.message });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
};

incubationUpcEveGet = async (req, res) => {
  // checkField;
  const result = await incubationUpcEveModel.find();
  return res.status(200).json({
    success: true,
    data: result,
  });
};

incubationUpcEveDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("Incubation Event ID"));
  } else {
    let resu = await incubationUpcEveModel.findById(id);
    try {
      if (!resu) {
        return res.status(404).json({
          success: false,
          message: "Incubation Event Not Found",
        });
      } else {
        await incubationUpcEveModel.findByIdAndDelete(id, function (
          err,
          result
        ) {
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
  incubationUpcEveAdd,
  incubationUpcEveGet,
  incubationUpcEveDel,
};
