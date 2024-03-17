const { addJournal, getJournals, getUserJournal, getJournalbyId } = require('../controllers/journalController');
const upload = require('../middlewares/multer');

const router = require('express').Router();

router.post('/add', addJournal);
router.get('/getJournals', getJournals);
router.get('/getUserJournal', getUserJournal);
router.post('/getJournalbyId', getJournalbyId);

module.exports = router;