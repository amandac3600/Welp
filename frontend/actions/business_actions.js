import * as BusinessUtil from '../util/business_api_util'

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES'
export const RECEIVE_BUSINESS_ERRORS = "RECEIVE_BUSINESS_ERRORS";
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
})

export const receiveBusinesses = businesses => {
  return {
  type: RECEIVE_BUSINESSES,
  businesses
}}

export const receiveBusinessErrors = errors => ({
  type: RECEIVE_BUSINESS_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_ERRORS,
  errors
});

export const fetchBusiness = businessId => dispatch => (
  BusinessUtil.fetchBusiness(businessId)
    .then(business => dispatch(receiveBusiness(business)))
)

export const fetchBusinesses = () => dispatch => (
  BusinessUtil.fetchBusinesses()
    .then(businesses => dispatch(receiveBusinesses(businesses)))
)

export const searchBusinesses = query => dispatch => (
  BusinessUtil.searchBusinesses(query)
    .then(businesses => dispatch(receiveBusinesses(businesses)), error => dispatch(receiveBusinessErrors(error)))
)
