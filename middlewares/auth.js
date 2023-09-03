const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.auth = async(req,res,next) => {
    const token = req.header("x-api-key");
    // בודק שנשלח טוקן בהידר
    if(!token){
      return res.status(401).json({err:"You need send token to this endpoint/url 1111"})
    }
    try{
      // מנסה לפענח את הטוקן אם הוא לא בתוקף
      // או שיש טעות אחרת נעבור לקץ'
      const decodeToken = jwt.verify(token,process.env.TOKEN_SECRET);
      req.tokenData = decodeToken;
      // לעבור בפונקציה הבאה בתור בשרשור של הרואטר
      next()
    }
    catch(err){
      console.log(err);
      res.status(502).json({err:"Token invalid or expired 2222"})
    }
  }