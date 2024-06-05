const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.index);
router.post("/", userController.store);
router.post("/remover", userController.removeStore);

module.exports = router;
