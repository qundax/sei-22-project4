class User < ApplicationRecord
  has_one :couple
  has_many :events, through: :couple
  has_many :countdowns, through: :couple
  has_many :photos, through: :couple
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end