class Step < ApplicationRecord
  belongs_to :little_script, touch: true
  # belongs_to :user


  def to_hash

    {id: self.id, name: self.name, duration: self.duration }

  end

end
