const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const Counter = mongoose.model('Counter');

exports.increaseValue = async (request, response) => {
    if (!request.params.amount || isNaN(request.params.amount)) {
        response.status(400).json({success: false, error: 'An invalid amount was provided.'});
        return;
    }

    try {
        const counter = await Counter.findOne({type: 'counter'});
        if (!counter) {
            response.status(500).json({success: false, error: 'A database error has occurred.'});
            return;
        }
        counter.count += parseInt(request.params.amount);
        counter.save();
        response.status(200).json({success: true, count: counter.count});
    }
    catch (ex) {
        console.error(ex);
        response.status(500).json({success: false, error: 'A database error has occurred.'});
        return;
    }
}

exports.decreaseValue = async (request, response) => {
    if (!request.params.amount || isNaN(request.params.amount)) {
        response.status(400).json({success: false, error: 'An invalid amount was provided.'});
        return;
    }

    try {
        const counter = await Counter.findOne({type: 'counter'});
        if (!counter) {
            response.status(500).json({success: false, error: 'A database error has occurred.'});
            return;
        }
        counter.count -= parseInt(request.params.amount);
        counter.save();
        response.status(200).json({success: true, count: counter.count});
    }
    catch (ex) {
        console.error(ex);
        response.status(500).json({success: false, error: 'A database error has occurred.'});
        return;
    }
}

exports.getValue = async (request, response) => {
    try {
        const counter = await Counter.findOne({type: 'counter'});
        if (!counter) {
            response.status(500).json({success: false, error: 'A database error has occurred.'});
            return;
        }
        response.status(200).json({success: true, count: counter.count});
    }
    catch (ex) {
        console.error(ex);
        response.status(500).json({success: false, error: 'A database error has occurred.'});
        return;
    }
}

exports.setValue = async (request, response) => {
    if (!request.params.amount || isNaN(request.params.amount)) {
        response.status(400).json({success: false, error: 'An invalid amount was provided.'});
        return;
    }

    try {
        const counter = await Counter.findOne({type: 'counter'});
        if (!counter) {
            response.status(500).json({success: false, error: 'A database error has occurred.'});
            return;
        }
        counter.count = parseInt(request.params.amount);
        counter.save();
        response.status(200).json({success: true, count: counter.count});
    }
    catch (ex) {
        console.error(ex);
        response.status(500).json({success: false, error: 'A database error has occurred.'});
        return;
    }
}