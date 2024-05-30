const jwt = require('jsonwebtoken')
const { userModel } = require('../models/userSchema');

const checkUser = async(req, res, next) =>{
    console.log('from_header')
    try{
       const from_header = req.headers.authorization;
     
        if(!from_header){
            return res.status(401).json({error:true, message:"invalid user"});
        }
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,"mysecretkey" ,async(err,user)=>{
            if(err){
                return res.status(401).json({error:true, message:err.message});
            }
            console.log("wait",user)
           const doc = await userModel.findOne({userName:user.userName});
           if(!doc){
            res.status(400).json({error:true,message:'Invlaid user'});
           }
           req.user = {userName : doc.userName}
           next();
       })
    }
    catch(err){
        console.log(err.message)
        return res.status(400).json({error:true, message:err.message});
    }
}

module.exports = {checkUser}