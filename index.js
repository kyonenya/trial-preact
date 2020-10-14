const express = require('express');
const app = express();
const path = require('path');

// webpack開発用サーバーを設定する
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.dev.config.js');
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  watchOptions: {
    // 初回コンパイル後はファイルの変更を監視しない
    ignored: '**'
  },
});
app.use(middleware);

// index.htmlをルーティングする
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
// ルートディレクトリを指定する
const rootDir = __dirname;
app.use(express.static(rootDir));

// ローカルサーバーを起動する
const port = process.env['WEB_APP_PORT'];
app.listen(port, () => {
  console.log(`Launching app... http://localhost:${port}\n`);
});

// Register app and middleware. Required for better
// performance when running from play.js
try { pjs.register(app, webpackMiddleware); } catch (error) { }