var express = require('express');
var router = express.Router();
var ctrlData = require('./controllers.js');

router.get('/articles', ctrlData.articles);

module.exports = router;
