const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './app.js',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './*.html'
    }])
  ]
};