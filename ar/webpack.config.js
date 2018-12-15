const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './app.js',
  mode: 'production',
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

// const devServer = new WebpackDevServer(compiler, {
//   ...serverConfig,
//   https: true
// });