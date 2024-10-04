const router = require('express').Router();
const {signup, login,getUser, forgot} = require('../controllers/userController');
const {checkUser}  = require('../middlewares/auth')

router.post('/signup', signup);
router.post('/login', login);
router.get('/getUser', checkUser, getUser)
router.post('/forgot', forgot)

module.exports = router;