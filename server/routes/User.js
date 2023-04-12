const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router()


router.get('/users', UserController.Getusers);
router.get('/dev/:id', UserController.GetIdUsers);

module.exports = router;