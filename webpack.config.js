// eslint-disable-next-line no-undef
const HtmlWebPackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line no-undef
const config = require("./config");

// eslint-disable-next-line no-undef
const path = require("path");

// eslint-disable-next-line no-undef
module.exports = {
  entry: "./src/index.jsx",
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, config.build.dist),
    filename: "bundle.js",
    // eslint-disable-next-line no-undef
    publicPath: config.build.dist,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    historyApiFallback: true,
    // eslint-disable-next-line no-undef
    contentBase: path.join(__dirname, config.build.dist), // Add this line
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      inject: false,
    }),
  ],
};
