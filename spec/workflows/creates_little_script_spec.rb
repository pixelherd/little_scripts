require 'spec_helper'

RSpec.describe CreatesLittleScript do


  let(:valid_user_attributes) {{:username => "angelica", :display_name => "never satisfied"}}
  let(:valid_user) {User.create! {:valid_user_attributes} }
  let(:user_id) {:valid_user.to_param }

  describe "initialization" do

    it "creates a Little Script given a name and a user id" do
      pending("have refactored the class so the test is actually wrong")


      creator = CreatesLittleScript.new(user_id, name: "My Morning")
      new_script = creator.make_script(valid_user)
      expect(new_script.name).to eq("My Morning")
    end

    it "attaches LittleScript to a valid user" do
      pending("have refactored the class so the test is actually wrong")

      creator = CreatesLittleScript.new(user_id, name: "My Morning")
      new_script = creator.make_script(valid_user)
      expect(new_script.user).to eq(valid_user)
      expect(new_script).to be_valid
    end

  end

  describe "attaching steps to a little script" do

    let(:creator) { CreatesLittleScript.new(user_id,
                                            name: "My Morning",
                                            steps_array: [{"name"     =>  "sing!",
                                                           "duration"  =>  61}])}
    let(:new_script) {creator.make_script(valid_user)}

    it "attaches a single step to the new script" do
      pending("have refactored the class so the test is actually wrong")


      new_steps = creator.attach_steps(new_script)

      expect(new_script.steps[0].name).to eq("sing!")
      expect(new_script.steps[0].duration).to eq(61)
      expect(new_script.steps[0]).to be_valid
      expect(new_script).to be_a_new_record

    end

    let(:many_step_creator) { CreatesLittleScript.new(user_id,
                                               name: "My Morning",
                                               steps_array: [{"name"     =>  "sing!",
                                                              "duration"  =>  61},
                                                              {"name"     =>  "conquer the world",
                                                              "duration"  =>  65},
                                                              {"name"     =>  "sail to victory",
                                                              "duration"  =>  180},
                                                           ])}
    let(:many_step_script) {many_step_creator.make_script(valid_user)}

    it "attaches a bunch of valid steps to the new script" do
      pending("have refactored the class so the test is actually wrong")


    new_steps = many_step_creator.attach_steps(many_step_script)

    expect(many_step_script.steps.length).to eq(many_step_creator.steps_array.length)
    expect(many_step_script.steps.all? {|step| step.class == Step}).to be_truthy
    end
  end
end
