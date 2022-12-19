const notFound = (req, res) =>
  res
    .status(404)
    .send("Route does not exist, please try with valid route path");


module.exports = notFound;