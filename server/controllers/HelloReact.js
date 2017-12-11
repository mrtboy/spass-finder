import { data } from '../../cleint/testData';
module.exports = (app) => {

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/data', (req, res) => {
    res.send(data);
  });

};