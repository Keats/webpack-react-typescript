const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "index.html" }),
    ]
};
