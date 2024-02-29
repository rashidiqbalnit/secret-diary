var jwt = require('jsonwebtoken');
const JWT_SECRET = "Harryisagoodb$oy";

const fetchuser = (req, res, next)=>{
   //get the user from the jwt token and add id req object
   const token = req.header('auth-token');
   if (!token){
      res.status(401).send({error: "Plese authenticate using a valid token"});
   }
   try {
      const data = jwt.verify(token, JWT_SECRET);
      req.user = data.user;
      next();
   } catch{
      res.status(401).send({error: "Plese authenticate using a valid token"});
   }
   
}
 
module.exports = fetchuser;