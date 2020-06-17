class Couple < ApplicationRecord
  belongs_to :user1, class_name: "user"
  belongs_to :user2, class_name: "user"
  has_many :events
  has_many :countdowns
  has_many :photos
end