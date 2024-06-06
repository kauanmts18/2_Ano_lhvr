const express = require("express");
const router = express.Router();
const casaController = require("../controller/casaController.js.js");

router.get("/", casaController.index);
router.post("/", casaController.store);
router.post("/remover", casaController.removeStore);

module.exports = router;
