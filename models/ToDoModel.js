const mongoose = require('mongoose');

// Database Structure
const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('ToDo', todoSchema);