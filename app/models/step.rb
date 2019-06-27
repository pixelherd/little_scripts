class Step < ApplicationRecord
  belongs_to :little_script, touch: true
  # belongs_to :user

end
