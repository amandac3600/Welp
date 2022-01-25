@businesses.each do |business|
  
  json.set! business.id do
    json.extract! business, :id, :name, :address, :city, :zip_code, :phone_number, :website, :open, :close, :category, :price
    json.photo_urls business.photos.map { |photo| url_for(photo) }
    json.reviews business.reviews.first
  end
  
end
