var path = require('path');

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass' ]
            }
        ],
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};

module.exports = config;