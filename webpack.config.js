import path, { dirname } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default {
  mode: "development",
  entry: {
    bundle: path.resolve(dirname(""), "src/index.js"),
  },
  output: {
    path: path.resolve(dirname(""), "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(dirname(""), "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html",
    }),
    new BundleAnalyzerPlugin(),
  ],
};

// {
//   test: /\.js$/,
//   exclude: /node_modules/,
//   use: {
//     loader: 'babel-loader',
//     options: {
//       presets: ['@babel/preset-env'],
//     },
//   },
// },
