class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5), message: "To submit your review, please select a star rating for this business." } 
  validates :body, presence: { message: "To submit your review, please explain your rating to others." }

  has_one :business,
    class_name: :Business
    
  has_one :author,
    class_name: :User

end
