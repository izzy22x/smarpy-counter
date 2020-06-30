const express = require('express');

module.exports = (app) => {
    const counter = require('../controllers/counterController');

    app.route('/counter/increase')
        .post(counter.increaseValue);
}