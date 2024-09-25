const Express = require("express");
const dbConnection = require("./dbConnection");
const app = Express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(Express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json({"message": "Hello friend."});
});
app.use("/api/v1", require("./router/routes"));

app.listen(PORT, () => {
  dbConnection();
  console.log(My app is listening on port ${PORT});
});
