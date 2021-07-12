import * as path from "path";
import * as webpack from "webpack";
const rootPath = path.resolve(__dirname, "..");
const config: webpack.Configuration = {
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  devtool: "source-map",
  entry: path.resolve(rootPath, "electron", "main.ts"),
  target: "electron-main",
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  node: {
    __dirname: false,
  },
  output: {
    path: path.resolve(rootPath, "dist"),
    filename: "[name].js",
  },
};
export default config;
