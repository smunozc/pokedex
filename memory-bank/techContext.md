# Tech Context

## Technologies
- **Framework**: Angular v19
- **Language**: TypeScript
- **Styling**: 
  - SCSS (Sass) for global styles and component specifics.
  - **Tailwind CSS**: Used via CDN for utility-first styling (currently in `index.html`).
- **Fonts**: Kanit (Google Fonts) for UI typography.
- **Assets**: SVG Icons for Pokemon Types (`src/assets/types/`) - sourced from `duiker101/pokemon-type-svg-icons`.
- **State Management**: RxJS (BehaviorSubjects in Services)
- **Routing**: Angular Router
- **HTTP Client**: Angular HttpClient
- **Build Tool**: Angular CLI

## Development Setup
- **Node.js**: Required for development environment.
- **npm**: Package manager.
- **IDE**: Visual Studio Code (recommended).

## Technical Constraints
- **API**: Relies on external [PokeAPI](https://pokeapi.co/api/v2). API availability and rate limits may affect the application.
- **Browser Support**: Targeting modern browsers supported by Angular.
- **Tailwind CDN**: Currently using CDN which is not optimal for production performance/purging. Future consideration to move to build-time integration.
- **SVGs**: Type icons are white SVGs designed to be displayed on colored backgrounds (Energy Symbol style).

## Dependencies
- `@angular/animations`: For UI transitions.
- `@angular/material`: Material Design components.
- `rxjs`: For reactive programming.
- `zone.js`: Angular change detection.

## Project Structure
- `src/app/models`: Strongly typed interfaces for API responses.
- `src/app/components`: Reusable UI components.
- `src/app/containers`: Smart components/pages.
- `src/app/services`: Data fetching and state logic.
