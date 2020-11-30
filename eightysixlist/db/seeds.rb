# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@restaurants = Restaurant.create[(name: "Lulu's", city: "Myrtle Beach", state: "South Carolina")]
puts "#{Restaurant.count} restaurants created!"

@admin = User.create!(name: "admin", email: "admin@gmail.com", username: "admin", password: "123456", age: "40", phone: "5555555555")
@user1 = User.create!(name: "Peter Wilson", email: "peterwilson@gmail.com", username: "peterwilson", password: "123456", age: "40", phone: "5555555555")
puts "#{User.count} users created!"

@posts = Post.create!(title: "Day 1", content: "I started today!", image_url: "picture.com/pic/jpeg", user: @user1)

puts "#{Post.count} posts created!"

