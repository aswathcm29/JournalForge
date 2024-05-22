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
        // console.log("token",token)
        // console.log("asfdsafdasfdasfdasfdasfsd",process.env.SECRET) 
        jwt.verify(token,"mysecretkey" ,async(err,user)=>{
            if(err){
                return res.status(401).json({error:true, message:err.message});
            }
            console.log("wait",user)
           const doc = await userModel.findOne({username:user.username});
           if(!doc){
            res.status(400).json({error:true,message:'Invlaid user'});
           }
           req.user = {username : doc.userName}
           next();
       })
    }
    catch(err){
        console.log(err.message)
        return res.status(400).json({error:true, message:err.message});
    }
}

module.exports = {checkUser}