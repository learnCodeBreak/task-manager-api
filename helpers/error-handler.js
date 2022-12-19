const { CustomError } = require("./custom-error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError)
    return res.status(err.statusCode).json({ message: err.message });
  return res.status(500).json({ message: err });

  // we can use this also for minimul error message
  // return res.status(500).json({ message: `Something went wrong, please try again!` });
};

module.exports = errorHandler;
