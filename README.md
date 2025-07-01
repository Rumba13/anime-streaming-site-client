# Epic Anime Streaming Site

## Project Overview

Epic Anime is a modern web application for discovering, browsing, and watching anime. The project uses the [Jikan API](https://jikan.moe/) as its primary data source, providing up-to-date information about anime titles, genres, and more. Users can explore a rich anime library, view details, and enjoy a user-friendly interface designed for anime fans.

## Features

- Browse and search for anime titles using Jikan API
- Multilingual support (English & Russian)
- Genre-based navigation and filtering
- Responsive and modern UI/UX
- Theme switching (light/dark)
- Persistent user preferences (e.g., animation toggle)
- Modular and scalable architecture

## Technologies & Architecture

- **React 19** — Modern UI library for building interactive interfaces
- **TypeScript** — Static typing for safer and more maintainable code
- **MobX** — State management for predictable and reactive data flow
- **InversifyJS** — Dependency injection for scalable and testable architecture
- **Emotion** — CSS-in-JS for flexible and dynamic styling
- **Vite** — Fast build tool and development server
- **i18next** — Internationalization and localization
- **Feature-Sliced Design** — Modular project structure for scalability and maintainability
- **Jikan API** — Open-source REST API for anime data

### Project Structure

- `src/app` — Application entry, providers, and global configuration
- `src/pages` — Page-level components (e.g., Home, Not Found)
- `src/features` — Isolated features (e.g., search, language selector)
- `src/shared` — Shared UI components, types, models, and services
- `src/assets` — Static assets (images, fonts, icons)

### Architecture Highlights

- **Feature-Sliced Design**: The codebase is organized by features, pages, and shared modules, making it easy to scale and maintain.
- **Dependency Injection**: InversifyJS is used for managing dependencies and stores, improving testability and modularity.
- **State Management**: MobX provides a reactive and efficient way to manage application state.
- **Styling**: Emotion enables dynamic, theme-aware, and maintainable styles.
- **Internationalization**: i18next allows seamless language switching and localization.

