const SmitCollaborationModel = require("../../model/SmitModel/SmitCollaborationModel");
const cloudinary = require("../../cloudinary");
const checkField = require("../../FieldValidation/checkField");

SmitCollaborationadd = async (req, res) => {
  const { imageUrl, colName } = req.body;
  // console.log(data, "imgurl");
  if (!imageUrl) {
    return res.status(400).json(checkField("Image"));
  } else if (!colName) {
    return res.status(400).json(checkField("Collaborator Name"));
  } else {
    try {
      const fileStr = imageUrl;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "prime-asset",
      });
      try {
        const result = new SmitCollaborationModel({
          colName,
          imageUrl: uploadResponse.url,
        });
        await result.save();
        return res.status(200).json({ message: "Collaborator Added" });
      } catch (err) {
        return res.status(422).json({ message: err.message });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
};

SmitCollaborationGet = async (req, res) => {
  // checkField;
  const result = await SmitCollaborationModel.find();
  return res.status(200).json({
    success: true,
    data: result,
  });
};

SmitCollaborationDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("Collaborator ID"));
  } else {
    let imgUrl = await SmitCollaborationModel.findById(id);
    try {
      if (!imgUrl) {
        return res.status(404).json({
          success: false,
          message: "Collaborator Not Found",
        });
      } else {
        await SmitCollaborationModel.findByIdAndDelete(id, function (
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
  SmitCollaborationadd,
  SmitCollaborationGet,
  SmitCollaborationDel,
};
