const express = require('express');

module.exports = (app) => {
    const counter = require('../controllers/counterController');

    app.route('/api/counter/increase/:amount')
        .get(counter.increaseValue);

    app.route('/api/counter/decrease/:amount')
        .get(counter.decreaseValue);

    app.route('/api/counter/get')
        .get(counter.getValue);

    app.route('/api/counter/set/:amount')
        .get(counter.setValue);
}