const smitWorkShopModel = require("../../model/SmitModel/smitWorkShop");
const checkField = require("../../FieldValidation/checkField");

smitWorkshopAdd = async (req, res) => {
    const { Name, TeacherHostName, Date, vanue, Link } = req.body;
    // console.log(data, "imgurl");
    if (!Name) {
        return res.status(400).json(checkField("Smit Workshop Name"));
    } else if (!TeacherHostName) {
        return res.status(400).json(checkField("Smit Workshop TeacherHostName"));
    } else if (!Date) {
        return res.status(400).json(checkField("Smit Workshop Date"));
    }
    else if (!vanue) {
        return res.status(400).json(checkField("Smit Workshop vanue"));
    }
    else if (!Link) {
        return res.status(400).json(checkField("Smit Workshop Link"));
    } else {
        try {
            const result = new smitWorkShopModel({
                Name, TeacherHostName, Date, vanue, Link
            });
            await result.save()
                .then(saved => {
                    return res.status(200).json({ success: true, message: "Smit Workshop Added", data: saved });
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

smitWorkshopGet = async (req, res) => {
    // checkField;
    const result = await smitWorkShopModel.find();
    return res.status(200).json({
        success: true,
        data: result,
    });
};

smitWorkshopDel = async (req, res, next) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json(checkField("Welfare ID"));
    } else {
        let resu = await smitWorkShopModel.findById(id);
        try {
            if (!resu) {
                return res.status(404).json({
                    success: false,
                    message: "Smit Workshop Not Found",
                });
            } else {
                await smitWorkShopModel.findByIdAndDelete(id, function (err, result) {
                    if (err) {
                        return res.status(422).json({
                            success: false,
                            message: err.message,
                        });
                    } else {
                        return res.status(200).json({
                            success: true,
                            message: "Smit Workshop Deleted",
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
    smitWorkshopAdd,
    smitWorkshopGet,
    smitWorkshopDel,
};
