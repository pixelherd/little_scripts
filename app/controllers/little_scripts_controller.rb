class LittleScriptsController < ApplicationController
  before_action :set_little_script, only: [:show, :update, :destroy]

  # TODO: implement "guest user"

  # GET /users/1/little_scripts
  # GET /users/1/little_scripts.json
  def index
    @little_scripts = LittleScript.all
  end

  # GET /little_scripts/1
  # GET /little_scripts/1.json
  def show
    respond_to do |format|
      format.html { render :show, include: [:steps] }
      format.json { render json: @little_script, include: [:steps]}
    end
  end

  # GET /little_scripts/new
  def new
    @little_script = LittleScript.new
  end


  # POST /little_scripts
  # POST /little_scripts.json
  def create
    user = User.find_by(:id => current_user.id)
    @little_script = CreatesLittleScript.new(user, little_script_params)&.make_script
    @step = CreatesStep.new(@little_script, step_params)&.make_step

    respond_to do |format|
       if @step.save
         format.html { redirect_to @little_script, notice: 'Little script was successfully updated.' }
         format.json { render :show, status: :ok, location: @little_script }
       else
         format.html { render root_path}
         format.json { render json: @step.errors, status: :unprocessable_entity }
       end
     end
  end

  # PATCH/PUT /little_scripts/1
  # PATCH/PUT /little_scripts/1.json
  def update
    respond_to do |format|
      if @little_script.update(little_script_params)
        format.html { redirect_to @little_script, notice: 'Little script was successfully updated.' }
        format.json { render :show, status: :ok, location: @little_script }
      else
        format.html { render @little_script }
        format.json { render json: @little_script.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /little_scripts/1
  # DELETE /little_scripts/1.json
  def destroy
    @little_script.destroy
    respond_to do |format|
      format.html { redirect_to root_url, notice: 'Little script was successfully deleted.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_little_script
      @little_script = LittleScript.find(params[:id])
    end

    def little_script_params
      params.require(:little_script).permit(:name)
    end

    def step_params
      params.require(:step).permit(:name, :duration_hours, :duration_minutes)
    end
end
