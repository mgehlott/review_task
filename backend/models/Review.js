const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema =  Schema({

    title: {
        type: String,
        require:true
    },
    content: {
        type: String,
        require:true
    }
}, { timestamps: true });

const Review = mongoose.model('Post', reviewSchema);
module.exports = Review;