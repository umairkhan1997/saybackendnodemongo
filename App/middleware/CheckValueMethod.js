const checkValueMethod = (val) => {
  return val === undefined ||
    val == null ||
    val.length <= 0 ||
    val === "undefine"
    ? true
    : false;
};

module.exports = checkValueMethod;
