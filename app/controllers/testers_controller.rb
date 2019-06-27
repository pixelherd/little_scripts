class TestersController < ApplicationController
  before_action :authenticate_tester!

  def index
    if current_tester
      render json: "ok"
    else
      render json: "huh"
    end
  end

end
