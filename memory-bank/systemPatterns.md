# System Patterns

## Architecture
The application follows a standard Angular component-based architecture, utilizing **Standalone Components**.

### Key Patterns

1. **Container/Presentational Components**:
   - **Containers**: Responsible for fetching data and managing state (e.g., `HomeComponent`). They pass data down to child components.
   - **Components**: Purely presentational, receiving data via `@Input` and emitting events via `@Output` (e.g., `PokemonCardComponent`, `SearchBarComponent`, `MenuComponent`).

2. **Service-Based State Management**:
   - Services like `PokeApiService` hold the state (e.g., `pokemon` BehaviorSubject) and provide methods to update it.
   - Components subscribe to these observables to react to state changes.

3. **Reactive Programming**:
   - Heavy use of **RxJS** (Observables, Subjects, Operators) for handling asynchronous data streams (API calls, user input).

4. **Modular Design**:
   - Models are organized by domain (berries, contests, encounters, games, items, locations, machines, moves, pokemon) in `src/app/models/`.
   - Feature-based directory structure (components, containers, services).

## Component Relationships
- `AppComponent` is the root.
- `HomeComponent` acts as the main page container.
- `SearchBarComponent` allows user input to trigger searches.
- `PokemonCardComponent` displays individual Pokemon data.

## Design Decisions
- **Angular Animations**: Used for UI transitions (e.g., search bar movement).
- **Responsive Design**: HostListeners and conditional styling used to adapt to screen sizes.
