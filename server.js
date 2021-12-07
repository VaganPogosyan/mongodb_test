const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
// const { userInfo } = require("os")

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

app.set("layout", "layouts/layout");

app.use(expressLayouts);

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => console.log("not connected"));
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("open", () => console.log("connected to mongoose"));

app.use("/items", indexRouter);

// app.get("/", (req, res) => {
//   res.send("hello buddcdcy");
// });

app.listen(3000, () => {
  console.log("App listening at 3000");
});
