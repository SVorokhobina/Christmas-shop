const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const pages = ['home'];

module.exports = (env) => {
  const isDev = env.mode === 'development';
  const isProd = env.mode === 'production';

  return {
    mode: env.mode ?? 'development',

    /*entry: pages.reduce((config, page) => {
      config[page] = `./scripts/${page}.js`;
      return config;
    }, {}),*/

    entry: {
      home: path.resolve(__dirname, 'src', 'scripts', 'home.js'),
      gift: path.resolve(__dirname, 'src', 'scripts', 'gift.js'),
    },
    
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'scripts/[name].js',
      clean: true,
      //assetModuleFilename: 'images/[name][ext]'
    },

    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },

    /* plugins: [].concat(
      pages.map(
        (page) =>
          new HtmlWebpackPlugin({
            inject: true,
            template: `pages/${page}.html`,
            filename: `pages/${page}.html`,
            chunks: [page],
          })
      )
    ), */

    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, 'src', 'pages', 'home.html'),
        // title: Christmas Shop,
        favicon: '',
        filename: 'index.html',
        chunks: ['home'],
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, 'src', 'pages', 'gift.html'),
        filename: 'gift.html',
        chunks: ['gift'],
        // title: 'Christmas Shop',
        favicon: '',
      }),
      isProd && new MiniCssExtractPlugin({
        filename: 'styles/[name].css'
      })
    ],

    module: {
      rules: [
        {
          test: /\.(c|sc)ss$/i,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"],
        },
        {
          test: /\.(jpe?g|png|webp|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]'
          }
        },
      ],
    },

    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? {
      open: true,
    } : undefined,
  }  
};