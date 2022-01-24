class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5), message: "To submit your review, please select a star rating for this business." } 
  validates :body, presence: { message: "To submit your review, please explain your rating to others." }

  belongs_to :business,
    class_name: :Business
    
  belongs_to :author,
    class_name: :User

  def average_rating
    reviews.average(:rating)
  end
end
