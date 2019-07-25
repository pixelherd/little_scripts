require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "GET /users/:id" do
    it "asks to be redirected to root" do
      get user_path(1)
      expect(response).to have_http_status(302)
    end
  end
end
