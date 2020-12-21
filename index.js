var cors = require("cors");
const express = require("express");
const bd = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
// const homeRoute = require('./routes/HomeRouter/HomeRoute');
const mainRouter = require("./routes/mainRouter");
const { mogoUrl } = require("./key");

app.use(cors());
app.use(bd.urlencoded({
  extended: false
}))
app.use(bd.json());
app.use(mainRouter);

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
  res.send("Express Docker Heroku Container Registry")
})
app.listen(port, () => {
  console.log("server running");
});
