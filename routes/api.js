var express = require('express');
var router = express.Router();


var UserController = require('../controllers/UserController');
var HobbyController = require('../controllers/HobbiesController');

// Routes
router.post('/signup',  UserController.signUp);
router.post('/signin', UserController.signIn);

router.get('/hobbies', HobbyController.findAll);
router.post('/hobbies', HobbyController.create);
router.put('/hobbies/:hobbyId', HobbyController.update);
router.delete('/hobbies/:hobbyId', HobbyController.delete);

module.exports = router;