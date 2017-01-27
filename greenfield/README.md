# Webpack configuration for a Greenfield Rails Project

* Add a [static location](config/initializers/assets.rb##L29) for the manifest file

* [Add the `webpack-sprockets-rails-manifest-plugin` to `package.json`](https://github.com/rupurt/react_on_rails_simplified_configuration_examples/blob/master/greenfield/client/package.json#L37)

* [Configure the plugin](https://github.com/rupurt/react_on_rails_simplified_configuration_examples/blob/master/greenfield/client/webpack.config.js#L36) within Webpack

* Configure Webpack to [output the build](client/webpack.config.js#L22) to `public/assets`

* [Render the bundle javascript](https://github.com/rupurt/react_on_rails_simplified_configuration_examples/blob/master/greenfield/app/views/layouts/webpack_application.html.erb#L13) file that matches the bundle name with standard Rails view helpers

* [Write your Javascript](https://github.com/rupurt/react_on_rails_simplified_configuration_examples/blob/master/greenfield/client/app/bundles/main/index.jsx) using the cool tools provided by the Webpack & npm ecosystems

* Run `invoker start -f Procfile.dev`

* Visit [http://localhost:3000](http://localhost:3000)

* Profit!
