const { resolve } = require('path');
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const STATIC_PATH = resolve(__dirname, '..', 'build');

module.exports = () => {
  const CSSExtract = new ExtractTextPlugin({ filename: 'css/styles.css' });

  const HTMLGenerator = new HtmlWebpackPlugin({
    filename: 'index.html',
    title: 'drk.me.uk',
    template: './sources/index.tpl.html',
    hash: true,
  });

  return {
    mode: 'production',
    entry: './sources/js/app.js',
    output: {
      publicPath: '/',
      path: STATIC_PATH,
      filename: 'js/bundle.js',
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
          use: CSSExtract.extract({
            fallback: 'style-loader',
            use: [
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
                  sourceMap: true,
                  data: '$env: prod;',
                },
              },
            ],
          }),
        },
      ],
    },
    plugins: [CSSExtract, HTMLGenerator, new Dotenv()],
    devtool: 'source-map',
  };
};
