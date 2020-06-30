import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CounterSchema = new Schema({
    value: {
        type: Number
    }
});

module.exports = mongoose.model('Counter', CounterSchema);