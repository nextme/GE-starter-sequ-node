const mainCtrl = require('../controllers/main.js');
const express = require('express');
const router = express.Router();

/* GET API feed */
router.get('/',mainCtrl.mockup);

router.get('/errors',mainCtrl.getErrors);

module.exports = router;