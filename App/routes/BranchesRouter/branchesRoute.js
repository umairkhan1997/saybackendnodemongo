const express = require("express");
const router = express.Router();
const branchesCon = require("../../controller/branchesController/index");
const intBranchesConCon = require("../../controller/branchesController/intBranchesController");

// router.put("/homeIntroUpdate", HomeIntroCon.homeIntroUpdate);
router.post("/branchesAdd", branchesCon.branchAdd);
router.get("/branchesGet", branchesCon.branchGet);
router.post("/intBranchesAdd", intBranchesConCon.intBranchAdd);
router.get("/intBranchesGet", intBranchesConCon.intBranchGet);
module.exports = router;