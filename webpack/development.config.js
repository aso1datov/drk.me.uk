const { resolve } = require('path');
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = () => {
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    mode: 'development',
    entry: './sources/js/app.js',
    output: {
      path: resolve(__dirname, '..', 'public', 'dist'),
      filename: 'bundle.js',
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
                  url: false,
                  sourceMap: true,
                  importLoaders: 2,
                },
              },
              {
                loader: 'postcss-loader',
                options: { sourceMap: true },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  data: '$env: dev;',
                },
              },
            ],
          }),
        },
      ],
    },
    plugins: [CSSExtract, new Dotenv()],
    devtool: 'inline-source-map',
    devServer: {
      contentBase: resolve(__dirname, '..', 'public'),
      historyApiFallback: true,
      publicPath: '/dist/',
      port: 9000,
    },
  };
};
