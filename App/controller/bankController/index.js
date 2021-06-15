const { getAllData, saveNewData } = require('../../helper/index');



bankDataGet = async (req, res) => {
    try {
        const result = await getAllData('bankDetailMd')
        return res.status(200).send({ status: 200, success: true, message: 'The data is fetch successfully .', result })
    } catch (e) {
        return res.status(200).send({ status: 200, message: e.message })
    }
};

module.exports = {
    bankDataGet
};
