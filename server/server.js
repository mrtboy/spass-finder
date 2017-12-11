import express from 'express';
import consign from 'consign';

const app = express();

consign()
  .include('server/libs/config.js')
  .then('server/libs/middlewares.js')
  .then('server/models')
  .then('server/libs/boot.js')
  .then('server/controllers')
  .then('server/services/passport.js')
  .then('server/services/googleStrategy.js')
  .into(app);

app.use(express.static('public'));