const Express = require("express");
const dbConnection = require("./dbConnection");
const app = Express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
app.use(Express.json());
// app.use(cors())
app.use(cors(
  {
    origin: ["https://logi-tracker-ihzh.vercel.app"],
    methods:["POST","GET"],
    credentials: true
  }
));
app.get("/", (req, res) => {
  res.send("<h1>Wellcome to Logitrack Api</h1>");
});
app.use("/api/v1", require("./router/routes"));

app.listen(PORT, () => {
  dbConnection();
  console.log(`My app is listening on port ${PORT}`);
});
