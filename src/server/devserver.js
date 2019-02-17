import config from "../config/index.js";
import bodyParser from 'body-parser';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from "../client/components/App.jsx";
import express from 'express';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
         
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

app.get('/', (req,res) =>{

  const filePath = path.resolve(__dirname, './index.html');
const staticContext = {};
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Opps, something went wrong: ', err);
            return res.status(404).end()
        }

         // render the app as a string
        const appComponent = renderToString(
      <StaticRouter context = {staticContext}>

            <App></App>
            </StaticRouter> 
        );
  const htmlPage = htmlData.replace('<div id="app"></div>', `<div id="app">${appComponent}</div>`);
  // const reactBody = renderToString(<App/>);
  console.log(htmlPage);

  res.send(htmlPage);
});
});

server.setTimeout(10 * 60 * 1000); // 10 min
let port = config.port || 8083;
let url = "http://localhost"
server.listen(port);
server.on('error', error => console.log(error));
server.on('listening', () => console.log(`Listening at ${url}:${port}`));

process.on('uncaughtException', (error) => {
  console.log(error);
});