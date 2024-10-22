const mongoose = require("mongoose");

const connectDB = async ()=>{
try{
    await mongoose.connect(
        "mongodb+srv://yuan:<db_password>@yuan.axkjb.mongodb.net/?retryWrites=true&w=majority&appName=yuan"
    );
    console.log("MongoDB connected...");
}catch (error){
    console.error("MongoDB connection error:",error);

    process.exit(1);

};
};
module.exports = connectDB;