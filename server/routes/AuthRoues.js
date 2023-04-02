const express = require('express');
const UserController = require('../controllers/AuthUser');
const router = express.Router()


router.post('/add', UserController.Register);
router.post('/login', UserController.Login);
router.put('/update/:id', UserController.Update_User);
router.delete('/delete/:id', UserController.Delete_User);

module.exports = router;