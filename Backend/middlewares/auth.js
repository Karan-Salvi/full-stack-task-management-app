const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({});


async function checkAuthenticated(req,res,next){ 

  const tokenValue = req.cookies[process.env.TOKEN_NAME];

  if (!tokenValue) {
    return res.status(400).json({
      success: false,
      message: "Bad request!!",
    });
  }
  try {
    const payload = await jwt.verify(
      tokenValue,
      process.env.REFRESH_TOKEN_SECRET
    );

    if (!payload) {
      return res.status(400).json({
        success: false,
        message: "Bad request!!",
      });
    }

    req.user = payload;

    return next();
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Something went wrong..",
    });
  }

}
  