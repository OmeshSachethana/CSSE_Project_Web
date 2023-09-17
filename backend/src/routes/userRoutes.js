const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
