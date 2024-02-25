const mongoose= require('mongoose');

const url ='mongodb://127.0.0.1:27017/pollonia_dental_practice';

const connectDb = () => {
    mongoose.connect(url, {})
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
};


module.exports = connectDb;