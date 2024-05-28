const { addJournal, getJournals, getUserJournal, getJournalbyId, updateJournal, deleteJournal } = require('../controllers/journalController');
const upload = require('../middlewares/multer');
const router = require('express').Router();
const {checkUser}  = require('../middlewares/auth')

router.post('/add',checkUser,addJournal);
router.get('/getJournals',checkUser,getJournals);
router.get('/getUserJournal',checkUser,getUserJournal);
router.post('/getJournalbyId',checkUser,getJournalbyId);
router.patch('/updateJournal',checkUser,updateJournal)
router.post('/deleteJournal',checkUser,deleteJournal)
    
module.exports = router;