class AddRestaurantToPost < ActiveRecord::Migration[6.0]
  def change
    add_reference :posts, :restaurant, null: false, foreign_key: true
  end
end
