const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

console.log(path.resolve(__dirname, 'dist'));

// the path(s) that should be cleaned
let pathsToClean = [
    'dist',
    'build'
  ]

  // the clean options to use
let cleanOptions = {
    root:     '/full/webpack/root/path',
    exclude:  ['shared.js'],
    verbose:  true,
    dry:      false
  }

module.exports = {
    entry: './example/app.js',
    mode: 'development',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true,
        stats: 'errors-only',
        clientLogLevel: 'error'
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new HtmlWebpackPlugin({template: './example/index.html'})
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude:path.resolve(__dirname, "node_modules"),
                resolve: {
                    extensions: [".js", ".jsx"]
                },
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["react", "es2015", "stage-2"]
                        }
                    }
                ],
            }
        ]
    }
};