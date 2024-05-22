const { addJournal, getJournals, getUserJournal, getJournalbyId } = require('../controllers/journalController');
const upload = require('../middlewares/multer');
const router = require('express').Router();
const {checkUser}  = require('../middlewares/auth')

router.post('/add',checkUser,addJournal);
router.get('/getJournals',checkUser,getJournals);
router.get('/getUserJournal',checkUser,getUserJournal);
router.post('/getJournalbyId',checkUser,getJournalbyId);

module.exports = router;