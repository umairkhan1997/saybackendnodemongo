const express = require("express");
const router = express.Router();

const dastLangListCon = require("../../controller/DastarKhwanController/dastLangListCon");
const DastarIntroCon = require("../../controller/DastarKhwanController/DastarIntroCon");
const DastarkhwanBranchesCon = require("../../controller/DastarKhwanController/DastarkhwanBranchesCon");
const DastarNewsCon = require("../../controller/DastarKhwanController/DastarNewsCon");

router.post("/dastLangListAdd", dastLangListCon.dastLangListAdd);
router.get("/dastLangListGet", dastLangListCon.dastLangListGet);
router.put("/dastLangListUpdate", dastLangListCon.dastLangListUpdate);
router.delete("/dastLangListDel", dastLangListCon.dastLangListDel);

router.post("/DastarIntroAdd", DastarIntroCon.DastarIntroAdd);
router.get("/DastarIntroGet", DastarIntroCon.DastarIntroGet);
router.delete("/DastarIntroDel", DastarIntroCon.DastarIntroDel);

router.post("/dastBranchAdd", DastarkhwanBranchesCon.dastBranchAdd);
router.get("/dastBranchGet", DastarkhwanBranchesCon.dastBranchGet);
router.put("/dastBranchUpdate", DastarkhwanBranchesCon.dastBranchUpdate);
router.delete("/dastBranchDel", DastarkhwanBranchesCon.dastBranchDel);

router.post("/DastarNewsAdd", DastarNewsCon.DastarNewsAdd);
router.get("/DastarNewsGet", DastarNewsCon.DastarNewsGet);
router.delete("/DastarNewsDel", DastarNewsCon.DastarNewsDel);

module.exports = router;
