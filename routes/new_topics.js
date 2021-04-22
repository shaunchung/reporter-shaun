var express = require('express');
var router = express.Router();

const newTopicsController = require('../controllers/new_topics');

router.get('/', newTopicsController.getProduct);

router.get('/edit', newTopicsController.getEditProduct);

// router.get('/search', newTopicsController.getSearchProduct);

router.post('/add', newTopicsController.postAddProduct);

router.post('/update', newTopicsController.postUpdateProduct);

router.get('/delete', newTopicsController.getDeleteProduct);


module.exports = router;