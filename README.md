`#react` `#express` `#typescript` `#postgres` `#prisma` `#cloudinary` `#backend` `#assembler-institute-of-technology` `#master-in-software-engineering`

## Movie Tacker 🎬

Welcome to the Movie Tracker, an application to keet track of the movies you are watching and allows users to create, read, update, and delete movies. The project is designed to focuses on both frontend and backend development, with the frontend built using: React and the backend employing Node.js, Express, MongoDB, Prisma, PostgreSQL, Auth0.

## Table of Contents

- [📋 Project Description](#-project-description)
- [📋 Objective](#-objective)
- [📋 Features](#-features)
- [📋 Requirements](#-requirements)
- [📋 Learnings](#-learnings)
- [📋 Installation](#-installation)
    - [Server](#-server)
- [📋 Usage](#-usage)
- [📋 Folder Architecture](#-project-architecture)
- [🗄️ Data Model](#-data-model)
   - [👤 Users](#-users)
   - [🎬 Movies](#-movies)
   - [🏷️ Genres](#-genres)
- [🔗 Functionalities](#-functionalities)
    - [CRUD](#-crud)
    - [MVC Folder Architerure](#-mvc-folder-architecture)
    - [Mongoose Implementation](#-mongoose-implementation)
    - [Route Protection](#-route-protection)
    - [Multi-cliente prisma Implementation](#-multiclient-prisma-implementation)
    - [Use of types](#-use-of-types)
    - [Environment Variables](#-environment-variables)
- [🔐 Challenges](#-challenges)
- [👩‍🎓👨‍🎓 Conclusion](#-conclusion) 
- [ℹ️ Support Resources](#support-resources)


## 📋 Project Description

MovieHub is an application that allows you to manage a list of movies. Each movie in the application has a name, a poster, a score, and a genre. You will be able to perform CRUD (Create, Read, Update, Delete) operations on these movies.

The frontend of the application is built with React. In the user interface, you will be able to view all added movies in a list. Each movie will be displayed with its name, poster, score, and genre. There will be an option to add new movies through a modal or a new page, where you can enter the movie's name, upload a poster image, assign a score, and select a genre. You will also have the option to update the data of existing movies or remove them from the list.

## 📋Objective
- 🚀 Phase 1: Backend with Express, TypeScript, and Node.js
- 🏗️ Phase 2: MVC Structure and MongoDB with Mongoose
- 🔄 Phase 3: Refactoring with Prisma
- 🔧 Phase 4: Data Model Migration to PostgreSQL and Multi-client Prisma Support
-  ☁️ Phase 5: Auth-0

## 📋Features
- Create, Read, Update, and Delete (CRUD) operations for movies.
- User authentication and authorization.
- Multi-database support (MongoDB and PostgreSQL).
- Integration with Auth0 for secure user management.

## 📋Requirements

### Backend
- CRUD of movies
- MVC folder architecture
- Mongoose implementation
- Route protection
- Multi-Client Prisma implementation
- Proper use of types
- Documentation(README)
- Environment variables (.env) implementation

## Learnings
- Express.js, TypeScript, and Node.js for backend development.
- MongoDB and Mongoose for the initial database setup.
- Prisma for ORM and database migration.
- PostgreSQL for data model migration.
- Auth0 for user authentication.
- MVC (Model-View-Controller) design pattern.

## Installation

### Server
1. Install dependencies: `npm install`
2. Configure backend environment variables.
3. Run the development server: `npm run dev`

## Usage
Access the application at `http://localhost:your_port`.

## 📋Folder Architecture
The frontend follows a modular folder architecture for better organization and scalability. Each component and feature is structured within the designated folders, ensuring a clean and maintainable codebase.

## 🗄 Data Model
In this project, we will mainly work with three collections or entities: `Users`, `Movies`, and `Genres`. Below, the structure of each of these entities is detailed.

### 👤 Users
The `Users` collection stores information about the application users. Each user has the following fields:

- `id`: A unique identifier for the user.
- `name`: The user's name.
- `email`: The user's email address.
- `password`: The user's password, securely stored.
- `movies`: A list of movies that the user has added to their list.

### 🎬 Movies
The `Movies` collection stores information about the movies that users have added to their list. Each movie has the following fields:

- `id`: A unique identifier for the movie.
- `name`: The movie's name.
- `poster_image`: The URL of the movie poster image, stored in Cloudinary.
- `score`: The movie's score, assigned by the user when adding the movie to their list.
- `genre`: The movie's genre, stored as a reference to the corresponding genre document.

### 🏷️ Genres
The `Genres` collection stores the different movie genres that users can select when adding a movie to their list. Each genre has the following fields:

- `id`: A unique identifier for the genre.
- `name`: The genre's name.

These are the basic data models that we will use in this project. As you progress in the project, you may find the need to add more fields or entities to support new functionalities. Remember, the goal is to learn and practice, so feel free to experiment and make changes as needed.

## Functionalities
### CRUD of Movies
The backend supports CRUD operations for managing movies. Users can create, read, update, and delete movie entries, providing a comprehensive set of functionalities for movie management.

### MVC Folder Architecture
The backend follows the Model-View-Controller (MVC) architecture for clear separation of concerns. Models handle data logic, views manage user interfaces, and controllers oversee the flow of of data between models and views.

### Mongoose Implementation
MongoDB is integrated using Mongoose to interact with the database. This provides a scalable and flexible solution for handling movie data.

### Route Protection
Certain routes are protected to ensure that only authenticated and authorized users can access and modify movie data. This adds an extra layer of security to the application.

### Multi-Client Prisma Implementation
Prisma is employed as the database toolkit, supporting multiple clients for various database types. This allows for seamless integration with both MongoDB and PostgreSQL, catering to different use cases and preferences.

### Proper Use of Types
TypeScript is utilized in the backend code to enforce type safety, reducing the likelihood of runtime errors and improving overall code quality.

### Environment Variables (.env) Implementation
Sensitive information and configuration settings are stored in environment variables (.env) to enhance security and maintain flexibility across different deployment environments.

## 🔐Challenges
During all the project I suffered differents challenges (not just a technique level also personal), here attach a list of them:
* Vision: During the project I felt that I haven't the global vision of all the steps to do. In many states of the projects I felt that I didn't know that I had to do or how to start or how to connect diferent sections to print information on the main display. Also, learn React, Tailwind..all the architecture and how it works has been to much to work in a period of less a month.

* Practice: It's a challenge to be able to do a project that includes different concepts like HTML, CSS, TS, REACT with only a few weeks of videos, quiz and just ONE pill. Because I understand all the concepts (or almost all), but I stayed blocked before to start writing code or I have to much respect to made errors or I tried but I am not be able to understand the message of console and it's frustated.

* Sintaxy error: During the project I made a lot of sintaxy error in typescript. I realized that there are a lot of bugs, undefined, null that at the first time when I was writing the code I even thought it, this is why sometimes I felt sofocated because I was not able to understand where the problem was or why was not working. In this case I'd like to thank you to my collagues for all the help, calls, advice and supported all the project.

* Request API with Typescript (and structure async): Use the structure of API (fetch) with Tyscript and async was a really challenge, because it was difficult with fetch structure simple but all together was sp difficul. Althought the most challenged part was implement all the components, functions, hooks.. in one site without a error.

## 👩‍🎓👨‍🎓 Conclusion
Movie Tracker is an exciting and  really tought project, multi-repo project that provides a hands-on experience with various backend technologies and review again front-end tecnologies that we have learnet on Assembler. 

## 📚Support Resources
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Cloudinary](https://cloudinary.com/)
- [express-fileupload](https://www.npmjs.com/package/express-fileupload)
- [fs-extra](https://www.npmjs.com/package/fs-extra)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Auth0](https://auth0.com/)
- [express-oauth2-jwt-bearer](https://www.npmjs.com/package/express-oauth2-jwt-bearer)
- [Auth0 React SDK](https://auth0.com/docs/quickstart/spa/react)