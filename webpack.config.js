const path = require("path");

module.exports = {
  mode: "development",
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "webpack_build.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ,
      
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
