class CreatesStep
  attr_reader :step_name, :step_duration, :existing_script

  def initialize(existing_script, step_params)
    @step_name = step_params[:name]
    @step_duration = duration_seconds(step_params[:duration_hours].to_i, step_params[:duration_minutes].to_i)
    @existing_script = existing_script
  end

  def make_step
    return false unless existing_script.valid?
    existing_script.steps.build({name: step_name, duration: step_duration})
  end

  def duration_seconds(hours, minutes)
    ((hours * 60 ) + (minutes)) * 60
  end

end
