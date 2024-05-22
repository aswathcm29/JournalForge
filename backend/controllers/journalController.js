const {journalModel} = require('../models/journalSchema');

const getJournalbyId = async (req, res) => {
    try{
        const id = req.body.id;
        console.log(id)
        const journal = await journalModel.findOne({_id:id});
        return res.status(200).json({error:false, message:journal});
    }
    catch(err){
        res.status(500).json({error:true, message:err.message});
    }
}

const getUserJournal = async (req, res) => {
    try{
        
        const journals = await journalModel.find({userName: req.user.username});
        return res.status(200).json({error:false, message:journals});
    }
    catch(err){
        res.status(500).json({error:true, message:err.message});
    }
}

const addJournal = async (req, res) => {
    try{
        const title = req.body.title;
        const description = req.body.description;
        const journalContent = req.body.journalContent;
        const image = req.body.image;
        const author = req.body.author;
        console.log(req.body)
        try{
            const doc = await journalModel.create({title: title, description: description, journalContent: journalContent, image: image, author: author, userName: req.user.username});
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

module.exports = { addJournal, getJournals, getUserJournal, getJournalbyId }