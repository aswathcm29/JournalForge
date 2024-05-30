const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const secret = process.env.SECRET_KEY;

const generateToken = async(userName, userType) =>{
    try{
        const payload = {userName: userName, userType: userType};
        const accessToken = jwt.sign(payload,secret,{expiresIn: "7D"});
        return accessToken;
    }
    catch(err){
        console.log(err.message);
        return "";
    }
}

module.exports = {generateToken}
