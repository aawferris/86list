# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Restaurant.destroy_all
User.destroy_all
Post.destroy_all

# RESTAURANT SEEDS
@restaurant1 = Restaurant.create!(name: "Lulu's", city: "Myrtle Beach", state: "South Carolina")
@restaurant2 = Restaurant.create!(name: "TGIF's", city: "Myrtle Beach", state: "South Carolina")
puts "#{Restaurant.count} restaurants created!"

# USER SEEDS
@admin = User.create!(name: "admin", email: "admin@gmail.com", username: "admin", password: "123456", age: "40", phone: "555", restaurant: @restaurant1, location: "Lulu's")

@user1 = User.create!(name: "Peter Wilson", email: "peterwilson@gmail.com", username: "peterwilson", password: "123456", age: "40", phone: "555", restaurant: @restaurant1, location: "Lulu's")
@user2 = User.create!(name: "Chris Haar", email: "chrishaar@gmail.com", username: "chrishaar", password: "123456", age: "33", phone: "555", restaurant: @restaurant2, location: "TGIF")
puts "#{User.count} users created!"

# POST SEEDS
@post1 = Post.create!(title: "Day 1", content: "I started today!", image_url: "picture.com/pic/jpeg", user: @user1, restaurant: @restaurant1)
@post2 = Post.create!(title: "Hey-oh!", content: "Got that good good in my pocket.", image_url: "picture.com/pic/jpeg", user: @user2, restaurant: @restaurant2)
@post3 = Post.create!(title: "All-powerful admin!", content: "I'm the man in the box.", image_url: "picture.com/pic/jpeg", user: @admin, restaurant: @restaurant1)

puts "#{Post.count} posts created!"

# COMMENT SEEDS
@comment1 = Comment.create!(content: "I couldn't agree more!", post: @post4, restaurant: @restaurant1)
@comment2 = Comment.create!(content: "I feel so mighty", post: @post4, restaurant: @restaurant1)

puts "#{Comment.count} comments created!"