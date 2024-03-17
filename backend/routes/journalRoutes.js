const { addJournal, getJournals, getUserJournal } = require('../controllers/journalController');
const upload = require('../middlewares/multer');

const router = require('express').Router();

router.post('/add', addJournal);
router.get('/getJournals', getJournals);
router.get('/getUserJournal', getUserJournal);

module.exports = router;