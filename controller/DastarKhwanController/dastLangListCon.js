const dastLangListSchema = require("../../model/Dastarkhwan/dastLangList");

dastLangListAdd = async (req, res) => {
  const { descrip, perDay, perMonth, perYear } = req.body;

  try {
    const result = new dastLangListSchema({
      descrip,
      perDay,
      perMonth,
      perYear,
    });
    await result.save();
    res.send({ message: "Dastarkhwan List Added" });
  } catch (err) {
    return res.status(422).send(err + "err");
  }
};

dastLangListGet = async (req, res) => {
  const result = await dastLangListSchema.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};
dastLangListUpdate = async (req, res, next) => {
  let result = await dastLangListSchema.findById(req.body.id);
  if (!result) {
    return res.status(404).json({
      success: false,
      message: "Dastarkhwan List Not found",
    });
  }
  result = await dastLangListSchema.findByIdAndUpdate(req.body.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Dastarkhwan List Updated",
    data: result,
  });
};
dastLangListDel = async (req, res, next) => {
  const { id } = req.body;
  let result = await dastLangListSchema.findById(id);
  try {
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Dastarkhwan List Not Found",
      });
    } else {
      await dastLangListSchema.findByIdAndDelete(id, function (err, result) {
        if (err) {
          res.status(422).json({
            success: false,
            message: err.message,
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Dastarkhwan List Deleted",
          });
        }
      });
    }
  } catch (err) {
    res.status(422).json({ success: false, message: err.message });
  }
};

module.exports = {
  dastLangListAdd,
  dastLangListGet,
  dastLangListUpdate,
  dastLangListDel,
};
