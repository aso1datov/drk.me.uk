const { resolve } = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    mode: 'development',
    entry: './sources/js/app.js',
    output: {
      path: resolve(__dirname, '..', 'public', 'dist'),
      publicPath: '/',
      filename: '[name].[hash:8].js',
      chunkFilename: '[name].[hash:8].js',
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
                sourceMap: true,
                url: false,
                importLoaders: 2,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourcecMap: true,
                data: '$env: dev;',
              },
            },
          ],
        },
      ],
    },
    plugins: [HTMLGenerator, CSSExtract, new Dotenv()],
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      contentBase: resolve(__dirname, '..', 'public'),
      historyApiFallback: true,
      port: 9000,
    },
  };
};
