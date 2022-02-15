export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    Object.keys(this.markers).forEach(markerKey => {
      this.markers[markerKey].setMap(null)
      delete this.markers[markerKey]
    })
    
    businesses.forEach(business => {
      if (!this.markers[business.id]) {
        let index = businesses.indexOf(business) + 1
        this.createMarkerFromBusiness(business, index)
      }
    })
  }
   
  createMarkerFromBusiness(business, index) {
    const latLng = { lat: parseFloat(business.lat), lng: parseFloat(business.lng) }

    let marker = new google.maps.Marker({
      position: latLng,
      label: {text: index.toString(), color: 'white'},
      map: this.map
    })
    
    this.markers[business.id] = marker
    this.markers[business.id].setMap(this.map)

    const content = '<div id="map-info-container">' + 
                      '<div id="map-info-pic-container">' +
                        '<img id="map-info-pic" src=' +
                          business.photo_urls[0] +
                        '/>' + 
                        '<div id="map-info-title">' +
                          business.name +
                        '<div/>' + 
                        '<div id="map-info-category">' +
                          business.category +
                        '<div/>'
                      '<div/>'
                    '</div>'


    const infowindow = new google.maps.InfoWindow({
      content: content,
    });


    marker.addListener('mouseover', function () {
      infowindow.open(this.map, marker);
    });

    marker.addListener('mouseout', function () {
      infowindow.close(this.map, marker);
    });
  }
}
