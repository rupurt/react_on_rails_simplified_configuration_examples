# Webpack configuration with Hot Module Reloading for a Greenfield Rails Project

* Add a [static location](config/initializers/assets.rb##L26) for the manifest file

* [Add the `webpack-sprockets-rails-manifest-plugin` to `package.json`](client/package.json#L37)

* [Configure the plugin](client/webpack.config.js#L37) within Webpack

* Configure Webpack dev server to [serve assets](client/webpack.server.config.js#L27)

* Configure the Rails [asset host](config/application.rb#L15) to point to your [Webpack dev server instance](Procfile.dev#L2)

* [Render the bundle javascript](app/views/layouts/webpack_application.html.erb#L13) file that matches the bundle name with standard Rails view helpers

* [Write your Javascript](client/app/bundles/main/index.jsx) using the cool tools provided by the Webpack & npm ecosystems

* Update your Procfile to run Webpack dev server

* Run `invoker start -f Procfile.dev`

* Visit [http://localhost:3000](http://localhost:3000)

* Start changing your static assets and watch the reload in front of your eyes

* Profit!
