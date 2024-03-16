const { addJournal } = require('../controllers/journalController');

const router = require('express').Router();

router.post('/add', addJournal);

module.exports = router;