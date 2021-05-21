const JobBankOffFormSchema = require("../../model/JobBank/JobBankOffFormModel");
const checkField = require("../../FieldValidation/checkField");

JobBankOffFormAdd = async (req, res) => {
    const { comName, natJob, location, approxSalary, timePeriod, hrContact, selectJbTyp, approxDur,
        expReq, jobDes } = req.body;
    console.log(req, "imgurl");
    if (!comName) {
        return res.status(400).json(checkField("Company Name"));
    } else if (!natJob) {
        return res.status(400).json(checkField("Nature Job"));
    }
    else if (!location) {
        return res.status(400).json(checkField("location"));
    } else if (!approxSalary) {
        return res.status(400).json(checkField("Approximate Salary"));
    }
    else if (!timePeriod) {
        return res.status(400).json(checkField("Time Period"));
    } else if (!hrContact) {
        return res.status(400).json(checkField("HR Contact"));
    }
    else if (!selectJbTyp) {
        return res.status(400).json(checkField("Select Job Type"));
    } else if (!expReq) {
        return res.status(400).json(checkField("Job Experience"));
    }
    else if (!jobDes) {
        return res.status(400).json(checkField("Job Description"));
    }
    else {
        try {
            const result = new JobBankOffFormSchema({
                comName, natJob, location, approxSalary, timePeriod, hrContact, selectJbTyp, approxDur,
                expReq, jobDes
            });
            await result.save();
            return res.status(200).json({ message: "Form Submitted" });
        } catch (err) {
            console.log(err.message)
            return res.status(422).send({ message: err.message });
        }
    }
}

module.exports = {
    JobBankOffFormAdd

};
