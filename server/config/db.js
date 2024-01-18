const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DBString);
    console.log('connected to ', conn.connection.host);
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

module.exports = { connectDB };
