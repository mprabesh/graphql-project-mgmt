const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DB_URL);
  console.log(
    `DB connection successful ${conn.connection.host}`.green.underline.bold
  );
};
module.exports = connectDB;
