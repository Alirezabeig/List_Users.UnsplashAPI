# List Users and Users' photos - Unsplash API.
This app uses Unsplash. com API to pull its users based on search keywords and then presents their photos.

Structure:
  App.js
    components
      Search.js (The search Input)
      UserList.js (Pulls the list of users based on the keywords)
      Detail.js (Shows all the photos of a selected user )
      FullScreen.js ( Presents a specific photo in full-screen )

Framework:
  Expo - React Native - Redux library

Featurs:
  StackNavigation is used to enable navigation between the screens
  Unsplash user-list API is used to list users based on search keywords
  Unsplash API is used to pull users photos based on users' name search
  StyleSheet Component is used to design the app
  Empty input in search will result in a message to ask the user to enter another keyworkd
  Not found input in search will result in a message to ask the user to enter another keyworkd
  Lack of photos in any any user's profile will result in an Alert.

Start:
  In order to start the project:
    1. clone the project
    2. Insert your accessKey and secretKey in UserList.js
    3. Open terminal and go to the project directory
    4. Type: $ npm install  $ expo start

    
Missing Something? Something is not working?
  Open a GitHub issue, or
  Send a pull request :D
  Make sure npm run lint passed

Future Improvement
  Add unit tests
  Add swiping left or right to go through users' images
