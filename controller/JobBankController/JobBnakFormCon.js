const JobBankFormSchema = require("../../model/JobBank/JobBankForm");
const checkField = require("../../FieldValidation/checkField");
const _ = require("underscore");
const fs = require("fs");
const upload = require("../../cloudinary").upload;
const vm = require("v-response");

jobBankFormAdd = async (req, res, next) => {
    const { } = req.body;

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
            let bodyw = _.extend(body, { imgCollection: urls });
            try {
                const result = new JobBankFormSchema(bodyw);
                await result.save()
                    .then(saved => {
                        return res.status(200).json({ success: true, message: "News Added", data: saved });
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
    }

}


jobBankFormGet = async (req, res) => {
    const result = await JobBankFormSchema.find();
    res.status(200).json({
        success: true,
        data: result,
    });
};

module.exports = {
    jobBankFormAdd,
    jobBankFormGet
};
