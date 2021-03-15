const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/context/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  plugins: [],
}
