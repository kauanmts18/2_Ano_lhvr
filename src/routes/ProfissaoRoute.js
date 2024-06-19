const express = require("express");
const router = express.Router();
const ProfissaosController = require("../controller/ProfissaoController.js");

router.get("/", ProfissaosController.index);
router.post("/", ProfissaosController.store);
router.post("/remover", ProfissaosController.removeStore);

module.exports = router;
