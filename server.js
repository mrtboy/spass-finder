import express from 'express';
import consign from 'consign';

const app = express();

consign()
  .include('libs/config.js')
  .then('libs/middlewares.js')
  .then('models')
  .then('libs/boot.js')
  .then('controllers')
  .then('services/passport.js')
  .then('services/googleStrategy.js')
  .into(app);

app.use(express.static('public'));