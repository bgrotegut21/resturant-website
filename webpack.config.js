const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
    entry:"./src/scripts/index.js",
    devServer: {
        static:"./dist"
    },
    devtool: "inline-source-map",

    devServer: {
        static:"./dist",
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"Output Management"
        })
    ],

    output: {
        filename:"main.js",
        path:path.resolve(__dirname, "dist"),
        clean:true,
        publicPath:"/",
    },
}