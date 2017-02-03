class WebpackController < ApplicationController
  layout "webpack_application"

  def index
    render :index
  end
end
