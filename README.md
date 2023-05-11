
# Express, MongoDB, Passport API boilerplate project
This repository serves as a starting point for building powerful and secure APIs using the popular stack of Express, MongoDB, and Passport. Whether you're a seasoned developer or just getting started, this boilerplate provides a solid foundation for quickly setting up and developing your own API projects.

Quick instructions for the TL;DR folks:

1. Go read the caveats at the bottom of the page
2.  Clone this repository to your local machine.
3.  Install the required dependencies using npm or yarn.
4.  Configure your MongoDB connection details and other environment variables in the .env file.
5.  All done. Happy developing :)


Key Features:

-   Express: Harness the flexibility and simplicity of Express.js, a fast and minimalist web application framework for Node.js, to handle routing and middleware.
-   MongoDB: Leverage the power of MongoDB, a robust NoSQL database, to efficiently store and manage your data.
-   Passport: Implement authentication and authorization seamlessly with Passport.js, a flexible and widely adopted authentication middleware for Node.js.




## Prerequisites

- Yarn or Npm but Yarn is preferred for better dependency handling
- MongoDB installed or MongoDB instance somewhere. You need the connection string to insert into the .env file

## Installation
Use the following command to install the required packages depending on your package manager:

Yarn:

    yarn
    
Npm:

    npm i
    
## Development

Yarn:

    yarn dev
    
Npm:

    npm run dev

## Routes
Implemented routes are PORT 3000 by default)

    POST /v1/auth/register
    POST /v1/auth/login
    GET /v1/auth/logout
    GET /v1/auth/profile

Example: localhost:3000/v1/auth/login

## Serve
To serve the application in a production mode you can use the following command depending on your package manager:

Yarn

    yarn start
    
Npm

    npm run start
Example: localhost:3000/v1/auth/login

## Caveats

- File changes restart the app which ends passport sessions you need to log back in after scripts changes. So it's recommended that you dont check authentication during active development atm. 
- No rendering engine included so you can only create APIs. You can add React, NextJS, EJS, Plug if you really know what you're doing.
