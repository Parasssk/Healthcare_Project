//first we are initializing jsonwebtoken module to use functionalities of jwt e.g: sign and verify

var jwt=require('jsonwebtoken')


//after succssful register of user, then calling login endpoint with the already tregistered user, it will create and return jwt token.

const generateJwtToken=(userData)=>{
    return jwt.sign(userData,process.env.PRIVATE_KEY,{expiresIn:40000})
}

//after login, we are getting the token, and for validating jwt token, that it is correct or not, we will proceed with secure routes, to get/post/update/delete
const validateJwtToken=(res,req,next)=>{
    const authCheck=req.headers.authorization
}