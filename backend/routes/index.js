
//Import Modules
const express = require ('express');
const router = express.Router();
const indexCtrl = require('../controllers/index');

//User routes

router.get('/', indexCtrl.getAllIndex);
router.post('/', indexCtrl.createIndex);

module.exports = router;