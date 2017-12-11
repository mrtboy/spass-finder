module.exports = (app) => {
  app.listen(app.get('port'), () => console.log(`server started on ${app.get('port')}`));
};