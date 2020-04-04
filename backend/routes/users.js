const usersCtrl = require('../controllers/users.js');
const express = require('express');
const router = express.Router();

/* get users list */
router.get('/list', usersCtrl.list);
/* create user */
router.get('/create', usersCtrl.renderCreateView);
router.post('/create', usersCtrl.create);
/* update user */
router.put('/update', usersCtrl.update);
/* delete user */
router.delete('/:userId', usersCtrl.destroy);

module.exports = router;