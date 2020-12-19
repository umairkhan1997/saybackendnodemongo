const SmitStdCounModel = require("../../model/SmitModel/SmitStdCounModel");

SmitCounAdd = async (req, res) => {
  const { counName, counStrNum, counEndNum } = req.body;

  try {
    const result = new SmitStdCounModel({ counName, counStrNum, counEndNum });
    await result.save();
    res.send({ message: "SMIT Count Added" });
  } catch (err) {
    return res.status(422).send(err + "err");
  }
};

SmitCounGet = async (req, res) => {
  const allVid = await SmitStdCounModel.find();
  res.status(200).json({
    success: true,
    data: allVid,
  });
};
SmitCounUpdate = async (req, res, next) => {
  let counId = await SmitStdCounModel.findById(req.body.id);
  if (!counId) {
    return res.status(404).json({
      success: false,
      message: "SMIT Count found",
    });
  }
  counId = await SmitStdCounModel.findByIdAndUpdate(req.body.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "SMIT Count Updated",
    data: counId,
  });
};
SmitCounDel = async (req, res, next) => {
  const { id } = req.body;
  let counId = await SmitStdCounModel.findById(id);
  try {
    if (!counId) {
      res.status(404).json({
        success: false,
        message: "SMIT Count Not Found",
      });
    } else {
      await SmitStdCounModel.findByIdAndDelete(id, function (err, result) {
        if (err) {
          res.status(422).json({
            success: false,
            message: err.message,
          });
        } else {
          res.status(200).json({
            success: true,
            message: "SMIT Count Deleted",
          });
        }
      });
    }
  } catch (err) {
    res.status(422).json({ success: false, message: err.message });
  }
};

module.exports = {
  SmitCounAdd,
  SmitCounGet,
  SmitCounUpdate,
  SmitCounDel,
};
