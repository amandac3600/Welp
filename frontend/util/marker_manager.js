export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    businesses.forEach(business => {
      if (!this.markers[business.id]) {
        this.createMarkerFromBusiness(business)
      }
    })
  }

  createMarkerFromBusiness(business) {
    const latLng = { lat: business.lat, lng: business.lng }
    let marker = new google.maps.Marker({
      position: latLng,
      map: this.map
    })
    this.markers[business.id] = marker
  }
}
