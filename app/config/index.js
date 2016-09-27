if (process.env.NODE_ENV === 'production') {
  // Use producton environment variables
  module.exports = {
    host: process.env.host || '',
    dbURI: process.env.dbURI,
    sessionSecret: process.env.sessionSecret,
    fb: {
      clientID: process.env.fbClientID,
      clientSecret: process.env.fbClientSecret,
      callbackURL: process.env.host + '/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos']
    }
  }
} else {
  // Use dev settings
  module.exports = require('./development.json')
}
