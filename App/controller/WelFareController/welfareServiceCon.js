const WelfareServiceModel = require("../../model/Welfare/welfareService");
const checkField = require("../../FieldValidation/checkField");

WelfareServiceAdd = async (req, res) => {
    const { WelName, welIco } = req.body;
    if (!WelName) {
        return res.status(400).json(checkField("Welfare Name"));
    } else if (!welIco) {
        return res.status(400).json(checkField("Welfare Icon"));
    } else {
        try {
            const result = new WelfareServiceModel({
                WelName, welIco
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

WelfareServiceGet = async (req, res) => {
    // checkField;
    const result = await WelfareServiceModel.find();
    return res.status(200).json({
        success: true,
        data: result,
    });
};

WelfareServiceDel = async (req, res, next) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json(checkField("Welfare ID"));
    } else {
        let resu = await WelfareServiceModel.findById(id);
        try {
            if (!resu) {
                return res.status(404).json({
                    success: false,
                    message: "Welfare Not Found",
                });
            } else {
                await WelfareServiceModel.findByIdAndDelete(id, function (err, result) {
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
    WelfareServiceAdd,
    WelfareServiceGet,
    WelfareServiceDel,
};
