/* eslint comma-dangle: ["error",
  {"functions": "never", "arrays": "only-multiline", "objects":
"only-multiline"} ] */

const webpack = require('webpack');
const path = require('path');
const SriStatsPlugin = require('sri-stats-webpack-plugin');
const SprocketsStatsPlugin = require('sprockets-stats-webpack-plugin');

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

    new SriStatsPlugin({
      algorithm: 'sha512',
      customStatsKey: 'rails',
      assetKey: 'integrity'
    }),

    new SprocketsStatsPlugin({
      customStatsKey: 'rails',
      ignore: (/\.(gz|html)$/i),
      outputAssetsPath: path.join(__dirname, '..', 'public', 'assets'),
      sourceAssetsPath: path.join(__dirname, 'app', 'bundles'),
      saveAs: path.join(__dirname, '..', 'config', 'sprockets-manifest.json'),
      write: true,
      resultsKey: '__RESULTS_SPROCKETS'
    })
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
