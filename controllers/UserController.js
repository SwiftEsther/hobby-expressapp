var config = require('../config/database');
var User = require("../models/User");


exports.signUp = function(req,res, next) {
    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.phoneNumber
    ) {
        var user = new User({
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
          phoneNumber: req.body.phoneNumber,
        });
        console.log(user);
        //use schema.create to insert data into the db
        user.save(function(err) {
            if (err) {
                return res.json({success: false, msg: 'User already exists.'});
            }
            res.json({success: true, msg: 'Successful, new user created'});
        });
    } else {
        res.json({success: false, msg: 'Please fill in the required fields.'})
    }
};

exports.signIn = function(req, res) {
    console.log(req.body.username, req.body.password);
    User.findOne({
      username: req.body.username
    }, function(err, user) {
      if (err) throw err;
  
      if (!user) {
        res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            res.json({success: true, msg: 'User exists'});
          } else {
            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
    });
};
