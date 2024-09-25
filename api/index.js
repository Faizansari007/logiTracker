// const Express = require("express");
// const dbConnection = require("./dbConnection");
// const app = Express();
// const cors = require("cors");
// require("dotenv").config();
// const PORT = process.env.PORT || 8000;
// app.use(Express.json());
// // app.use(cors())
// app.use(cors(
//   {
//     origin: ['https://logi-tracker-ihzh.vercel.app'],
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Allow credentials if needed
//   }
// ));

// app.options('*', cors()); // Allow preflight requests for all routes


// app.get("/", (req, res) => {
//   res.send("<h1>Wellcome to Logitrack Api</h1>");
// });
// app.use("/api/v1", require("./router/routes"));

// app.listen(PORT, () => {
//   dbConnection();
//   console.log(`My app is listening on port ${PORT}`);
// });

const Express = require("express");
const dbConnection = require("./dbConnection");
const cors = require("cors");
require("dotenv").config();

const app = Express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(Express.json());

// Configure CORS
app.use(cors({
  origin: ['https://logi-tracker-ihzh.vercel.app'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow credentials if needed
}));

// Handle preflight requests
app.options('*', cors());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Logitrack API</h1>");
});

// Use your routes
app.use("/api/v1", require("./router/routes"));

// Start the server
app.listen(PORT, () => {
  dbConnection();
  console.log(`My app is listening on port ${PORT}`);
});
