const Review = require('../models/Review');
const mongoose = require('mongoose')

exports.addNewReview = async (req, res, next) => {
    console.log('new ')
    const { title, content } = req.body;
    if (!title || !content) {
       return res.status(400).json({
            message: "title or content field is not provided,please provide all fields"
        });
    }

    const review = await Review.create({
        title,
        content
    });
    if (review)
    {
        res.status(201)
            .json({
                message: "review is created",
                review,
            });     
    }
    else {
       return res.status(400).json({
            message:'user creation is failed'
        })
    }
}

exports.editReview = async (req, res, next) => {
    
    const { reviewId } = req.params;
    console.log(reviewId)
    if (!reviewId)
    {
        return res.status(400).json({
            message: "id is not provided"
        });    
    }
    
    
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({
            message: "title or content field is not provided,please provide all fields"
        });
    }
    
    
     //const castedReviewId = mongoose.Types.ObjectId(reviewId);
    
    const review = await Review.findById(reviewId);
  
         const updated = await Review.findByIdAndUpdate(reviewId, {

            title,
            content
        }, {
            new: true
        });
        console.log(updated);
        if (updated) {
            res.status(201);
            res.json({ message: 'updated !!', updated });
        } else {
            res.status(401);
            res.json({ message: 'error is updating post' });
        }

}

exports.getReviews = async (req, res, next) => {
    
    const reviews = await Review.find({}).sort({createdAt:-1});
    if(reviews){
        res.status(200);
        res.json(reviews);
    } else {
        res.status(500).json({message:'error is fetching reviews'});
    }
}

exports.deleteReview = async (req, res, next) => {
    const { reviewId } = req.params;
    console.log(reviewId);
    
    console.log(reviewId)
    if (!reviewId)
    {
        return res.status(400).json({
            message: "id is not provided"
        });    
    }
    
    const deletedReview = await Review.findByIdAndDelete(reviewId);
      if (deletedReview) {
            res.status(201);
            res.json({ message: 'Deleted !!', deletedReview });
        } else {
            res.status(401);
            res.json({ message: 'error is deleting post' });
        }
}