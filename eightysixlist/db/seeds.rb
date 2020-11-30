# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.destroy_all
User.destroy_all
Post.destroy_all

@restaurant1 = Restaurant.create!(name: "Lulu's", city: "Myrtle Beach", state: "South Carolina")
@restaurant2 = Restaurant.create!(name: "TGIF's", city: "Myrtle Beach", state: "South Carolina")
puts "#{Restaurant.count} restaurants created!"

@admin = User.create!(name: "admin", email: "admin@gmail.com", username: "admin", password: "123456", age: "40", phone: "5555555555")

@user1 = User.create!(name: "Peter Wilson", email: "peterwilson@gmail.com", username: "peterwilson", password: "123456", age: "40", phone: "5555555555")
@user2 = User.create!(name: "Chris Haar", email: "chrishaar@gmail.com", username: "chrishaar", password: "123456", age: "33", phone: "5555555555")
puts "#{User.count} users created!"

@post1 = Post.create!(title: "Day 1", content: "I started today!", image_url: "picture.com/pic/jpeg", user: @user1)
@post2 = Post.create!(title: "Hey-oh!", content: "Got that good good in my pocket.", image_url: "picture.com/pic/jpeg", user: @user2)

puts "#{Post.count} posts created!"

