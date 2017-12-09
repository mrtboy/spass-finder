import passport from 'passport';
import mongoose from 'mongoose';

module.exports = (app) => {
  const User = mongoose.model('User');

  //Passport Middleware
  app.use(passport.initialize());
  app.use(passport.session());


  passport.serializeUser(function(user, done){
    done(null, user);
  });

  passport.deserializeUser((id, done) => {
    User.findById().then((user) => {
      done(null, user);
    });
  });
};