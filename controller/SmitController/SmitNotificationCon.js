const SmitNotificationSchema = require("../../model/SmitModel/SmitNotificationModel");
const checkField = require("../../FieldValidation/checkField");
const _ = require("underscore");
const fs = require("fs");
const upload = require("../../cloudinary").upload;
const vm = require("v-response");



SaylaniNotificationAdd = async (req, res, next) => {
    const { cityName, courseName, batchName, viewForm } = req.body;
    console.log(req.body, 'req.body')
    // if (!name) {
    //     return res.status(400).json(checkField("News Name"));
    // }
    // else if (!description) {
    //     return res.status(400).json(checkField("News Description"));
    // }
    // else if (!newsdate) {
    //     return res.status(400).json(checkField("News Date"));
    // } else {


    if (!req.files || _.isEmpty(req.files)) {
        return res.status(400)
            .json(vm.ApiResponse(false, 400, "No file uploaded'"))
    }
    const files = req.files;
    console.log('files', files, 'files')
    try {
        console.log('try', 'files')
        let urls = [];
        let multiple = async (path) => await upload(path);
        for (const file of files) {
            const { path } = file;
            console.log("path", file);
            const newPath = await multiple(path);
            urls.push(newPath);
            fs.unlinkSync(path);
        }
        if (urls) {
            let body = req.body;
            let bodyw = _.extend(body, { multiple_image: urls });
            try {
                const result = new SmitNotificationSchema(bodyw);
                await result.save()
                    .then(saved => {
                        return res.status(200).json({ success: true, message: "SMIT Notification Added", data: saved });
                    }).catch(error => {
                        return res
                            .status(422)
                            .json({ success: false, message: error.message });
                    })
            } catch (err) {
                return res.status(422).send(err + "err");
            }
        }
        if (!urls) {
            return res.status(400)
                .json(vm.ApiResponse(false, 400, ""))
        }

    } catch (e) {
        console.log("err :", e);
        return next(e);
    }


    // }

};


smitNotificationGet = async (req, res) => {
    // checkField;
    const result = await SmitNotificationSchema.find();
    return res.status(200).json({
        success: true,
        data: result,
    });
};

module.exports = {
    SaylaniNotificationAdd, smitNotificationGet
};
