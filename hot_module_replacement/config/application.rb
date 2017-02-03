require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module HotModuleReplacement
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    if ENV["ASSET_HOST"].present?
      config.action_controller.asset_host = proc { |source, _request|
        ENV["ASSET_HOST"]
      }
    end
  end
end
