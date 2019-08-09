class Step < ApplicationRecord
  belongs_to :little_script, touch: true



  def to_hash

    {id: self.id, name: self.name, duration: self.duration }

  end

end
