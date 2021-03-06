class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found


  def require_logged_in!
    redirect_to new_user_session_path if current_user.nil?
  end

  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
  end

  private
  def record_not_found
    flash[:error] = "We couldn't find what you were looking for"
    redirect_back(fallback_location: root_path)
  end

end
