const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    // compress: true,
    index: 'index.html',
    // hot: true,
    watchContentBase: true,
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|jpeg)$/,
        use: "file-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", '!assets/**'],
    }),
    new HtmlWebpackPlugin({
      title: "Academy Bootstrap Khoi Nguyen",
      filename: "index.html",
      template: "./src/index.hbs",
      description: "Ekino Academy - Homework for Bootstrap course of Khoi Nguyen",
      inject: 'body'
    }),
  ],
};
