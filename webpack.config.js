const webpack = require("webpack")
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TSLintPlugin = require("tslint-webpack-plugin");
const Dotenv = require("dotenv-webpack");
require("dotenv").config();

const outputDirectory = "dist";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js"
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "inline-source-map",
  // devtool: 'cheap-module-eval-source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devServer: {
    stats: 'errors-only',
    port: process.env.PORT,
    overlay: true,
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: { /* Loader options go here */ }
          }
        ]
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    }),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new TSLintPlugin({
      files: ['./src/**/*.tsx?']
    }),
    new Dotenv(),
  ]
};
