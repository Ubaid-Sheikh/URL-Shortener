const express = require('express');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const urlSchema = new Schema({
    shortId:{
        type: String,
        required: true,
    }, 
    url:{
        type: String,
        required: true,
    }
})

const urlModel = mongoose.model('url', urlSchema);

module.exports = urlModel;