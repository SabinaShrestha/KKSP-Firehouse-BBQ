@admin = User.create(
  name: 'admin',
  email: 'admin@admin.com',
  password: 'password',
  nickname: 'admin',
  image: "https://robohash.org/#{Faker::Number.number(1)}?set=set2"
)

@teacher = User.create(
  email: 'teacher@teacher.com',
  password: 'password',
  name: 'visitor',
  nickname: 'visitor',
  image: "https://robohash.org/#{Faker::Number.number(1)}?set=set1"
)

20.times do 
  name = Faker::Food.dish
  price = Faker::Number.between(1-10)
  category = Faker::Number.between(1-3)
  Item.create(
    name: name,
    price: price,
    category: category,
  )
end

puts 'seeded'
