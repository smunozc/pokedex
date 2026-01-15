# Tech Context

## Technologies
- **Framework**: Angular v19
- **Language**: TypeScript
- **Styling**: SCSS (Sass)
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
