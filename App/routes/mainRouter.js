const express = require("express");
const router = express.Router();

router.use("/home", require("./HomeRouter/HomeRoute"));
router.use("/media", require("./mediaRouter/MediaRoute"));
router.use("/project", require("./projectRouter/projectRoute"));
router.use("/smit", require("./SmitRouter/SmitRoute"));
router.use("/dastarkhwan", require("./DastarkhwanRouter/DastarkhwanRoute"));
router.use("/roPlant", require("./RoPlantRouter/RoPlantRoute"));
router.use(
  "/OnlineIsthikhara",
  require("./OnlineIsthikharaRouter/OnlineIsthikharaRoute")
);
router.use("/QuranAppTaf", require("./QuranAppTafRouter/QuranAppTafRoute"));
router.use("/JobBank", require("./JobBankRouter/JobBankRoute"));
router.use("/Welfare", require("./WelfareRouter/WelfareRoute"));
router.use("/Incubation", require("./IncubationRouter/IncubationRoute"));
router.use(
  "/OnlineMasjidReg",
  require("./OnlineMasjidRegRouter/OnlineMasjidRegRoute")
);
router.use(
  "/OnlineQuranReg",
  require("./OnlineQuranRegRouter/OnlineQuranRegRoute")
);
router.use("/Books", require("./BooksRouter/BookRoute"));
router.use('/news', require("./News/NewsRouter"));
router.use('/donation', require("./donationRouter/donationRoute"));
router.use('/greenhouse', require("./greenHouseRouter/greenHouseRoute"));
router.use('/medical', require("./medicalRouter/medicalRoute"));
router.use('/blood', require("./bloodRouter/bloodRoute"));
router.use("/saylaniBranches", require("./BranchesRouter/branchesRoute"));
router.use("/champions", require("./championRoute/index"));
router.use("/events", require("./eventRoute/index"));
router.use("/saylaniBank", require("./BankRouter/index"));
router.use("/saylaniDoorStep", require("./doorStepRoute/index"));
router.use("/currency", require("./currencyRouter/index"));
module.exports = router;
