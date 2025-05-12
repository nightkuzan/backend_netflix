<p align="center">
  <a href="#" target="blank"><img src="https://i.imgur.com/HrmRgm6.png" width="200" alt="Netflix Clone Logo" /></a>
</p>

<h1 align="center">Netflix Clone Backend</h1>

<p align="center">A robust backend application for a Netflix clone built with NestJS, featuring a clean architecture design with domain-driven development principles.</p>

## Table of Contents

1. [Installation](#installation)
2. [Architecture](#architecture)
   - [Domain Layer](#domain-layer)
   - [Application Layer](#application-layer)
   - [Infrastructure Layer](#infrastructure-layer)
3. [Features](#features)
4. [API Endpoints](#api-endpoints)
5. [Development](#development)

## Installation

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Setup

1. Clone the repository:

```bash
$ git clone https://github.com/nightkuzan/backend_netflix.git
$ cd netflix_web/backend_netflix
```

2. Install dependencies:

```bash
$ npm install
```

3. Configure environment variables:

```bash
# Create .env file
$ cp .env.example .env

# Edit the .env file with your configuration
$ nano .env
```

4. Start the development server:

```bash
$ npm run start:dev
```

The server should now be running on http://localhost:3001 (or the port specified in your .env file).

## Architecture

This project is built using a clean architecture approach with domain-driven design principles, consisting of three main layers:

### Domain Layer

The domain layer contains the core business logic and entities:

- **Entities**: Business objects like `Show` that represent the core data structures
- **Repositories**: Interfaces defining data access methods
- **Value Objects**: Immutable objects like `ShowType` (movie/series)

```
src/domain/
├── entities/
│   └── show.entity.ts
└── repositories/
    └── show.repository.ts
```

### Application Layer

The application layer coordinates application logic between the domain and infrastructure:

- **Modules**: NestJS modules that group related components
- **Services**: Application services implementing business logic
- **Controllers**: Handling HTTP requests and responses

```
src/application/
└── modules/
    └── show/
        ├── show.controller.ts
        ├── show.module.ts
        └── show.service.ts
```

### Infrastructure Layer

The infrastructure layer handles external concerns:

- **Repositories**: Concrete implementations of repository interfaces
- **Databases**: Database connections and configurations
- **External Services**: Third-party APIs and services
- **Mock Data**: Mock implementations for testing and development

```
src/infrastructure/
├── controllers/
├── database/
├── mocks/
├── modules/
├── repositories/
└── services/
```

## Features

### Content Management

- **Show Catalog**: Browse and search for movies and TV shows
- **Content Filtering**: Filter content by type (movie/series), genre, and more
- **Content Details**: View detailed information about shows including cast, ratings, etc.

### Mock Data Support

- **Mock Repository Pattern**: Easily switch between real and mock data sources
- **Mock Data Generation**: Generate realistic mock data for development and testing
- **Static Factory Methods**: Create show instances with specific attributes

### Multi-language Support

- **Content Translations**: Support for content titles and descriptions in multiple languages
- **Genre Translations**: Translation support for genres

### API Features

- **RESTful API**: Standard REST API for all operations
- **Filtering & Sorting**: Advanced filtering and sorting options
- **Pagination**: Support for paginated results

## API Endpoints

### Shows

```
GET /api/shows              # Get all shows
GET /api/shows/:id          # Get a show by ID
```

## License

This project is [MIT licensed](LICENSE).
