const DastarkhwanBranchesSchema = require("../../model/Dastarkhwan/DastarkhwanBranchesModel");
const checkField = require("../../FieldValidation/checkField");
dastBranchAdd = async (req, res) => {
  const { typeName, typeNumber } = req.body;

  if (!typeName) {
    return res.status(400).json(checkField("Type Name"));
  } else if (!typeNumber) {
    return res.status(400).json(checkField("Type Number"));
  } else {
    try {
      const result = new DastarkhwanBranchesSchema({
        typeName,
        typeNumber,
      });
      await result.save();
      res.send({ message: "Dastarkhwan Branch Added" });
    } catch (err) {
      return res.status(422).send(err + "err");
    }
  }
};

dastBranchGet = async (req, res) => {
  const result = await DastarkhwanBranchesSchema.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};
dastBranchUpdate = async (req, res, next) => {
  const { id, typeName, typeNumber } = req.body;
  if (!typeName) {
    return res.status(400).json(checkField("Type Name"));
  } else if (!typeNumber) {
    return res.status(400).json(checkField("Type Number"));
  } else {
    let result = await DastarkhwanBranchesSchema.findById(req.body.id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Dastarkhwan Branch Not found",
      });
    }
    result = await DastarkhwanBranchesSchema.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "Dastarkhwan Branch Updated",
      data: result,
    });
  }
};
dastBranchDel = async (req, res, next) => {
  const { id, typeName, typeNumber } = req.body;
  if (!id) {
    return res.status(400).json(checkField("Type Name"));
  } else {
    let result = await DastarkhwanBranchesSchema.findById(id);
    try {
      if (!result) {
        res.status(404).json({
          success: false,
          message: "Dastarkhwan Branch Not Found",
        });
      } else {
        await DastarkhwanBranchesSchema.findByIdAndDelete(id, function (
          err,
          result
        ) {
          if (err) {
            res.status(422).json({
              success: false,
              message: err.message,
            });
          } else {
            res.status(200).json({
              success: true,
              message: "Dastarkhwan Branch Deleted",
            });
          }
        });
      }
    } catch (err) {
      res.status(422).json({ success: false, message: err.message });
    }
  }
};

module.exports = {
  dastBranchAdd,
  dastBranchGet,
  dastBranchUpdate,
  dastBranchDel,
};
