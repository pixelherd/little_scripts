class LittleScript < ApplicationRecord
  belongs_to :user
  has_many :steps, dependent: :destroy


  def to_hash
    steps = self.steps
    steps_array = []
    total_seconds = 0

    steps[0.. -1].map do |s|
      steps_array.push(s.to_hash)
      total_seconds += s.duration
      end

    {id: self.id,
     name: self.name,
     total_seconds: total_seconds,
     duration_hours: (total_seconds / 60 / 60),
     duration_minutes: (total_seconds / 60 % 60),
     steps: steps_array }

  end

end
