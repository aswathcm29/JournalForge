const router = require('express').Router();
const {signup, login, getUser} = require('../controllers/userController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/getUser', getUser);

module.exports = router;