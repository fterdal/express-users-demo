module.exports = {
  entry: "./client/index.js",
  mode: "development",
  devtool: "source-map",
  output: {
    path: __dirname,
    filename: "public/bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}
