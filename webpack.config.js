const path = require("path");

module.exports = () => {
    return {
        name: "something",

        entry: [
            "./src/index.ts",
        ],

        output: {
            path: path.resolve(process.cwd(), "dist"),
            filename: "main.js",
            publicPath: "/",
        },

        devtool: "none" ,

        resolve: {
            extensions: [".ts", ".tsx", ".mjs", ".js"],
            modules: [
                path.resolve("./src"),
                path.resolve("./node_modules"),
            ],
        },

        module: {
            rules: [
                {
                    test: /\.(tsx|ts)$/,
                    loaders: [
                        "babel-loader",
                        "ts-loader",
                    ],
                },
            ],
        },
    };
};
