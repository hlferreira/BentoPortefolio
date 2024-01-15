const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const sveltePreprocess = require('svelte-preprocess')
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const getWebpackConfig = env => {
    return {
        mode: 'development',
        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].js',
        },
        devServer: {
            host: '0.0.0.0',
            static: {
                directory: path.resolve(__dirname, 'build')
            },
            historyApiFallback: true
        },
        optimization: {
            usedExports: true,
            minimize: true,
            minimizer: [
                new HtmlMinimizerPlugin(),
            ],
        },
        module: {
            rules: [
                {
                    test: /\.html$/i,
                    loader: 'html-loader'
                },
                {
                    test: /\.ts$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-typescript']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        { loader: 'css-loader', options: { sourceMap: true } }
                    ]
                },
                {
                    test: /\.svelte$/,
                    use: {
                        loader: 'svelte-loader',
                        options: {
                            preprocess: sveltePreprocess({}),
                            emitCss: true
                        }
                    }
                },
                {
                    test: /\.(png|svg|jpg|gif|pdf)$/,
                    type: 'asset',
                  }
            ]
        },
        plugins: [
            
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            new MiniCssExtractPlugin()
        ],
        resolve: {
            conditionNames: ['svelte'],
            alias: {
                public: path.resolve(__dirname, 'public/')
            }
        }
    }
}

module.exports = env => {
    return getWebpackConfig();
};

module.exports.getWebpackConfig = getWebpackConfig