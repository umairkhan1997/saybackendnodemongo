const { getAllData, saveNewData } = require('../../helper/index');
const citiesbranchModel = require("../../model/branchesModel/citiesbranch");


cityBranchGet = async (req, res) => {
    try {
        const result = await getAllData('cBMd')
        return res.status(200).send({ status: 200, success: true, message: 'The data is fetch successfully .', result })
    } catch (e) {
        return res.status(200).send({ status: 200, message: e.message })
    }
};

cityBranchAdd = async (req, res) => {
    try {
        const donate = await saveNewData("cBMd", req.body);
        if (donate) {
            return res.status(200).send({ status: 200, success: true, message: 'Branch is succesfully submitted .', donate })
        }

    } catch (e) {
        return res.status({ status: 400, message: e.message });
    }
}

cityBranchUpdate = async (req, res) => {
    try {
        let catId = await citiesbranchModel.findById(req.body.id);
        if (!catId) {
            return res.status(404).json({
                success: false,
                message: "Branch not found",
            });
        }
        catId = await citiesbranchModel.findByIdAndUpdate(
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
    cityBranchAdd,
    cityBranchGet,
    cityBranchUpdate
};
