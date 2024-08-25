const router=require('express').Router();
const userController = require("../controllers/user");
const authController = require("../controllers/auth");

router.patch("/update-me",authController.protected ,userController.updateMe);

router.post("/get-user",userController.getUsers)
router.post("/get-friends",userController.getFriends)
router.post("/get-requests",userController.getRequests)

module.exports =router;

// patch ! partial update 