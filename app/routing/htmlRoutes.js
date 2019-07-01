var express = require('express');
var path = require('path');
var APP = express();

module.exports = function(app){

    app.get('/survey', (req, res)=>{
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
    app.use((req, res)=>{
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

   



};