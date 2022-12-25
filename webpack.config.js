const path = require("path");
const htmlWebpack = require("html-webpack-plugin");
const { type } = require("os");

module.exports = {

    mode : "development",
    entry : path.resolve(__dirname, "src/index.js"),
    output : {

        path : path.resolve(__dirname, "build"),
        filename : "bundle.js",
        clean : true

    },

    // Html template load-Config.
    plugins : [

        new htmlWebpack({

            title : "Mini React",
            filename : "index.html",
            template : path.resolve(__dirname, "public/index.html")

        })

    ],

    // Babel config.
    module : {

        rules : [

            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader",
                    options : {
                        presets : ["@babel/preset-env"]
                    }
                }
            },
            {
                test : /\.(css|sass|scss)$/i,
                use : ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test : /\.(jpg|png|svg|jpeg|webp)$/,
                type : "asset/resource"
            }

        ]

    },

    // devServer config.
    devServer : {

        static : {
            directory : path.resolve(__dirname, "build"),
        },
        port : 3000,
        open : true

    }

}