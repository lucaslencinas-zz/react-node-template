module.exports = {
  env: process.env.NODE_ENV || 'development',
  uri: {
    hostname: process.env.HOSTNAME || '0.0.0.0',
    port: process.env.PORT || 3000
  }
};
