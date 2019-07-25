class StepsController < ApplicationController
  before_action :set_step, only: [:update, :destroy]
  before_action :make_step, only: [:create]

  def index
    @steps = Step.all
  end


  def create

    respond_to do |format|
      if @step.save
        format.html { redirect_to @step.little_script, notice: 'Step was successfully created.' }
        format.json { render @step.little_script, status: :created, location: @step.little_script }
      else
        format.html { redirect_to root_path }
        format.json { render json: @step.errors, status: :unprocessable_entity }
      end
    end
  end


  def update
    respond_to do |format|
      if @step.update(step_params)
        format.html { redirect_to @step.little_script, notice: 'Step was successfully edited.' }
        format.json { render @step.little_script, status: :ok, location: @step.little_script }
      else
        format.html { render @step.little_script }
        format.json { render json: @step.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @step.destroy
    respond_to do |format|
      format.html { redirect_to redirect_to(@step.little_script), notice: 'Step deleted.' }
      format.json { head :no_content }
    end
  end


  private

  def make_step
    safe_params = step_params
    existing_script = LittleScript.find_by(:id => safe_params[:little_script_id])
    @step = CreatesStep.new(existing_script, safe_params)&.make_step
  end

  def set_step
    @step = Step.find(params[:id])
  end

  def step_params
    safe_params = params.require(:step).permit(:name, :duration_hours, :duration_minutes, :little_script_id)
  end

end
