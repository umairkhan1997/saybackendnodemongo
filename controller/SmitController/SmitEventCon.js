const SmitEventModel = require("../../model/SmitModel/SmitEventModel");
const _ = require("underscore");
const fs = require("fs");
const upload = require("../../cloudinary").upload;
const vm = require("v-response");


SmitEventadd = async (req, res, next) => {
    if (!req.files || _.isEmpty(req.files)) {
        return res.status(400)
            .json(vm.ApiResponse(false, 400, "No file uploaded'"))
    }
    const files = req.files;
    try {
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
            let new_user = new SmitEventModel(bodyw);
            await new_user.save()
                .then(saved => {
                    return res.status(200).json({ success: true, message: "Courses Deleted", data: saved });
                }).catch(error => {
                    return res
                        .status(422)
                        .json({ success: false, message: error.message });
                })

        }
        if (!urls) {
            return res.status(400)
                .json(vm.ApiResponse(false, 400, ""))
        }

    } catch (e) {
        console.log("err :", e);
        return next(e);
    }

};


// SmitEventadd = upload.array('imgCollection', 6), (req, res, next) => {
//     const reqFiles = [];
//     const url = req.protocol + '://' + req.get('host')
//     for (var i = 0; i < req.files.length; i++) {
//         reqFiles.push(url + '/public/' + req.files[i].filename)
//     }

//     const user = new SmitEventModel({
//         eventName: req.body.eventName,
//         eventDet: req.body.eventDet,
//         eventImgCollection: reqFiles,
//     });

//     user.save().then(result => {
//         res.status(201).json({
//             message: "Done upload!",
//             userCreated: {
//                 _id: result._id,
//                 imgCollection: result.imgCollection
//             }
//         })
//     }).catch(err => {
//         console.log(err),
//             res.status(500).json({
//                 error: err
//             });
//     })
// }
module.exports = {
    SmitEventadd
};
