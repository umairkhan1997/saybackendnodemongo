const { getAllData, saveNewData } = require('../../helper/index');

const branchModel = require("../../model/branchesModel/index");

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

branchUpdate = async (req, res) => {
    try {
        let catId = await branchModel.findById(req.body.id);
        if (!catId) {
            return res.status(404).json({
                success: false,
                message: "Branch not found",
            });
        }
        catId = await branchModel.findByIdAndUpdate(
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
            message: "Branch Updated",
            data: catId,
        });
    } catch (e) {
        return res.status({ status: 400, message: e.message });
    }
}


module.exports = {
    branchAdd,
    branchGet,
    branchUpdate
};
