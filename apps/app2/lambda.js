const serverless = require('serverless-http');
const next = require('next');
const express = require('express');

const app = next({ dev: false });
const server = express();

const appName = `/${process.env.APP_NAME}`;
const replaceAppName = url => url === appName ? '/' : url.replace(appName, '');

exports.handler = (event, context, callback) => {
  const handle = app.getRequestHandler();

  server.use((req, res, next) => {
    req.url = replaceAppName(req.url);
    next();
  });

  server.get('*', (req, res) => handle(req, res));

  app.prepare().then(() => serverless(server)(event, context, callback));
};
