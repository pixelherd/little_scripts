FactoryBot.define do
  factory :little_script do
    user
    name { "My String" }

    factory :little_script_with_steps do
      transient do
        steps { 2 }
      end

      # the after(:create) yields two values; the user instance itself and the
      # evaluator, which stores all values from the factory, including transient
      # attributes; `create_list`'s second argument is the number of records
      # to create and we make sure the user is associated properly to the other records
      after(:create) do |little_script, evaluator|
        create_list(:step, evaluator.steps, little_script: little_script)
      end
    end
  end

end
