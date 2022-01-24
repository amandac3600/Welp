@businesses.each do |business|
  json.set! business.id do
    json.extract! business, :id, :name, :address, :city, :zip_code, :phone_number, :website, :open, :close, :category, :price
    json.photoUrl url_for(business.photos)
  end
end
