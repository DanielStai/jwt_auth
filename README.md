## Authentication in an Express app

- Implementing user authentication in an express app.

## Technologies used

- Authentication done using `jwt (json web token)`. Passwords are hashed using `bcrypt`. The API uses a MongoDB database.

## Endpoints

| URL     | METHOD | DESCRIPTION    |
| :---        |    :----:   |          ---: |
| api/users/     | POST  (public)  | register a user |
| api/users/login   | POST (public) | logs in a user |
| api/users/me     | GET (private) | gets the info of the logged in user |

## How to run

- Clone the repository on your local computer
- Do `npm run install` to install the required dependencies
- Set up your MongoDB collection
- Do `npm run dev` to start the API

Test the API with Postman
