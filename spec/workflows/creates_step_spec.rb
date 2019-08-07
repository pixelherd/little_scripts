require 'spec_helper'
require 'rails_helper'
RSpec.describe "CreatesStep" do

  describe "initialization" do

    it "creates a Step given valid params" do
      valid_script = FactoryBot.build_stubbed(:little_script_with_steps)
      creator = CreatesStep.new(valid_script, name: "Hoover the dog", duration_hours: 0, duration_minutes: 5)
      new_step = creator.make_step
      expect(new_step.name).to eq("Hoover the dog")
      expect(new_step.duration).to eq(300)
    end

    it "attaches Step to a valid LittleScript" do
      valid_script = FactoryBot.build_stubbed(:little_script_with_steps)
      creator = CreatesStep.new(valid_script, name: "Hoover the dog", duration_hours: 0, duration_minutes: 5)
      new_step = creator.make_step
      expect(new_step.little_script).to eq(valid_script)
      expect(new_step).to be_valid
    end

  end

end
