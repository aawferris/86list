class User < ApplicationRecord
  belongs_to :restaurants
  has_many :posts
end
