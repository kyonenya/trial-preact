const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // 絶対パス
    publicPath: '/dist/'  // 相対パス
  },
  module: {
    rules: [
      {
        // .tsxまたは.tsに対して、
        test: /\.tsx?$/,
        // ts-loaderを使う。
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    // モジュール名に拡張子がない場合、左から順に探して解決する
    extensions: ['.ts', '.tsx', '.js']
  },
}