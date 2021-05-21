const JobBankJobHuntSchema = require("../../model/JobBank/JobBankJobHunt");

JobBankJobHuntAdd = async (req, res) => {
  const { count, catName } = req.body;
  try {
    const result = new JobBankJobHuntSchema({
      count,
      catName,
    });
    await result.save();
    res.send({ message: "New Job Bank Hunt Added" });
  } catch (err) {
    return res.status(422).send(err + "err");
  }
};

JobBankJobHuntUpdate = async (req, res) => {
  const { id } = req.body;
  const results = await JobBankJobHuntSchema.findById(id);

  try {
    if (!results) {
      res
        .status(404)
        .send({ success: false, message: "Job Bank Hunt Updated" });
    } else {
      const result = await JobBankJobHuntSchema.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        }
      );
      res.status(200).send({
        success: true,
        message: "Job Bank Hunt Updated",
        data: result,
      });
    }
  } catch (err) {
    res.status(422).json({ success: false, message: err.message });
  }
};

JobBankJobHuntDel = async (req, res, next) => {
  const { id } = req.body;
  let result = await JobBankJobHuntSchema.findById(id);
  try {
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Job Bank Hunt Found",
      });
    } else {
      await JobBankJobHuntSchema.findByIdAndDelete(id, function (err, results) {
        if (err) {
          res.status(422).json({
            success: false,
            message: err.message,
          });
        } else {
          res.status(200).json({
            success: true,
            message: "Job Bank Hunt Deleted",
          });
        }
      });
    }
  } catch (err) {
    res.status(422).json({ success: false, message: err.message });
  }
};

JobBankJobHuntGet = async (req, res) => {
  const result = await JobBankJobHuntSchema.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};

module.exports = {
  JobBankJobHuntAdd,
  JobBankJobHuntGet,
  JobBankJobHuntUpdate,
  JobBankJobHuntDel,
};
