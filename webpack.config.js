const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    context: __dirname,
    mode: "development",
    entry: {
        app: "./src/index.tsx"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.[hash].js"
    },
    devtool: "eval-source-map",
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
            async: false,
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
};
