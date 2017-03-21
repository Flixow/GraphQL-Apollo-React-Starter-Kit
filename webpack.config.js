const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?http://localhost:4000',
    'react-hot-loader/patch',
    './client/index.js'
  ],
  output: {
    path: '/',
    filename: 'bundle.[name].js',
    pathinfo: true
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js(|x)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [['es2015', { modules: false }], 'react', 'stage-0']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ],
  stats: 'errors-only'
};
