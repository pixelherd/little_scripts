class UsersController < ApplicationController
  before_action :authenticate_user!
  # before_action :set_user, only: [:edit, :update, :destroy]

  # GET /users/1
  # GET /users/1.json
  def show
    @user = User.find(params[:id])

    respond_to do |format|
      format.html { render :show, include: [:little_scripts, :steps] }
      format.json { render json: @user, include: [:little_scripts, :steps]}
    end
  end

  # private
  #   # Use callbacks to share common setup or constraints between actions.
  #   def set_user
  #     @user = User.find(params[:id])
  #   end
  #
  #   # Never trust parameters from the scary internet, only allow the white list through.
  #   def user_params
  #     params.require(:user).permit(:username, :display_name)
  #   end
end
