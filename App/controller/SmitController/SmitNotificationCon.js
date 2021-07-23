const { updateSpecificData, deleteSpecificData } = require('../../helper/index');
const SmitNotificationSchema = require("../../model/SmitModel/SmitNotificationModel");
const checkField = require("../../FieldValidation/checkField");
const _ = require("underscore");
const fs = require("fs");
const upload = require("../../../cloudinary").upload;
const vm = require("v-response");


SaylaniNotificationAdd = async (req, res, next) => {
    const { cityName, courseName, batchName, viewForm, cityCOde } = req.body;
    // console.log(req.body, 'req.body')
    try {
        const result = new SmitNotificationSchema(req.body);
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


};



smitNotificationGet = async (req, res) => {
    try {
        const result = await SmitNotificationSchema.find();
        return res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (e) {
        console.log("err :", e);
        return next(e);
    }
};



const updateCourseAnounce = async (req, res) => {
    const {
        _id,
        cityName,
        cityCode,
        courseName,
        courseId,
        batchName,
        viewForm,
        year,
        duration
    } = req.body;
    const updateCourse = {
        cityName,
        cityCode,
        courseName,
        courseId,
        batchName,
        viewForm,
        year,
        duration,
    };
    try {
        const result = await updateSpecificData(
            "smCoNoti",
            { _id: _id },
            updateCourse
        );
        return res.status(200).send({
            status: 200,
            success: true,
            message: "The data is update successfully .",
            data: result,
        });
    } catch (e) {
        return res.status(200).send({ status: 200, message: e.message });
    }
};

const deleteCourseAnounce = async (req, res) => {
    const { _id } = req.body;
    try {
        const deleteData = await deleteSpecificData("smCoNoti", { _id: _id });
        return res.status(200).send({
            status: 200,
            success: true,
            message: "This course is delete successfully",
            deleteData,
        });
    } catch (error) {
        return res.status(200).send({ status: 400, message: error.message });
    }
};


module.exports = {
    SaylaniNotificationAdd, smitNotificationGet, deleteCourseAnounce, updateCourseAnounce,
};
