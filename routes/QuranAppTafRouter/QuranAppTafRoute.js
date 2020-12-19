const express = require("express");
const router = express.Router();
const QuranAppTafHeadCon = require("../../controller/QuranAppTafController/QuranAppTafHeadCon");
const QuranAppAndroidCon = require("../../controller/QuranAppTafController/QuranAppAndroidCon");
const QuranAppIosCon = require("../../controller/QuranAppTafController/QuranAppIosCon");

//Quran App Taf Head
router.post("/QuranAppTafHeadAdd", QuranAppTafHeadCon.QuranAppTafHeadAdd);
router.get("/QuranAppTafHeadGet", QuranAppTafHeadCon.QuranAppTafHeadGet);
router.put("/QuranAppTafHeadUpdate", QuranAppTafHeadCon.QuranAppTafHeadUpdate);

//Quran App ANDROID
router.post("/QuranAppAndroidAdd", QuranAppAndroidCon.QuranAppAndroidAdd);
router.get("/QuranAppAndroidGet", QuranAppAndroidCon.QuranAppAndroidGet);
router.delete("/QuranAppAndroidDel", QuranAppAndroidCon.QuranAppAndroidDel);

//Quran App IOS
router.post("/QuranAppIosAdd", QuranAppIosCon.QuranAppIosAdd);
router.get("/QuranAppIosGet", QuranAppIosCon.QuranAppIosGet);
router.delete("/QuranAppIosDel", QuranAppIosCon.QuranAppIosDel);

module.exports = router;
