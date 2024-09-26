const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('your DB url');
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
