const WelfareProjectModel = require("../../model/Welfare/WelfareProject");
const checkField = require("../../FieldValidation/checkField");

WelfareProjectAdd = async (req, res) => {
  const { WelHead, welAmount, welQuan } = req.body;
  // console.log(data, "imgurl");
  if (!WelHead) {
    return res.status(400).json(checkField("Welfare Heading"));
  } else if (!welAmount) {
    return res.status(400).json(checkField("Welfare Image"));
  } else if (!welQuan) {
    return res.status(400).json(checkField("Welfare Description"));
  } else {
    try {
      const result = new WelfareProjectModel({
        WelHead, welAmount, welQuan
      });
      await result.save()
        .then(saved => {
          return res.status(200).json({ success: true, message: "Welfare Added", data: saved });
        }).catch(error => {
          return res
            .status(422)
            .json({ success: false, message: error.message });
        })
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

  }
};

WelfareProjectGet = async (req, res) => {
  // checkField;
  const result = await WelfareProjectModel.find();
  return res.status(200).json({
    success: true,
    data: result,
  });
};

WelfareProjectDel = async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(checkField("Welfare ID"));
  } else {
    let resu = await WelfareProjectModel.findById(id);
    try {
      if (!resu) {
        return res.status(404).json({
          success: false,
          message: "Welfare Not Found",
        });
      } else {
        await WelfareProjectModel.findByIdAndDelete(id, function (err, result) {
          if (err) {
            return res.status(422).json({
              success: false,
              message: err.message,
            });
          } else {
            return res.status(200).json({
              success: true,
              message: "Welfare Deleted",
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
  WelfareProjectAdd,
  WelfareProjectGet,
  WelfareProjectDel,
};
