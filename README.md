# Welcome to Welp!

![Logo](app/assets/images/readmelogo.png)

[Welp](https://welp0.herokuapp.com/#/) is a fullstack clone of Yelp.com, a website that allows users to search for businesses in a specified location and leave ratings and reviews for those businesses.


# Technologies
#### Backend: Ruby on Rails
#### Frontend: React/Redux
#### Database: PostgreSQL
#### Third Party API: Google Maps JavsScript API
#### Image Hosting: Amazon S3
#### Design and Styling: HTML and CSS


# Key Features

### User Auth
- Users can signup for an account and login (or login as a demo user with the corresponding button)
- Errors are styled and do not persist

![UserAuth](app/assets/images/userauth_gif.gif)


### Create, Edit, and Delete Reviews
- Users must be logged in to be able to create, edit, or delete reviews
- Users can see all reviews but are only able to edit and delete their own reviews
- Rating a business will accordingly affect the business' rating on the index and show pages

![Reviews](app/assets/images/crud_gif.gif)


### Business Index, Search Bar, and Map
- Users can search for businesses based on their name, category, or price
- Shows a list of businesses based on filters or a search query, if specified, with their basic information and their locations on a map

![BusinessIndex](app/assets/images/busindex_gif.gif)

The left-side price filters initially posed a bit of a challenge as each time a new price filter was clicked, new markers to keep getting added to the map, leading to too many  markers and duplicate numbers, so I had to figure out a way to remove the previous filters' markers upon the user clicking a new filter.
```js
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
 ```


# Bonus Features
- Add feature for reacting to a review ('helpful', 'funny', etc)
- Add a user show page to display all their reviews
