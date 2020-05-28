var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        trim: true,   
    },
    password: {
        type: String
    },
    name: {
        type: String
    }
});

var User = mongoose.model("User", userSchema);

module.exports = User;