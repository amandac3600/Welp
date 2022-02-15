import * as ReviewAPIUtil from '../util/review_api_util'

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS,
})

export const fetchReviews = businessId => dispatch => {
  return ReviewAPIUtil.fetchReviews(businessId)
    .then(reviews => dispatch(receiveReviews(reviews)))
};

export const fetchReview = (businessId, reviewId) => dispatch => {
  return ReviewAPIUtil.fetchReview(businessId, reviewId)
    .then(review => dispatch(receiveReview(review)))
};

export const createReview = (review, businessId) => dispatch => {
  return ReviewAPIUtil.createReview(review, businessId)
  .then(review => {dispatch(receiveReview(review))}, error => dispatch(receiveReviewErrors(error)))
};

export const updateReview = (review, businessId) => dispatch => {
  return ReviewAPIUtil.updateReview(review, businessId)
    .then(review => {dispatch(receiveReview(review))}, error => dispatch(receiveReviewErrors(error)))
};

export const deleteReview = (review, businessId) => dispatch => {
  return ReviewAPIUtil.deleteReview(review, businessId)
    .then(review => {dispatch(removeReview(review))}, error => dispatch(receiveReviewErrors(error)))
};
