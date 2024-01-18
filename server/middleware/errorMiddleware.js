const errorHandling = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    status: statusCode,
    message: err.message,
    stack: err.stack,
  });
  next();
};

module.exports = { errorHandling };
