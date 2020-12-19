const express = require("express");
const router = express.Router();
const MediaVideoCon = require("../../controller/MediaController/MediaVideoCon");

router.post("/mediaVideosAdd", MediaVideoCon.mediaVideosAdd);
router.get("/mediaAllVideoGet", MediaVideoCon.mediaAllVideoGet);
router.put("/mediaVideosUpdate", MediaVideoCon.mediaVideosUpdate);
router.delete("/mediaVideoDel", MediaVideoCon.mediaVideoDel);

module.exports = router;
