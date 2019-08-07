FactoryBot.define do
  factory :user do
    email {"ang@example.com"}
    username {"angelica"}

  # user_with_posts will create post data after the user has been created
  factory :user_with_scripts do
    # little_scripts is declared as a transient attribute and available in
    # attributes on the factory, as well as the callback via the evaluator
    transient do
      little_scripts { 2 }
    end

    # the after(:create) yields two values; the user instance itself and the
    # evaluator, which stores all values from the factory, including transient
    # attributes; `create_list`'s second argument is the number of records
    # to create and we make sure the user is associated properly to the other records
    after(:create) do |user, evaluator|
      create_list(:little_script, evaluator.little_scripts, user: user)
    end
  end

  end
end
