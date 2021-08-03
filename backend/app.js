const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
// Middleware
app.use(bodyParser.json());
// print terminal action
app.use(morgan("tiny"));
require("dotenv/config");
const authJwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");
// Cross-Origin Resource Sharing connect differece domain bettween backend and forntend
const cors = require("cors");
app.use(cors());
app.options("*", cors());
app.use(authJwt());
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.use(errorHandler);
// Router
const productRouter = require("./routers/products");
const userRouter = require("./routers/users");
const orderRouter = require("./routers/orders");
const categoriesRouter = require("./routers/categories");

const api = process.env.API_URL;

app.use(`${api}/products`, productRouter);
app.use(`${api}/users`, userRouter);
app.use(`${api}/orders`, orderRouter);
app.use(`${api}/categories`, categoriesRouter);

mongoose.set("useFindAndModify", false);
//Connect database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "eshop-database",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(3000, () => {
  console.log(api);
  console.log("Server is running http://localhost:3000");
});
