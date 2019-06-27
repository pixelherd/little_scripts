require 'rails_helper'

RSpec.describe "LittleScripts", type: :request do
  describe "GET /users/:user_id/little_scripts" do
    it "works! (now write some real specs)" do
      get "/users/1/little_scripts"
      expect(response).to have_http_status(200)
    end
  end
end
