# ACME Startup Invoicing Backend

This is the backend API for the ACME Invoicing application, built using NestJS and PostgreSQL.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [PostgreSQL](https://www.postgresql.org/)

## Getting Started
Clone the repository:

  ```bash
   git clone https://github.com/thisishaykins/acme-startup-backend-app.git

   cd acme-startup-backend-app

   npm install 
  ```

## Project Structure
The project follows the standard NestJS project structure:
```
acme-startup-backend-app/
├── src/
|   ├── invoice/
|   |   ├── dto/
|   |   |   ├── create-invoice.dto.ts
|   |   |   ├── invoice-detail.dto.ts
|   |   |   ├── update-invoice.dto.ts
|   |   ├── entities/
|   |   |   ├── invoice.entity.ts
|   |   |   ├── invoice-detail.entity.ts
|   |   ├── invoice.controller.ts
|   |   ├── invoice.service.ts
|   |   ├── invoice.module.ts
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts

```
- invoices/: Contains the entities, DTOs, controller, service, and module related to invoices.
- app.module.ts: Main module where other modules are imported.
- app.controller.ts: Main controller where main app controller activities.
- app.service.ts: Main service where main app service activities.
- main.ts: Entry point of the application.



## Configuration
Change and update environment variables

```bash
# copy to .env
$ cp .env.sample .env

# update .env
$ vim .env
```

## Database Setup

1. Create a PostgreSQL database named acme_invoicing.
2. Update the database connection details in the .env file. 

Update DB config in the .env below

```bash
DB_HOST=""
DB_PORT=
DB_USERNAME=""
DB_PASSWORD=""
DB_DATABASE=""
```


## Installation

```bash
$ npm install
```

## Running the Application

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Endpoints
```
Documentation: http://127.0.0.1:3000/api
APP_URL: http://127.0.0.1:3000/

- POST APP_URL/invoices: Create a new invoice.
- GET APP_URL/invoices: Get a list of all invoices.
- PUT APP_URL/invoices/id: Patch an existing invoice.
- GET APP_URL/invoices/id: Get a single invoice.
- DEL APP_URL/invoices/id: Delete a single invoice.
```

## Contributing

Feel free to contribute to this project. Open an issue or submit a pull request, please reach out [akinsholasamuel@gmail.com](mailto:akinsholasamuel@gmail.com).

## Stay in touch

- Author - [Akinshola Samuel AKINDE](https://linkedin.com/in/akinshola)
- Website - [https://akinshola.com](https://akinshola.com/)
- Twitter - [@thisishaykins](https://twitter.com/thisishaykins)
- GitHub - [@thisishaykins](https://github.com/thisishaykins)

## License

This project is licensed under the [MIT licensed](LICENSE).
