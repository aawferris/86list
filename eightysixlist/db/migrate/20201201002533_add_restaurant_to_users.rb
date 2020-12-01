class AddRestaurantToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :restaurant, :string
  end
end
