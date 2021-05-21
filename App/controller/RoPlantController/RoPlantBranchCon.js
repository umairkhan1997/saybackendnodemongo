const RoPlantBranchSchema = require("../../model/RoPlant/RoPlantBranch");
const checkField = require("../../FieldValidation/checkField");

RoPlantBranchAdd = async (req, res) => {
  const { typeName, typeNumber } = req.body;

  if (!typeName) {
    return res.status(400).json(checkField("Type Name"));
  } else if (!typeNumber) {
    return res.status(400).json(checkField("Type Number"));
  } else {
    try {
      const result = new RoPlantBranchSchema({
        typeName,
        typeNumber,
      });
      await result.save();
      res.send({ message: "RoPlant Branch Added" });
    } catch (err) {
      return res.status(422).send(err + "err");
    }
  }
};

RoPlantBranchGet = async (req, res) => {
  const result = await RoPlantBranchSchema.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};
RoPlantBranchUpdate = async (req, res, next) => {
  const { id, typeName, typeNumber } = req.body;
  if (!typeName) {
    return res.status(400).json(checkField("Type Name"));
  } else if (!typeNumber) {
    return res.status(400).json(checkField("Type Number"));
  } else {
    let result = await RoPlantBranchSchema.findById(req.body.id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "RoPlant Branch Not found",
      });
    }
    result = await RoPlantBranchSchema.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "RoPlant Branch Updated",
      data: result,
    });
  }
};
RoPlantBranchDel = async (req, res, next) => {
  const { id, typeName, typeNumber } = req.body;
  if (!id) {
    return res.status(400).json(checkField("Type Name"));
  } else {
    let result = await RoPlantBranchSchema.findById(id);
    try {
      if (!result) {
        res.status(404).json({
          success: false,
          message: "RoPlant Branch Not Found",
        });
      } else {
        await RoPlantBranchSchema.findByIdAndDelete(id, function (err, result) {
          if (err) {
            res.status(422).json({
              success: false,
              message: err.message,
            });
          } else {
            res.status(200).json({
              success: true,
              message: "RoPlant Branch Deleted",
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
  RoPlantBranchAdd,
  RoPlantBranchGet,
  RoPlantBranchUpdate,
  RoPlantBranchDel,
};
