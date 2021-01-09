const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

let config = {
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        pathinfo: false,
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'react-svg-loader'
            },
            {
                test: [/\.tsx?$/],
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    experimentalWatchApi: true,
                },
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            esModule: true,
                            modules: {
                                namedExport: true
                            }
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: true,
                            modules: {
                                namedExport: true
                            }
                        }
                    },
                    'sass-loader']
            },

        ]
    },
    devtool: false,
    performance: {hints: false},
    plugins: [],
    devServer: {stats: "minimal"},
};
module.exports = (env, options) => {
    config.plugins.push(new HtmlWebpackPlugin());

    config.mode = options.mode || 'production';

    if (config.mode === "production") {
        config.plugins.push(new CleanWebpackPlugin())

        config.optimization = {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                }),
            ],
        }
    } else {
        // config.module.rules[2].use[1].options.modules.localIdentName = "[local]"
    }

    return config
}
