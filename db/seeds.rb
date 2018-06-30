@admin = User.create(
  name: 'admin',
  nickname: 'admin',
  email: 'admin@admin.com',
  password: 'password',
  image: "https://robohash.org/#{Faker::Number.number(1)}?set=set2"
)

@visitor = User.create(
  name: 'visitor 1',
  nickname: 'visitor',
  email: 'test@test.com',
  password: 'password',
  image: "https://robohash.org/#{Faker::Number.number(1)}?set=set1"
)

20.times do
  name =   Faker::Food.dish
  price =  Faker::Number.between(1-10)
  category = Faker::Number.between(1-3)
  Item.create(
    name: name,
    price: price,
    category: category,
  )
end

puts 'seeded'

