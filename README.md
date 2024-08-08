# Movie and TV Show App
### Summary

This is a React Native application that allows users to browse through a list of movies and TV shows fetched from the **Movie Database (TMDb) API**. Users can view details of each movie by tapping on an item in the list. The app uses React Navigation for seamless navigation between screens.
### Technologies Used
-   **React Native**: A framework for building native apps using React.
-   **React Navigation**: Used for navigating between different screens.
-   **React Native Vector Icons**: For adding icons to the tab navigator.
-   **TMDb API**: The Movie Database API, used for fetching movies and TV shows data.
-   **Expo**: A framework and platform for universal React applications.

## API

This app uses the TMDb API to fetch data about movies and TV shows. You need an API key to access the TMDb API.

-   **Base URL**: `https://api.themoviedb.org/3`
-   **API Key**: You can get an API key by creating an account on the TMDb website.

## App Setup

Follow these steps to set up and run the app locally:

### Prerequisites

-   Node.js
-   npm or yarn
-   Expo CLI (if using Expo)

### Installation

1.  **Clone the repository:** 
    `git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name` 
    
2.  **Install dependencies:**
    
    `npm install`
    
3.  **Install additional packages:** 
    `npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
    npm install react-native-screens react-native-safe-area-context
    npm install react-native-vector-icons` 
    
    If you're using Expo, also run: 
    `expo install react-native-screens react-native-safe-area-   context @expo/vector-icons` 
    
4.  **Configure the TMDb API key:**
    
    In your `Movies.js` file (or wherever you're making the API call), replace the placeholder API key with your actual TMDb API key   
    `const auth_token = "YOUR_TMDB_API_KEY";` 
    

### Running the App

If you are using Expo, you can start the development server by running:
`expo start` 

If you are using React Native CLI, you can start the app by running:
`npm run android # for Android`                           
### Folder Structure

-   `App.js`: Entry point of the application.
-   `Movies.js`: Component for displaying the list of movies.
-   `TvShows.js`: Component for displaying the list of TV shows.
-   `MovieDetails.js`: Component for displaying the details of a selected movie.
-   `Item.js`: Component for rendering a single movie item.



