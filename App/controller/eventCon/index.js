const { getAllData, saveNewData } = require('../../helper/index');
const eventModel = require("../../model/eventModel/index");


eventGet = async (req, res) => {
    try {
        const result = await getAllData('eventMd')
        return res.status(200).send({ status: 200, success: true, message: 'The data is fetch successfully .', result })
    } catch (e) {
        return res.status(200).send({ status: 200, message: e.message })
    }
};

eventAdd = async (req, res) => {
    try {
        const donate = await saveNewData("eventMd", req.body);
        if (donate) {
            return res.status(200).send({ status: 200, success: true, message: 'Event is succesfully submitted .', donate })
        }

    } catch (e) {
        return res.status({ status: 400, message: e.message });
    }
}

eventUpdate = async (req, res, next) => {
    let catId = await eventModel.findById(req.body.id);
    if (!catId) {
        return res.status(404).json({
            success: false,
            message: "Event not found",
        });
    }
    catId = await eventModel.findByIdAndUpdate(
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
        message: "Event Updated",
        data: catId,
    });
};

module.exports = {
    eventAdd,
    eventGet,
    eventUpdate
};
