var express = require('express');
var router = express.Router();
const collectionsCtrl = require('../controllers/collections');

router.get('/mint', collectionsCtrl.mintPage);

module.exports = router;
