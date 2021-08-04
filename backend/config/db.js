require('dotenv').config();
const mongoose = require('mongoose');

// connect to DB, by cathing the URI from the databse MongoDB

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB connection success");
    } catch (error) {
        console.error("MongoDB connection Fail");
        process.exit(1); // exits the server with 1 
        
    }

}


 
module.exports = connectDB