const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hobbie: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Users', UserSchema);