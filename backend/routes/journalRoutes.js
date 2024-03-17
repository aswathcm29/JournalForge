const { addJournal, getJournals } = require('../controllers/journalController');

const router = require('express').Router();

router.post('/add', addJournal);
router.get('/getJournals', getJournals);

module.exports = router;