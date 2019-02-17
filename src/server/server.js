import config from "../config/index.js";
import bodyParser from 'body-parser';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import App from "../components/App.jsx";
// import './css/App.css';
import express from 'express';

console.log('Entry Point');
// These three must be require()'d to be instrumented:
const app = require('express')();
const http = require('http');
const path = require('path');
const fs = require("fs");

// trust first proxy https://www.npmjs.com/package/express-session
app.set('trust proxy', 1);

const server = http.createServer(app);

console.log('Starting the server');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

app.post('/subscribeemailapi', (req, res) => {
  console.log(req.body.emailAddress);
  res.status(202).send();
});

app.use('/', express.static(path.join(__dirname, './')));


server.setTimeout(10 * 60 * 1000); // 10 min
let port = config.port || 8081;
let url = "http://localhost"
server.listen(port);
server.on('error', error => console.log(error));
server.on('listening', () => console.log(`Listening at ${url}:${port}`));

process.on('uncaughtException', (error) => {
  console.log(error);
});