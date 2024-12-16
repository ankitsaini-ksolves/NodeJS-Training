module.exports = (err, req, res, next) => {
  console.log("Inside Error Handler")
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
};
