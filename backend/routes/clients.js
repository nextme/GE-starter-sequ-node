const clientsCtrl = require('../controllers/clients.js');
const express = require('express');
const router = express.Router();

/* get clients list */
router.get('/list', clientsCtrl.list);
/* create user */
router.post('/create', clientsCtrl.create);
/* update user */
router.put('/update', clientsCtrl.update);
/* delete user */
router.delete('/:userId', clientsCtrl.destroy);

module.exports = router;