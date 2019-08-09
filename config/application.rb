# @NB Loads the ROR gems and gems for the specified Rails.env;
# configures the application.


# @NB this is generated at "new" time; allegedly not necessary to edit?
require_relative 'boot'

# @NB this is the line to replace if we want to require some of the railties
# and not others, eg
# require "active_model/railtie"
# require "active_record/railtie"
# require "action_controller/railtie"
# require "action_mailer/railtie"
# require "action_view/railtie"
# require "sprockets/railtie"
# require "rails/test_unit/railtie"

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)


# @NB The main config of the app gets its own module & class
# "As opposed to the simpler assumptions of earlier Rails versions,
# the creation of a module specifically for your application
# lays a foundation for running multiple Rails applications
# in the same executable Ruby process." - Fernandez, 2017
module LittleScripts
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
