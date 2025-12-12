const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI || "mongodb+srv://prabha8859_db_user:RZAruX3KMmKVaQ5d@cluster0.ox4iumc.mongodb.net/";
  try {
    await mongoose.connect(uri);

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message || error);
    console.error(
      "If you're using MongoDB Atlas, set the MONGO_URI env var with credentials."
    );
    // Do not exit process here so server can still start and return useful errors to clients.
  }
};

module.exports = connectDB;
