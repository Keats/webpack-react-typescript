const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  context: __dirname,
  mode: isProd ? "production" : "development",
  entry: {
    app: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  devtool: isProd ? "source-map" : "eval-source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        options: {
          // We use ForkTsCheckerWebpackPlugin for typechecking
          transpileOnly: true
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    hot: true,
    historyApiFallback: true,
    overlay: true,
    stats: "minimal"
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new ForkTsCheckerWebpackPlugin({
      // For the dev server overlay to work
      async: false
    }),
    new CleanWebpackPlugin(),
    isProd ? false : new webpack.HotModuleReplacementPlugin()
  ].filter(Boolean)
};
