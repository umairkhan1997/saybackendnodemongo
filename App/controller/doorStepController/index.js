const { getAllData, saveNewData } = require('../../helper/index');



doorStepGet = async (req, res) => {
    try {
        const data = await getAllData('dsMd')
        return res.status(200).send({ status: 200, success: true, message: 'The data is fetch successfully .', data })
    } catch (e) {
        return res.status(200).send({ status: 200, message: e.message })
    }
};

doorStepAdd = async (req, res) => {
    try {
        const data = await saveNewData("dsMd", req.body);
        if (data) {
            return res.status(200).send({ status: 200, success: true, message: 'data is succesfully submitted .', data })
        }

    } catch (e) {
        return res.status({ status: 400, message: e.message });
    }
}

module.exports = {
    doorStepAdd,
    doorStepGet
};
