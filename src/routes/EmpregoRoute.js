const express = require("express");
const router = express.Router();
const EmpregosController = require("../controller/EmpregosController.js");

router.get("/", EmpregosController.index);
router.post("/", EmpregosController.store);
router.post("/remover", EmpregosController.removeStore);

module.exports = router;
