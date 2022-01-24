export const fetchBusiness = businessId => (
  $.ajax({
    method: 'GET',
    url: `/api/businesses/${businessId}`
  })
);

export const fetchBusinesses = () => (
  $.ajax({
    method: 'GET',
    url: '/api/businesses'
  })
);
