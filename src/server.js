import config from "./config/index.js";
import bodyParser from 'body-parser';
import React from 'react';

import { renderToString } from 'react-dom/server';
import App from "./components/App.jsx";
import html from "./functions/html";
// These three must be require()'d to be instrumented:
const app = require('express')();
const http = require('http');
const path = require('path');

//app.use(bodyParser.json({ type: 'application/json' }));
// trust first proxy https://www.npmjs.com/package/express-session
app.set('trust proxy', 1);

const server = http.createServer(app);


app.get('/', (req,res) =>{
  console.log(__dirname);
  const reactBody = renderToString(<App/>);
  console.log(reactBody);
  res.send(html({ body:reactBody,title:"Family 1 Optical"}));
});

server.setTimeout(10 * 60 * 1000); // 10 min
server.listen(config.port);
server.on('error', error => console.log(error));
server.on('listening', () => console.log(`Listening at ${config.url}:${config.port}`));

process.on('uncaughtException', (error) => {
  console.log(error);
});