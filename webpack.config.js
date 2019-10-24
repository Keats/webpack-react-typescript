const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

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
    plugins: [
        new HtmlWebpackPlugin({ template: "index.html" }),
        new ForkTsCheckerWebpackPlugin(),
    ]
};
