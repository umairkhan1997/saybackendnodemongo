const { getAllData, saveNewData } = require('../../helper/index');


intBranchGet = async (req, res) => {
    try {
        const result = await getAllData('intBranchesMd')
        return res.status(200).send({ status: 200, success: true, message: 'The data is fetch successfully .', result })
    } catch (e) {
        return res.status(200).send({ status: 200, message: e.message })
    }
};

intBranchAdd = async (req, res) => {
    try {
        const donate = await saveNewData("intBranchesMd", req.body);
        if (donate) {
            return res.status(200).send({ status: 200, success: true, message: 'Int Branch is succesfully submitted .', donate })
        }

    } catch (e) {
        return res.status({ status: 400, message: e.message });
    }
}

module.exports = {
    intBranchAdd,
    intBranchGet
};
