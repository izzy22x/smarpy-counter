const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CounterSchema = new Schema({
    type: {
        type: String
    },
    count: {
        type: Number
    }
});

module.exports = mongoose.model('Counter', CounterSchema, 'counter');