const path = require('path');
const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: "./app/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['react', 'env']
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  devtool: "source-map"
};