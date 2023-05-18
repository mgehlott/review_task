const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router.get('/', reviewController.getReviews);
router.post('/new', reviewController.addNewReview);
router.post('/edit/:reviewId', reviewController.editReview);
router.post('/delete/:reviewId',reviewController.deleteReview)
module.exports =  router;