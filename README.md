# PostgreSQL
I Created a todo-list project with postgre sql as database and used npm package pg to write native sql queries 
# To-Do List Project

## Overview
This is a simple To-Do List application that uses PostgreSQL as its database. The project is built using Node.js and utilizes the `pg` package to interact with PostgreSQL by writing native SQL queries in JavaScript.

## Features
- Add new tasks to the to-do list
- Retrieve all tasks from the database
- Update task status (e.g., completed or pending)
- Delete tasks from the list

## Technologies Used
- **Node.js** - JavaScript runtime for server-side development
- **PostgreSQL** - Relational database management system
- **pg (node-postgres)** - NPM package for interacting with PostgreSQL

## Installation

### Prerequisites
- Ensure you have **Node.js** installed
- Install **PostgreSQL** and create a database

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/todo-list.git
   cd todo-list
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and configure your database connection:
   ```env
   DATABASE_URL=postgres://username:password@localhost:5432/todo_db
   ```

4. Initialize the database:
   ```sh
   node db/setup.js
   ```

5. Start the application:
   ```sh
   node server.js
   ```

## Usage
- Send API requests to manage tasks.
- Example endpoints (if using Express.js):
  - `GET /tasks` - Retrieve all tasks
  - `POST /tasks` - Add a new task
  - `PUT /tasks/:id` - Update a task
  - `DELETE /tasks/:id` - Remove a task

## Learning Outcomes
- Gained experience in working with PostgreSQL
- Learned how to use the `pg` package to execute native SQL queries in JavaScript
- Understood the process of integrating a database with a Node.js application

## Future Enhancements
- Implement authentication and user management
- Add a front-end interface (React/Vue/Angular)
- Improve error handling and logging

## License
This project is licensed under the MIT License.

## Author
[Your Name]


