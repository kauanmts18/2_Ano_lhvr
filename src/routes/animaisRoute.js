const express = require("express");
const router = express.Router();
const animaisController = require("../controller/animaisController.js");

router.get("/", animaisController.index);
router.post("/", animaisController.store);
router.post("/remover", animaisController.removeStore);

module.exports = router;
