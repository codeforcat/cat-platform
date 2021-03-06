const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const resolve = require('./resolve.js');

module.exports = (env, argv) => {
  return {
    mode: argv.mode,
    devtool: 'source-map',
    resolve: resolve,
    entry: {
      common: ['./frontend/src/index.js']
    },
    output: {
      path: path.resolve(__dirname , 'frontend/static/frontend'),
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.scss$/,
          exclude: /(node_modules|styles\.scss)/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: argv.mode === 'development',
                importLoaders: 2,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: argv.mode === 'development',
                config: {
                  path: './postcss.config.js'
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: argv.mode === 'development'
              }
            }
          ]
        },
        {
          test: /styles\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: argv.mode === 'development',
                importLoaders: 2
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: argv.mode === 'development',
                config: {
                  path: './postcss.config.js'
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: argv.mode === 'development'
              }
            }
          ]
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test:/node_modules/,
            name: 'vendor',
            chunks: 'initial',
            enforce: true
          }
        }
      },
      minimizer: argv.mode === 'production'
        ? [
            new TerserPlugin({
              extractComments: /^\**!|@preserve|@license|@cc_on/i,
            }),
            new OptimizeCSSAssetsPlugin()
          ]
        : []
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ]
  }
};
