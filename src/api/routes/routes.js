import express from 'express';

module.exports = (app) => {
    const counter = require('../controllers/counter');

    app.route('/counter/increase')
        .post(counter.increaseValue);
}