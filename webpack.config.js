const webpack = require('webpack')
const Clean = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    'app.js': './src/app.js',
  },

  output: {
    filename: 'index.bundle.js',
    path: `${__dirname}/dist`,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // loader: 'buble-loader',
      }
    ]
  },

  plugins: [
    new Clean(['dist']),
    new UglifyJSPlugin({
      uglifyOptions: {
        output: {
          beautify: true,
        },
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
}
