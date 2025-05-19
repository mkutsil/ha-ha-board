# HaHABoard

HaHaBoard is a modern web application built with React and Vite. The project leverages a range of tools and libraries for state management, routing, styling, and code quality.

👉 **Live demo**: [https://ha-ha-board.netlify.app/](https://ha-ha-board.netlify.app/)

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: You need Node.js version 20 or higher. You can download it from [Node.js official website](https://nodejs.org/).
- **npm**: This project uses npm as the package manager.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mkutsil/ha-ha-board.git
   cd ha-ha-board
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Scripts

The following scripts are available in this project:

- **Start the development server**:
  ```sh
  npm run dev
  ```
- **Build the project**:
  ```sh
  npm run build:prod
  ```
- **Run TypeScript linting**:
  ```sh
  npm run lint
  ```
- **Fix TypeScript linting errors**:
  ```sh
  npm run lint:fix
  ```

## Project Structure

The project follows a modular structure:

```
ha-ha-board/
├── .husky/               # Husky configuration files
├── node_modules/          # Installed dependencies
├── public/                # Public assets
├── src/                   # Source code
│   ├── app/               # Application-level components
│   ├── entities/          # Business entities
│   ├── features/          # Application features
│   ├── pages/             # Pages of the application
│   ├── shared/            # Shared utilities, hooks, and components
│   ├── widgets/           # UI widgets
│   ├── main.tsx          # Entry point
├── .gitignore             # Git ignore file
├── eslint.config.mjs      # ESLint configuration
├── package-lock.json      # npm lock file
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts      # Vite configuration
```

## Technologies Used

This project is built using the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A module bundler for modern JavaScript applications.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Redux Toolkit**: For state management.
- **React Router**: For routing.
- **MUI**: Material-UI for React components.
- **ESLint**: For code quality standards.
