const { getAllData, saveNewData } = require('../../helper/index');
const championsModel = require("../../model/championsModel/index");


championGet = async (req, res) => {
    try {
        const result = await getAllData('championMd')
        return res.status(200).send({ status: 200, success: true, message: 'The data is fetch successfully.', result })
    } catch (e) {
        return res.status(200).send({ status: 200, message: e.message })
    }
};

championAdd = async (req, res) => {
    try {
        const donate = await saveNewData("championMd", req.body);
        if (donate) {
            return res.status(200).send({ status: 200, success: true, message: 'Champion is succesfully submitted .', donate })
        }

    } catch (e) {
        return res.status({ status: 400, message: e.message });
    }
}

championUpdate = async (req, res, next) => {
    let catId = await championsModel.findById(req.body.id);
    if (!catId) {
        return res.status(404).json({
            success: false,
            message: "Champion not found",
        });
    }
    catId = await championsModel.findByIdAndUpdate(
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
        message: "Champion Updated",
        data: catId,
    });
};

module.exports = {
    championAdd,
    championGet,
    championUpdate
};
