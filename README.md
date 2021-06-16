# Instructions

The project folder contains two folders, `br` for the Backend and `fr` for the Frontend. Each folder is a standalone application but the Frontend depends on the Backend API.

The Backend application uses a `postgres` database which you can install and input the credentials in the `.env` file of the Backend folder.

Additionaly, the `.env.sample` file shows you the structure of the `.env` file and the data that is needed in each folder.

## To run manually

### Backend

To manually run the project, follow these steps:

- `cd` into the `br` folder.

- `npm install` to install the all the Backend dependencies.

- `npm install knex -g` to install Knex CLI globally.

- `npx knex migrate:latest` to migrate the database if configured successfully.

- `npx knex seed:run` to seed some fake data to work with.

- `npm test` if everything is configured successfully, all the test should pass.

- `npm run start` to start the server for the Frontend to consume.

### Frontend

The Frontend is build with `create-react-app` boilerplate so more instructions can be in the `fr/README.md` file.

- `cd` in the `fr` folder.

- Make sure to input the correct `.env` file information using the `.env.sample` to understand the structure.

- `npm install` to install all the dependencies.

- `npm start` to start the development server.

## To run with Docker (Recommended)

Set up and install Docker and Docker compose

- `cd` into the `Test` folder.

- Type `docker compose up` to deploy the project.

- Or `docker-compose up` to use Docker Compose directly.

- The application will be served at `http://localhost:3000/`

If everything is properly configured, you should be presented with a fullstack GraphQL application.

If there is any question, I will be available to discuss it in details.
