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
- Editing a review prefills with their previous rating and review body
- Errors will appear if either the rating or body aren't filled out

![Reviews](app/assets/images/crud_gif.gif)


### Business Index, Search Bar, and Map
- Users can search for businesses based on their name, category, or price
- Shows a list of businesses based on filters or a search query, if specified, with: 
  - business name 
  - average rating
  - number of reviews
  - category
  - price
  - sample review
  - link to their show page
  - businesses' locations on a map

![BusinessIndex](app/assets/images/busindex_gif.gif)


### Business Show
- Shows the business's information including:
  - business name
  - average rating
  - number of reviews
  - category
  - price
  - hours
  - website, with a clickable link that opens in a new tab
  - address, with a clickable Google Maps link that opens in a new tab
  - image showing their location on Google Maps
  - phone number
  - all reviews

![BusinessShow](app/assets/images/busshow_gif.gif)


# Bonus Features
- Add feature for reacting to a review ('helpful', 'funny', etc)
- Add a user show page to display all their reviews
