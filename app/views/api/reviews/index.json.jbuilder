@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :user_id, :business_id, :body, :rating, :created_at, :updated_at
        json.author_first_name review.author.first_name
        json.author_last_name review.author.last_name
    end
end

