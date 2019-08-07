require 'spec_helper'
require 'rails_helper'

RSpec.describe "CreatesLittleScript" do

  describe "initialization" do

    it "creates a Little Script given a name and a user object" do
      valid_user = FactoryBot.build_stubbed(:user_with_scripts)
      creator = CreatesLittleScript.new(valid_user, name: "My Morning")
      new_script = creator.make_script
      expect(new_script.name).to eq("My Morning")
    end

    it "attaches LittleScript to a valid user" do
      valid_user = FactoryBot.build_stubbed(:user_with_scripts)
      creator = CreatesLittleScript.new(valid_user, name: "My Morning")
      new_script = creator.make_script
      expect(new_script.user).to eq(valid_user)
      expect(new_script).to be_valid
    end

  end

end
