const { resolve } = require('path');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const STATIC_PATH = resolve(__dirname, '..', 'build');

module.exports = () => {
  const HTMLGenerator = new HtmlWebpackPlugin({
    filename: 'index.html',
    title: 'drk.me.uk',
    template: './sources/index.tpl.html',
    hash: false,
  });

  const CSSExtract = new MiniCssExtractPlugin({
    filename: '[name].[hash:8].css',
    chunkFilename: '[name].[hash:8].css',
  });

  return {
    mode: 'production',
    entry: './sources/js/app.js',
    output: {
      filename: '[name].[hash:8].js',
      chunkFilename: '[name].[hash:8].js',
      publicPath: '/',
      path: STATIC_PATH,
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': resolve(__dirname, '..', 'sources', 'js'),
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                url: false,
                importLoaders: 2,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                data: '$env: prod;',
              },
            },
          ],
        },
      ],
    },
    plugins: [HTMLGenerator, CSSExtract, new Dotenv()],
    devtool: false,
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            reuseExistingChunk: true,
          },
        },
      },
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
        }),
      ],
    },
  };
};
