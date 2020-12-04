class AddPostToComment < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :comments, :posts
    add_foreign_key :comments, :users
  end
end
