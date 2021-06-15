var cors = require("cors");
const express = require("express");
const bd = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;
// const homeRoute = require('./routes/HomeRouter/HomeRoute');
const mainRouter = require("./App/routes/mainRouter");
const { mogoUrl } = require("./key");

// var allowCrossDomain = function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// }
// app.use(allowCrossDomain);
app.use(cors({ origin: true, credentials: true }));
app.use(bd.urlencoded({
  extended: false
}))
app.use(bd.json());
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header('Access-Control-Allow-Methods', '*');
//   res.header('Access-Control-Allow-Headers', '*');
//   next();
// });
app.use(mainRouter);
//some other code


mongoose.connect(mogoUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});

mongoose.connection.on("error", (err) => {
  console.log(err, "mongo error");
});

// app.get('/',(req,res)=>{
// res.send('welcome to server');
// })
app.get('/', (req, res) => {
  res.send("Express Docker Heroku Container Registry");
})
app.listen(port, () => {
  console.log("server running");
});
