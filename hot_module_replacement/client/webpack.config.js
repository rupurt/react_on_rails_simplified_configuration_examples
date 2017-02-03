/* eslint comma-dangle: ["error",
  {"functions": "never", "arrays": "only-multiline", "objects":
"only-multiline"} ] */

const webpack = require('webpack');
const path = require('path');
const WebpackSprocketsRailsManifestPlugin = require("webpack-sprockets-rails-manifest-plugin");

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

const config = {
  entry: {
    "main-bundle": [
      'babel-polyfill',
      './app/bundles/main/index',
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve('../public/assets'),
    publicPath: "http://localhost:8080/assets/"
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),

    new WebpackSprocketsRailsManifestPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: "style-loader"
      },
      {
        test: /\.css$/,
        loader: "css-loader"
      },
    ],
  },
};

module.exports = config;

if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map';
} else {
  config.plugins.push(
    new webpack.optimize.DedupePlugin()
  );
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
