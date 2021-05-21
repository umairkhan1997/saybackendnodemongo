const JobBankContactSchema = require("../../model/JobBank/JobBankContact");

JobBankContactAdd = async (req, res) => {
  const { address, uanNum, email } = req.body;
  try {
    const result = new JobBankContactSchema({
      address,
      uanNum,
      email,
    });
    await result.save();
    res.send({ message: "New Job Bank Contact Added" });
  } catch (err) {
    return res.status(422).send(err + "err");
  }
};

JobBankContactUpdate = async (req, res) => {
  const { id } = req.body;
  const results = await JobBankContactSchema.findById(id);

  try {
    if (!results) {
      res
        .status(404)
        .send({ success: false, message: "Job Bank Contact Updated" });
    } else {
      const result = await JobBankContactSchema.findByIdAndUpdate(
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
        message: "Job Bank Contact Updated",
        data: result,
      });
    }
  } catch (err) {
    res.status(422).json({ success: false, message: err.message });
  }
};

JobBankContactGet = async (req, res) => {
  const result = await JobBankContactSchema.find();
  res.status(200).json({
    success: true,
    data: result,
  });
};

module.exports = {
  JobBankContactAdd,
  JobBankContactUpdate,
  JobBankContactGet,
};
