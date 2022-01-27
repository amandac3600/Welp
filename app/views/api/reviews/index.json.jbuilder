@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :user_id, :business_id, :body, :rating, :created_at, :updated_at
        json.author review.user_id
    end
end

