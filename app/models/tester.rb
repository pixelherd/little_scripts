class Tester < ApplicationRecord
  # Include default devise modules. Others available are:
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
