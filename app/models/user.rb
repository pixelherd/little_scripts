class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :little_scripts, dependent: :destroy
  has_many :steps, :through => :little_scripts, :source => :steps

  def build_dashboard

    own_scripts = self.little_scripts.includes(:steps)

    scripts_array = []

    own_scripts.each { |lil_script| scripts_array.push(lil_script.to_hash) }

    scripts_array

  end

end
