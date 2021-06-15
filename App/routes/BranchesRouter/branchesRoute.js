const express = require("express");
const router = express.Router();
const branchesCon = require("../../controller/branchesController/index");
const intBranchesConCon = require("../../controller/branchesController/intBranchesController");
const citiesBranchesCon = require("../../controller/branchesController/citiesBranchesCon");

// router.put("/homeIntroUpdate", HomeIntroCon.homeIntroUpdate);
router.post("/branchesAdd", branchesCon.branchAdd);
router.get("/branchesGet", branchesCon.branchGet);
router.put("/branchUpdate", branchesCon.branchUpdate);

router.post("/intBranchesAdd", intBranchesConCon.intBranchAdd);
router.get("/intBranchesGet", intBranchesConCon.intBranchGet);
router.put("/intBranchUpdate", intBranchesConCon.intBranchUpdate);


router.post("/cityBranchAdd", citiesBranchesCon.cityBranchAdd);
router.get("/cityBranchGet", citiesBranchesCon.cityBranchGet);
router.put("/cityBranchUpdate", citiesBranchesCon.cityBranchUpdate)
module.exports = router;