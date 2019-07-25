class CreatesLittleScript
  attr_reader :little_script_name, :existing_user

  def initialize(user_object, little_script_params)
    @little_script_name = little_script_params[:name]
    @existing_user ||= user_object
  end

  def make_script
    return unless existing_user # TODO make with a guest user
    existing_user.little_scripts.build(name: little_script_name)
  end

end