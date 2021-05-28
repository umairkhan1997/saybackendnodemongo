const express = require("express");
const router = express.Router();
const SmitTeachersModelCon = require("../../controller/SmitController/SmitTeachers");
const SmitStdCounCon = require("../../controller/SmitController/SmitStdCounCon");
const SmitCoursesCon = require("../../controller/SmitController/SmitCoursesCon");
const SmitContactCon = require("../../controller/SmitController/SmitContactCon");
const SmitCollaborationCon = require("../../controller/SmitController/SmitCollaborationCon");
const SmitEventCon = require("../../controller/SmitController/SmitEventCon");
const SmitNotificationCon = require("../../controller/SmitController/SmitNotificationCon");
const SmitAdmissFormCon = require("../../controller/SmitController/SmitAdmissFormCon");
const smitAFMiddle = require("../../middleware/smitAdmissFormMiddle/smitAFMiddle");
const smitWorkShopCon = require("../../controller/SmitController/smitWorkShop");
const smitFacultyCourseCon = require("../../controller/SmitController/smitFacultyCourseCon");
const smitSuccessStoriesCon = require("../../controller/SmitController/smitSuccessStoriesCon")
const smitRegCrenCon = require("../../controller/SmitController/smitRegCren")
// const SmitEventModel = require("../../model/SmitModel/SmitEventModel");


const upload = require('../../../multer')
// const cloudinary = require('../../cloudinary')
// const fs = require('fs');



router.post("/smitTeachersadd", SmitTeachersModelCon.SmitTeachersadd);
router.get("/smitTeachersGet", SmitTeachersModelCon.SmitTeachersGet);
router.put("/smitTeachersUpdate", SmitTeachersModelCon.SmitTeachersUpdate);
router.delete("/smitTeachersDel", SmitTeachersModelCon.SmitTeachersDel);

// SMIT Student Counts ROUTES
router.post("/SmitCounAdd", SmitStdCounCon.SmitCounAdd);
router.get("/SmitCounGet", SmitStdCounCon.SmitCounGet);
router.put("/SmitCounUpdate", SmitStdCounCon.SmitCounUpdate);
router.delete("/SmitCounDel", SmitStdCounCon.SmitCounDel);

// SMIT COURSES ROUTES
router.post("/smitCoursesAdd", SmitCoursesCon.smitCoursesAdd);
router.get("/smitCoursesGet", SmitCoursesCon.smitCoursesGet);
router.put("/smitCoursesUpdate", SmitCoursesCon.smitCoursesUpdate);
router.delete("/smitCoursesDelete", SmitCoursesCon.smitCoursesDelete);

// SMIT Contact ROUTES
router.post("/SmitContactAdd", SmitContactCon.SmitContactAdd);
router.get("/SmitContactGet", SmitContactCon.SmitContactGet);
router.put("/SmitContactUpdate", SmitContactCon.SmitContactUpdate);

///SMIT TEACHER ROUTES
// router.post("/SmitTeacheradd", SmitTeacherCon.SmitTeacheradd);
// router.get("/SmitTeacherGet", SmitTeacherCon.SmitTeacherGet);
// router.delete("/SmitTeacherDel", SmitTeacherCon.SmitTeacherDel);

///Smit Collaboration ROUTES
router.post("/SmitCollaborationadd", SmitCollaborationCon.SmitCollaborationadd);
router.get("/SmitCollaborationGet", SmitCollaborationCon.SmitCollaborationGet);
router.delete(
  "/SmitCollaborationDel",
  SmitCollaborationCon.SmitCollaborationDel
);

//SMIT EVENTS

router.post("/smitWorkshopAdd", smitWorkShopCon.smitWorkshopAdd);
router.get("/smitWorkshopGet", smitWorkShopCon.smitWorkshopGet);
router.delete("/smitWorkshopDel", smitWorkShopCon.smitWorkshopDel);

router.post("/SmitEventadd", upload.array("imgCollection", 12), SmitEventCon.SmitEventadd);


// SMIT NOTIFICATION

router.post('/SaylaniNotificationAdd', upload.array("imgCollection", 12), SmitNotificationCon.SaylaniNotificationAdd)
router.get('/smitNotificationGet', SmitNotificationCon.smitNotificationGet);



router.post('/SmitAdmissFormadd', upload.array("imgCollection", 12), SmitAdmissFormCon.SmitAdmissFormadd);
router.post('/SmitAdmissFormGetOne', SmitAdmissFormCon.SmitAdmissFormGetOne);
router.post('/smitAdmissUpdateId', SmitAdmissFormCon.UpdateId);
router.post('/smitAdmissfindData', SmitAdmissFormCon.findData);
/////SMIT FACULTY COURSES API


router.post('/smitFacultyCourseAdd', smitFacultyCourseCon.smitFacultyCourseAdd)
router.get('/smitFacultyCourseGet', smitFacultyCourseCon.smitFacultyCourseGet);


/////SMIT Success Stories API

router.post('/smitSuccessStoriesAdd', smitSuccessStoriesCon.smitSuccessStoriesAdd)
router.get('/smitSuccessStoriesGet', smitSuccessStoriesCon.smitSuccessStoriesGet);



/////SMIT Courses Registration Admin Auth API

router.post('/smitRegauthUserSignUp', smitRegCrenCon.authUserSignUp)
router.post('/smitRegauthUserLogin', smitRegCrenCon.authUserLogin);




// router.post("/SmitEventadd", upload.array('imgCollection', 6), (req, res, next) => {
//   console.log(req.body)
//   const reqFiles = [];
//   const url = req.protocol + '://' + req.get('host')
//   for (var i = 0; i < req.files.length; i++) {
//     reqFiles.push(url + '/public/' + req.files[i].filename)
//   }

//   const user = new SmitEventModel({
//     eventName: req.body.eventName,
//     eventDet: req.body.eventDet,
//     eventImgCollection: reqFiles,
//   });

//   user.save().then(result => {
//     res.status(201).json({
//       message: "Done upload!",
//       userCreated: {
//         _id: result._id,
//         imgCollection: result.imgCollection
//       }
//     })
//   }).catch(err => {
//     console.log(err),
//       res.status(500).json({
//         error: err
//       });
//   })
// })

module.exports = router;
