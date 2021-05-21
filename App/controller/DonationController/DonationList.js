const DonationList = require("../../model/DonationModel/DonationList");
// const cloudinary = require("../../cloudinary");
// const checkField = require("../../FieldValidation/checkField");

DonaListGet = async (req, res) => {
    // checkField;
    const result = await DonationList.find();
    res.status(200).json({
        success: true,
        data: result,
    });
};


DonaListAdd = async (req, res) => {
    const { data } = req.body;

    try {
        const result = new DonationList({
            data
        });
        await result.save();
        res.send({ message: "Donation List Added" });
    } catch (err) {
        return res.status(422).send(err + "err");
    }
};


module.exports = {
    DonaListGet, DonaListAdd
};
