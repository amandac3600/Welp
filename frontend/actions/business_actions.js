import * as BusinessUtil from '../util/business_api_util'

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES'

export const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
})

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses
})

export const fetchBusiness = businessId => dispatch => (
  BusinessUtil.fetchBusiness(businessId)
    .then(business => dispatch(receiveBusiness(business)))
)

export const fetchBusinesses = () => dispatch => (
  BusinessUtil.fetchBusinesses()
    .then(businesses => dispatch(receiveBusinesses(businesses)))
)

export const searchBusinesses = query => (
  BusinessUtil.searchBusinesses(query)
    .then(businesses => dispatch(receiveBusinesses(businesses)))
)
