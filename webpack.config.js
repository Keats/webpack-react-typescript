const path = require("path");

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
};
