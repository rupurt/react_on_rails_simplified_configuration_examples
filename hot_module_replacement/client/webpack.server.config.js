const webpack = require('webpack');
const path = require('path');
const config = require("./webpack.config");

function devServerEntries() {
  var entry = {};

  Object.keys(config.entry).forEach((key) => {
    var existing = config.entry[key];
    var entries = (existing instanceof Array) ? existing.slice() : Array.of(existing);

    entries.unshift("react-hot-loader/patch");
    entry[key] = entries.concat([
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server'
    ]);
  });

  return entry;
}
config.entry = devServerEntries();

config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

config.devServer = {
  contentBase: config.output.path,
  publicPath: "http://localhost:8080/assets/",
  hot: true,
  inline: true
};

module.exports = config;
