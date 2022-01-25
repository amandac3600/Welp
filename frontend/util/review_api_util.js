export const fetchReview = (businessId, reviewId) => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses/${businessId}/reviews/${reviewId}`
  })
);

export const fetchReviews = businessId => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses/${businessId}/reviews`
  })
);

export const createReview = (review, businessId) => (
  $.ajax({
    method: 'POST',
    url: `/api/businesses/${businessId}/reviews`,
    data: { review }
  })
);

export const updateReview = (review, businessId) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/businesses/${businessId}/reviews/${review.id}`,
    data: { review }
  })
);

export const deleteReview = (review, businessId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/businesses/${businessId}/reviews/${review.id}`
  })
)
