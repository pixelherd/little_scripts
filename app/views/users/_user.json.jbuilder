json.extract! user, :id, :username, :display_name, :created_at, :updated_at
json.url user_url(user, format: :json)