FactoryBot.define do
  factory :step do
    little_script
    name { "My Step" }
    duration { 60 }
  end
end
