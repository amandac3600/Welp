export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    console.log(this.markers)
    businesses.forEach(business => {
      if (!this.markers[business.id]) {
        this.createMarkerFromBusiness(business)
      }
    })
  }

  createMarkerFromBusiness(business) {
    const latLng = { lat: parseFloat(business.lat), lng: parseFloat(business.lng) }
    // console.log(parseFloat(business.lat))
    let marker = new google.maps.Marker({
      position: latLng,
      label: {text: business.id.toString(), color: 'white'},
      map: this.map
    })
    this.markers[business.id] = marker
  }
}
