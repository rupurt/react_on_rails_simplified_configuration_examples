# Webpack configuration for a Greenfield Rails Project

* Add a [static location](config/initializers/assets.rb##L26) for the manifest file

* [Add the `webpack-sprockets-rails-manifest-plugin` to `package.json`](client/package.json#L36)

* [Configure the plugin](client/webpack.config.js#L36) within Webpack

* Configure Webpack to [output the build](client/webpack.config.js#L22) to `public/assets`

* [Render the bundle javascript](app/views/layouts/webpack_application.html.erb#L13) file that matches the bundle name with standard Rails view helpers

* [Write your Javascript](client/app/bundles/main/index.jsx) using the cool tools provided by the Webpack & npm ecosystems

* Run `invoker start -f Procfile.dev`

* Visit [http://localhost:3000](http://localhost:3000)

* Profit!
