/* const webpack = require("webpack");
const path = require("path");

let config = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./public/bundle.js"
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }]
    }
  }
  
  module.exports = config; */

const path = require("path");
module.exports = {
  entry: {
    index: [path.resolve(__dirname, "src/pages", "index.js")],
    photographer: [path.resolve(__dirname, "src/pages", "photographer.js")],
  },
  mode: "development",
  target: "web",
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader","sass-loader"],
      },
    ],
  },
};
