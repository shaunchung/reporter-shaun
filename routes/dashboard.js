var express = require('express');
var router = express.Router();

const dashboardController = require('../controllers/dashboard');

router.get('/', dashboardController.getDashboard);
// router.get('/', dashboardController.getTopics);

module.exports = router;