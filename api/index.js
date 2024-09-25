const Express = require("express");
const dbConnection = require("./dbConnection");
const app = Express();
const cors = require("cors");
require("dotenv").config();

// Vercel doesn't use a fixed port like traditional apps.
// You don't need to define PORT or listen on it.
app.use(Express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({"message": "Hello friend."});
});

// Use the routes from your router
app.use("/api/v1", require("./router/routes"));

// This export is necessary for Vercel
module.exports = app;

// Optionally, if you want to include the database connection
// You can use a function to establish a connection when the app is initialized.
dbConnection(); // Call your DB connection function
