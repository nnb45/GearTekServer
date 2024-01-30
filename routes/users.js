var express = require('express');
var router = express.Router();
const userController = require("../controllers/user"); 

//update
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/:id", userController.getUser);
router.get("/", userController.getAllUsers);

module.exports = router;
