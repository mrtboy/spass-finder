import bodyParser from 'body-parser';
import * as keys from '../libs/keys';

import session from 'express-session';
import { express } from 'express';

module.exports = (app) => {
  app.set('port', 3000);
  app.set('json spaces', 4);
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  
  app.set('view engine', 'ejs');

  app.use(session({secret: keys.sessionKey,resave: true, saveUninitialized: true }));
  app.use((req, res, next) => {
    delete req.body.id;
    next();
  });
};