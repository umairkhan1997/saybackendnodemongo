const SmitAdmissFormModel = require("../../model/SmitModel/SmitAdmissForm");
const checkField = require("../../FieldValidation/checkField");
const _ = require("underscore");
const fs = require("fs");
const upload = require("../../cloudinary").upload;
const vm = require("v-response");
const ObjectId = require('mongodb').ObjectID;

SmitAdmissFormadd = async (req, res) => {
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
            let bodyw = _.extend(body, { multiple_image: urls });

            try {
                SmitAdmissFormModel.nextCount((err, count) => {
                    let user = new SmitAdmissFormModel(bodyw);
                    user.save()
                        .then(saved => {
                            // console.log(saved, 'saved')
                            return res.status(200).json({ success: true, message: "Form Submitted", data: saved });
                        }).catch(error => {
                            return res
                                .status(422)
                                .json({ success: false, message: error.message });
                        })
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

}

SmitAdmissFormGet = async (req, res) => {
    // checkField;
    const result = await SmitAdmissFormModel.find();
    return res.status(200).json({
      success: true,
      data: result,
    });
  };
  
  SmitAdmissFormGetOne = async (req, res) => {
    // checkField;
    const { rollNo} = req.body;
    console.log(req.body)
    const result = await SmitAdmissFormModel. findOne({"rollNo": rollNo}, function(err, doc) {
       
     });
    return res.status(200).json({
      success: true,
      data: result,
    });
  };
 

module.exports = {
    SmitAdmissFormadd,
    SmitAdmissFormGetOne
}