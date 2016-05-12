var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./componentes/app.js",
    watch: true,
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("css", "css-loader")},
			      { test: /\.styl$/, loader: ExtractTextPlugin.extract("stylus", "css-loader!stylus-loader")}
        ]
    },
    plugins: [
        new ExtractTextPlugin("./public/styles.css", {allChunks: true})
    ]
};
