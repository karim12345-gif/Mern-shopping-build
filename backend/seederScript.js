require('dotenv').config();


// we are connecting to the databse, from products to cathing the DB
const productsData = require('./data/products')

const connectDB = require('./config/db')

const Product = require('./models/Product')




connectDB();

// over here we are dealing with the database,
//we are going to delete everything inside of the databse 
// and then add all the new data from productsData
const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData)

        console.log("Data Imported Success");
        process.exit();
    } catch (error) {
        console.error("Error with data import");
        process.exit(1);
        
    }
}



importData();
