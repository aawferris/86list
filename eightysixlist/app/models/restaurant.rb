class Restaurant < ApplicationRecord
  has_many :users, :posts
end
