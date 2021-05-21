module.exports = (req, res, next) => {
  console.log("Home Middle ware");
  next();
};
