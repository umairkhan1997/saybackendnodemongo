const express = require("express");
const router = express.Router();
const RoPlantEstiCostCon = require("../../controller/RoPlantController/RoPlantEstiCostCon");
const RoPlantEstiCostMiddle = require("../../middleware/RoPlant/RoPlantEstiCostMiddle");
const RoPlantLocationCon = require("../../controller/RoPlantController/RoPlantLocationCon");
const RoPlantIntroCon = require("../../controller/RoPlantController/RoPlantIntroCon");
const RoPlantBranchCon = require("../../controller/RoPlantController/RoPlantBranchCon");

//Ro Plant Esti Cost
router.post(
  "/RoPlantEstiCostAdd",
  RoPlantEstiCostMiddle,
  RoPlantEstiCostCon.RoPlantEstiCostAdd
);
router.get("/RoPlantEstiCostGet", RoPlantEstiCostCon.RoPlantEstiCostGet);
router.put("/RoPlantEstiCostUpdate", RoPlantEstiCostCon.RoPlantEstiCostUpdate);
router.delete("/RoPlantEstiCostDel", RoPlantEstiCostCon.RoPlantEstiCostDel);

//Ro Plant Location Con
router.post("/RoPlantLocationAdd", RoPlantLocationCon.RoPlantLocationAdd);
router.get("/RoPlantLocationGet", RoPlantLocationCon.RoPlantLocationGet);
router.put("/RoPlantLocationUpdate", RoPlantLocationCon.RoPlantLocationUpdate);
router.delete("/RoPlantLocationDel", RoPlantLocationCon.RoPlantLocationDel);

router.get("/RoPlantIntroGet", RoPlantIntroCon.RoPlantIntroGet);
router.post("/RoPlantIntroAdd", RoPlantIntroCon.RoPlantIntroAdd);
router.delete("/RoPlantIntroDel", RoPlantIntroCon.RoPlantIntroDel);

//Ro Plant
router.post("/RoPlantBranchAdd", RoPlantBranchCon.RoPlantBranchAdd);
router.get("/RoPlantBranchGet", RoPlantBranchCon.RoPlantBranchGet);
router.put("/RoPlantBranchUpdate", RoPlantBranchCon.RoPlantBranchUpdate);
router.delete("/RoPlantBranchDel", RoPlantBranchCon.RoPlantBranchDel);

module.exports = router;
