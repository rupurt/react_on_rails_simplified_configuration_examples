# Webpack configuration for a Greenfield Sprockets Stats Rails Project

* Add a [static location](config/initializers/assets.rb##L26) for the manifest file

* [Add the `webpack-sprockets-rails-manifest-plugin` to `package.json`](client/package.json#L34)

* [Add the `sri-stats-webpack-plugin` to `package.json`](client/package.json#L34)

* [Configure the stats plugins](client/webpack.config.js#L37) within Webpack

* Configure sprockets stats to [output the build and manifest](client/webpack.config.js#L43) to `public/assets`

* [Render the bundle javascript](app/views/layouts/webpack_application.html.erb#L13) file that matches the bundle name with standard Rails view helpers

* [Write your Javascript](client/app/bundles/main/index.jsx) using the cool tools provided by the Webpack & npm ecosystems

* Run `invoker start -f Procfile.dev`

* Visit [http://localhost:3000](http://localhost:3000)

* Profit!
