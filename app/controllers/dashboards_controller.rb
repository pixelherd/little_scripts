class DashboardsController < ApplicationController
  # before_action :require_logged_in!, only: [:show]

  def show
    @dashboard = User.find(1).build_dashboard

    respond_to do |format|
      format.html { render :show }
      format.json { render json: @dashboard}
    end
  end

end