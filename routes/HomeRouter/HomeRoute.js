const express = require("express");
const router = express.Router();
const HomeMiddle = require("../../middleware/HomeMiddle/homeSliderMiddleware");
const HomeSliderCon = require("../../controller/HomeController/HomeSlider");
const HomeIntroCon = require("../../controller/HomeController/HomeIntroCon");

router.get("/home", HomeMiddle, (req, res) => res.send("Home Route Working"));
router.post("/HomeSliderImgadd", HomeSliderCon.HomeSliderImgadd);
router.get("/homeSliderImgGet", HomeSliderCon.HomeSliderImgGet);
router.put("/homeSliderImgUpdate", HomeSliderCon.HomeSliderImgUpdate);
router.delete("/HomeSliderImgDel", HomeSliderCon.HomeSliderImgDel);
router.put("/homeIntroUpdate", HomeIntroCon.homeIntroUpdate);
router.get("/homeIntroGet", HomeIntroCon.homeIntroGet);

module.exports = router;
