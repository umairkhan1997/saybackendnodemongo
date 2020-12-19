const checkField = (data) => {
  return {
    success: false,
    message: `${[data]} not found`,
  };
};

module.exports = checkField;
