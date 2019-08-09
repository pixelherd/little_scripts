class User < ApplicationRecord
  # Include default devise modules
  devise :database_authenticatable, :rememberable

  has_many :little_scripts, dependent: :destroy
  has_many :steps, :through => :little_scripts, :source => :steps

  def build_dashboard

    own_scripts = self.little_scripts.includes(:steps)

    scripts_array = []

    own_scripts.each { |lil_script| scripts_array.push(lil_script.to_hash) }

    scripts_array

  end

end
