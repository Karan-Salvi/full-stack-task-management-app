module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch((error) => {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to register",
    });
  });
};
