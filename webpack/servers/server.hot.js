const config = require('config');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../configs/config.hot');
const api = require('./api').api();

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/api/v1', api);

console.log(config);
app.listen(config.uri.port, config.hostname, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', config.uri.port, config.uri.port);
  }
});
