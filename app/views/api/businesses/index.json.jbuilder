@businesses.each do |business|
  
  json.set! business.id do
    json.extract! business, :id, :name, :address, :city, :zip_code, :lat, :lng, :phone_number, :website, :open, :close, :category, :price
    json.photo_urls business.photos.map { |photo| url_for(photo) }
    json.reviews business.reviews
  end
  
end
