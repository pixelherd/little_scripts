class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :little_scripts, dependent: :destroy
  has_many :steps, :through => :little_scripts, :source => :steps

  def with_little_scripts
    {user: self, little_scripts: self.little_scripts.includes(:steps)}
  end

  def build_dashboard
    @scripts_with_durations = self
                                 .little_scripts
                                 .select("little_scripts.*, SUM(steps.duration) AS steps_duration")
                                 .joins(:steps)
                                 .group("little_scripts.id")

    @scripts_with_durations.map do |script|
      {script_id: script.id,
       script_name: script.name,
       duration_SI: script.steps_duration,
       duration_hours: script.steps_duration / 60 / 60,
       duration_minutes: script.steps_duration / 60 % 60
      }
    end
  end

end
