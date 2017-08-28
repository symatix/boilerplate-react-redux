var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './app',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
  // Everything flows from this file
  entry: [
    "./app/index.js"
  ],
  // Once Webpack is done, it assembles the file and deposits it
  // in the current directory in the build subdirectory, with a name of build.js
  output: {
    path: __dirname + "./build",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        // Watch all files that end in .js
        test: /\.jsx?$/,
        // Unless it's in the node_modules directory
        exclude: /node_modules/,
        // And run it through the babel loader
        loader: 'babel-loader',
        query:{
          presets:["react","es2015","react-hmre"]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
    template: './index.html'
  })]
}
