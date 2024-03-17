const jwt = require('jsonwebtoken');
const {journalModel} = require('../models/journalSchema');
const {journalValidationSchema} = require('../validation/validation');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const addJournal = async (req, res) => {
    try{
        console.log('hello')
        const title = req.body.title;
        const description = req.body.description;
        const journalContent = req.body.journalContent;
        const image = req.body.image;
        const author = req.body.author;
        console.log(req.headers.authorization);
        console.log(req.headers.authorization.split(" "))
        const decoded = jwt.decode(req.headers.authorization.split(" ")[1].split("=")[1]);
        console.log(decoded)
        // req.body.userName = 
        // console.log(decoded.userName)
        const userName = decoded.userName;
        console.log(userName)

        // const {error, value} = journalValidationSchema.validate(req.body);
        // if(error){
        //     return res.status(400).json({error:true, message:error.details[0].message});
        // }

        try{
            const doc = await journalModel.create({title: title, description: description, journalContent: journalContent, image: image, author: author, userName: userName});
            return res.status(200).json({error:false, message:"Journal Added"});
        }
        catch(err){
            return res.status(500).json({error:true, message:err.message});
        }
    }
    catch(e){
        return res.status(404).json({error:true, message:e.message});
    }
}

const getJournals = async (req, res) => {
    try{
        const journals = await journalModel.find({});
        return res.status(200).json({error:false, journals});
    }
    catch(e){
        return res.status(500).json({error:true, message:e.message});
    }
}

module.exports = { addJournal, getJournals }