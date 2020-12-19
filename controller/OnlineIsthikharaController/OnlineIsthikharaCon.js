const OnlineIsthikharaModel = require("../../model/OnlineIsthikhara/OnlineIsthikharaModel");

OnlineIsthikharaAdd = async (req, res) => {
  const {
    istType,
    maleName,
    maleMotName,
    femName,
    femMotName,
    contact,
    istDetail,
  } = req.body;

  try {
    const result = new OnlineIsthikharaModel({
      istType,
      maleName,
      maleMotName,
      femName,
      femMotName,
      contact,
      istDetail,
    });
    await result.save();
    res.send({ message: "Online Isthikhara Added" });
  } catch (err) {
    return res.status(422).send(err + "err");
  }
};

OnlineIsthikharaGet = async (req, res) => {
  const result = await OnlineIsthikharaModel.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};
OnlineIsthikharaUpdate = async (req, res, next) => {
  let result = await OnlineIsthikharaModel.findById(req.body.id);
  if (!result) {
    return res.status(404).json({
      success: false,
      message: "Online Isthikhara Not found",
    });
  }
  result = await OnlineIsthikharaModel.findByIdAndUpdate(
    req.body.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(200).json({
    success: true,
    message: "Online Isthikhara Updated",
    data: result,
  });
};
OnlineIsthikharaDel = async (req, res, next) => {
  const { id } = req.body;
  let result = await OnlineIsthikharaModel.findById(id);
  try {
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Online Isthikhara Not Found",
      });
    } else {
      await OnlineIsthikharaModel.findByIdAndDelete(id, function (err, result) {
        if (err) {
          res.status(422).json({
            success: false,
            message: err.message,
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Online Isthikhara Deleted",
          });
        }
      });
    }
  } catch (err) {
    res.status(422).json({ success: false, message: err.message });
  }
};

module.exports = {
  OnlineIsthikharaAdd,
  OnlineIsthikharaGet,
  OnlineIsthikharaUpdate,
  OnlineIsthikharaDel,
};
