var express = require('express');
var router = express.Router();

const photographyController = require('../controllers/photography');

router.get('/', photographyController.getphotography);

router.get('/edit', photographyController.getEditphotography);

router.post('/add',photographyController.postAddphotography);

router.post('/update', photographyController.postUpdatephotography);

router.get('/delete', photographyController.getDeletephotography);

module.exports = router;