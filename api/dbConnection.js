const mongoose = require("mongoose");

const uri =
  "mongodb+srv://faiz09:faiz0905@cluster0.xwxiv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose;

function dbConnection() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
