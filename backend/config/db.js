const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    const DB = await connect(process.env.MONGO_URI);
    console.log(
      `Successful connection to DB ${DB.connection.host} ${DB.connection.port} ${DB.connection.name}`
    );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
