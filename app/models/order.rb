class Order < ApplicationRecord
  belongs_to :user
<<<<<<< HEAD
  has_many :items, dependent: :destroy
=======
>>>>>>> generated controllers
end
