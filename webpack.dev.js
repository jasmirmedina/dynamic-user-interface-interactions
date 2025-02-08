const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",

  devServer: {
    watchFiles: ["./src/index.html"],
    client: { overlay: true },
    open: true,
    port: 8080,
    compress: true,
  },

  module: {
    rules: [{ test: /\.css$/i, use: ["style-loader", "css-loader"] }],
  },
});
