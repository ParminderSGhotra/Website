// webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const serverConfig = {
  entry: { main: './src/server.js' },
  target: 'node',  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["style-loader", "css-loader!sass-loader"],
        })           
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/html/index.html'}),
    new ExtractTextPlugin('style.css')
  ]
};


module.exports = [serverConfig]