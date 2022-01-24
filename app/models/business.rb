class Business < ApplicationRecord
  validates :name, :address, :city, :state, :zip_code, :phone_number, :open, :close, :category, :price, presence: true
  has_many :reviews,
    foreign_key: :business_id

  has_many_attached :photos 
  
end
