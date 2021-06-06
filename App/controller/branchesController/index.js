const { getAllData, saveNewData } = require('../../helper/index');



branchGet = async (req, res) => {
    try {
        const result = await getAllData('branchesMd')
        return res.status(200).send({ status: 200, success: true, message: 'The data is fetch successfully .', result })
    } catch (e) {
        return res.status(200).send({ status: 200, message: e.message })
    }
};

branchAdd = async (req, res) => {
    try {
        const donate = await saveNewData("branchesMd", req.body);
        if (donate) {
            return res.status(200).send({ status: 200, success: true, message: 'Branch is succesfully submitted .', donate })
        }

    } catch (e) {
        return res.status({ status: 400, message: e.message });
    }
}

module.exports = {
    branchAdd,
    branchGet
};
