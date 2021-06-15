const { getAllData, saveNewData } = require('../../helper/index');
const eventModel = require("../../model/eventModel/index");
const _ = require("underscore");
const fs = require("fs");
const upload = require("../../../cloudinary").upload;
const vm = require("v-response");

eventGet = async (req, res) => {
    try {
        const result = await getAllData('eventMd')
        return res.status(200).send({ status: 200, success: true, message: 'The data is fetch successfully .', result })
    } catch (e) {
        return res.status(200).send({ status: 200, message: e.message })
    }
};

eventAdd = async (req, res) => {
    // console.log(req.files, "reqqqqq")
    if (!req.files || _.isEmpty(req.files)) {
        // console.log("No file uploaded")
        return res.status(400)
            .json(vm.ApiResponse(false, 400, "No file uploaded'"))
    }
    const files = req.files;
    console.log('files', files, 'files')
    try {
        // console.log('try', 'files')
        let urls = [];
        let multiple = async (path) => await upload(path);
        for (const file of files) {
            const { path } = file;
            // console.log("path", file);
            const newPath = await multiple(path);
            urls.push(newPath);
            fs.unlinkSync(path);
        }
        if (urls) {
            let body = req.body;
            let bodyw = _.extend(body, { multiple_image: urls });
            try {
                try {
                    const eventAdded = await saveNewData("eventMd", bodyw);
                    if (eventAdded) {
                        return res.status(200).send({ status: 200, success: true, message: 'Event is succesfully submitted .', eventAdded })
                    }

                } catch (e) {
                    // console.log(e)
                    return res.status(400).send({ status: 400, success: true, message: e.message })
                }

            } catch (err) {
                // console.log(err)
                return res.status(400).send({ status: 400, success: true, message: err.message })
            }
        }
        if (!urls) {
            // err
            return res.status(400)
                .json(vm.ApiResponse(false, 400, ""))
        }

    } catch (e) {
        console.log("err :", e);
        return next(e);
    }
}

eventUpdate = async (req, res, next) => {
    console.log('filessssssssssssssss')
    if (!req.files || _.isEmpty(req.files)) {

        return res.status(400)
            .json(vm.ApiResponse(false, 400, "No file uploaded'"))
    }
    const files = req.files;
    console.log('files', files, 'files')
    try {
        // console.log('try', 'files')
        let urls = [];
        let multiple = async (path) => await upload(path);
        for (const file of files) {
            const { path } = file;
            // console.log("path", file);
            const newPath = await multiple(path);
            urls.push(newPath);
            fs.unlinkSync(path);
        }
        if (urls) {
            let body = req.body;
            let bodyw = _.extend(body, { multiple_image: urls });
            try {
                let catId = await eventModel.findById(req.body.id);
                if (!catId) {
                    return res.status(404).json({
                        success: false,
                        message: "Event not found",
                    });
                }
                catId = await eventModel.findByIdAndUpdate(
                    req.body.id,
                    bodyw,
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

            } catch (err) {
                console.log(err)
                return res.status(400).send({ status: 400, success: true, message: err.message })
            }
        }
        if (!urls) {
            console.log("No file uploaded1")
            return res.status(400)
                .json(vm.ApiResponse(false, 400, ""))
        }

    } catch (e) {
        console.log("err :", e);
        return next(e);
    }



};

module.exports = {
    eventAdd,
    eventGet,
    eventUpdate
};
