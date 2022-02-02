# Welcome to Welp!

[Welp](https://welp0.herokuapp.com/#/) is a fullstack clone of Yelp.com, a website that allows users to search for businesses in a specified location and leave ratings and reviews for those businesses.

# Key Features

### User Auth
- Users can signup for an account and login (or login as a demo user with the corresponding button)
- Errors are styled and do not persist

### Create, Edit, and Delete Reviews
- Users must be logged in to be able to create, edit, or delete reviews
- Users can see all reviews but are only able to edit and delete their own reviews
- Editing a review prefills with their previous rating and review body
- Error handling to show rating and review must be provided for a valid submission

## Business Index 
- Shows a list of businesses with their average rating, number of reviews, category, a sample review, a link to their show page, and their locations on a map

## Business Show
- Shows the business's information including their:
  - Name
  - Rating
  - Number of reviews
  - Average price
  - Category
  - Hours
  - Website, with a clickable link
  - Address, with a clickable Google Maps link
  - Image showing their location on Google Maps
  - Phone number
  - Reviews

## Search bar
- Users can search for businesses based on their name or category


# Wireframes


# Technologies
#### Backend
- Ruby on Rails
#### Frontend
- React/Redux
#### atabase
- PostgreSQL
#### Design and Styling
- HTML and CSS
#### Third Party API
- Google Maps JavsScript API
#### Image Hosting
- Amazon S3


# Bonus Features
- Add feature for reacting to a review ('helpful', 'funny', etc)
