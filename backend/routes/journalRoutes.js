const { addJournal, getJournals } = require('../controllers/journalController');
const upload = require('../middlewares/multer');

const router = require('express').Router();

router.post('/add', upload.single('image'), addJournal);
router.get('/getJournals', getJournals);

module.exports = router;