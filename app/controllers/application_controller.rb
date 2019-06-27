class ApplicationController < ActionController::Base
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  private
  def record_not_found
    flash[:error] = "We couldn't find what you were looking for"
    redirect_back(fallback_location: root_path)
  end

end
