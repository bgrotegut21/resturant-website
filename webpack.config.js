const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
    entry: {
        index:"./src/scripts/index.js",
        home:"./src/scripts/home.js",
        navigation:"./src/scripts/navigation.js",
        menu:"./src/scripts/menu.js",
        contact:"./src/scripts/contact.js",
        elementEvents:"./src/scripts/elementEvents.js",
       
        

    },
    devtool: "inline-source-map",

    devServer: {
        static:"./dist",
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"McRonalds"
        })
    ],
    module: {
        rules: [
            { 
                test:/\.css$/i,
                use: ["style-loader","css-loader"],
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:"asset/resource",
            },
        ]
    },

    output: {
        filename:"[name].bundle.js",
        path:path.resolve(__dirname, "dist"),
        clean:true,  
        publicPath:"/",
    },  
}