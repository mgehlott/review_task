const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        console.log(process.env.MONGO_URI);
        const result = await mongoose.connect(process.env.MONGO_URI);
       
        //  console.log(result);
    } catch (error) {
        console.log(error);
    }


}


module.exports = dbConnect;