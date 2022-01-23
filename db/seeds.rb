# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(first_name: 'Michael', last_name: 'Scott', email: 'mscott@mail.com', password: 'michael')
user2 = User.create!(first_name: 'Dwight', last_name: 'Schrute', email: 'dschrute@mail.com', password: 'dwight')
