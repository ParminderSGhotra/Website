import config from "./config/index.js";
import bodyParser from 'body-parser';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import App from "./components/App.jsx";
import html from "./functions/html";

console.log('Entry Point');
// These three must be require()'d to be instrumented:
const app = require('express')();
const http = require('http');
const path = require('path');
const fs = require("fs");

//app.use(bodyParser.json({ type: 'application/json' }));
// trust first proxy https://www.npmjs.com/package/express-session
app.set('trust proxy', 1);

const server = http.createServer(app);

console.log('Starting the server');

app.get('/', (req,res) =>{

  const filePath = path.resolve(__dirname, './html/index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

         // render the app as a string
        const appComponent = renderToString(
            <App></App>
        );
  const htmlPage = htmlData.replace('<div id="root"></div>', `<div id="root">${appComponent}</div>`);
  // const reactBody = renderToString(<App/>);
  console.log(htmlPage);

  res.send(htmlPage);
});
});

server.setTimeout(10 * 60 * 1000); // 10 min
let port = config.port || 8081;
let url = "http://localhost"
server.listen(port);
server.on('error', error => console.log(error));
server.on('listening', () => console.log(`Listening at ${url}:${port}`));

process.on('uncaughtException', (error) => {
  console.log(error);
});