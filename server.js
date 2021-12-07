const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
// const { userInfo } = require("os")

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

app.set("layout", "layouts/layout");

app.use(expressLayouts);
app.use("/items", indexRouter);

// app.get("/", (req, res) => {
//   res.send("hello buddcdcy");
// });

app.listen(3000, () => {
  console.log("App listening at 3000");
});
