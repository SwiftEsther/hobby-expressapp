<<<<<<< HEAD
const mongoose = require('mongoose');
require('./User');

Schema = mongoose.Schema;

const HobbySchema = new Schema({
    name:{
        type: String,
        required: true,
        max: 100,
        unique: true
    }
});

=======
const mongoose = require('mongoose');
require('./User');

Schema = mongoose.Schema;

const HobbySchema = new Schema({
    name:{
        type: String,
        required: true,
        max: 100,
        unique: true
    }
});

>>>>>>> 3fbf953b6d0dab1f823b135154511a936c13a228
module.exports = mongoose.model('Hobby', HobbySchema);