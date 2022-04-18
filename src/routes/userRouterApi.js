const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();


router.get('/test-user-api', UserController.testUser)



module.exports = router;