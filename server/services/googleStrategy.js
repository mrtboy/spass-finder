var GoogleStrategy = require('passport-google-oauth20').Strategy;
import passport from 'passport';
import mongoose from 'mongoose';
import * as keys from '../libs/keys';

module.exports = (app) => {
  
  const User = mongoose.model('User');

  passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  async (request, accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
      return done(null, existingUser);
    }
    
    const user = await new User({ googleId: profile.id }).save();
    done(null, user); 
  }
  ));
  
  app.get('/auth/google',
    passport.authenticate('google',
      { 
        scope: ['profile', 'email'] 
      })
  );

  app.get('/auth/google/callback', 
    passport.authenticate('google', 
      { 
        failureRedirect: '/login' 
      }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.json({'Status': req.user});
    });
};