# Active Context

## Current Focus
Enhancing Search Bar functionality with autocomplete hints.

## Recent Changes
- **Card Hiding Interaction**:
  - Implemented logic to hide the Pokemon card with a reverse animation when the search is cleared.
  - Connected the `SearchBarComponent`'s clear action to emit a clear signal.
  - Updated `HomeComponent` to manage visibility state locally (`showCard`) rather than clearing the data in `PokeApiService`, ensuring the card details persist during the hide animation.
- **Search Bar Enhancements**:
  - Implemented autocomplete functionality using `MatAutocomplete`.
  - Added "Hint" feature displaying Pokemon names when typing 3+ characters.
  - **Styled Hint Panel**: Customized the autocomplete panel to appear as a seamless extension ("coming out of it") of the search bar. The design maintains the search bar as the primary glowing element with rounded corners, while the panel tucks visually behind it (using `z-index` and matching top curvature) without its own glow or border, creating a clean "drop-down" effect.
  - Refactored `PokeApiService` to efficiently cache the full list of Pokemon names (`NamedAPIResource[]`) in `localStorage`.
  - Created `NamedAPIResource` model to type the lightweight list items.
- **Pokemon Card Enhancements**:
  - Integrated authentic Pokemon Type SVG icons (downloaded and verified safe).
  - Updated card layout to match official Trading Card Game style ("Energy Symbol" icons).
  - Implemented Dark Mode support for the card component.
  - Added visibility fix for white SVGs by wrapping them in colored containers.
- **Pokemon Card Redesign**:
  - Rewrote template using Tailwind CSS (via CDN).
  - Added 'Kanit' font.
  - Implemented dynamic border color, framed image, info strip, ability list.
- **Previous Styling Updates**:
  - Styled `PokemonCardComponent` to match Pokemon types with dynamic colors.
- **Documentation**:
  - Initialized Memory Bank.
  - Merged model fixes.

## Next Steps
- Implement logging rule for Cline tasks.
- Verify visual appearance across different themes (light/dark).
- Ensure Tailwind CDN performance is acceptable.

## Active Decisions
- **Search Bar Styling**: Using `matAutocompleteOrigin` attached to the outer container ensures the dropdown matches the full visual width of the bar, not just the input. A negative margin strategy is used to merge the panel with the bar visually, hiding borders and creating a unified shape.
- **Data Caching**: Caching the full list of Pokemon names (`NamedAPIResource[]`) in `localStorage` to minimize API requests and enable instant client-side filtering for search hints.
- **Icon Strategy**: Using local SVGs for Type icons to ensure quality and authenticity, styled as "Energy Symbols" (white icon on colored background).
- **Styling Strategy**: Adopted Tailwind CSS (via CDN) for rapid UI development and custom trading card look, alongside existing Angular Material/SCSS.
- **Font Choice**: Added 'Kanit' font for a more stylized, game-like appearance.
- **Documentation**: Maintaining strict Memory Bank updates.

## Project Insights
- **API Optimization**: The PokeAPI list endpoint returns a paginated structure `{ results: ... }`. Casting it directly to `Pokemon[]` was incorrect and inefficient. Extracting the lightweight `results` array allows for performant client-side searching.
- **Automated Testing**: Encountered challenges with search bar interaction using coordinate-based clicks. The visual center of the search bar (around 400px vertically) seems to be the correct target, but precise focus handling is critical.
- **Layout Centering**: Using `flex justify-center` on the container of the absolute-positioned Pokemon card proved effective for centering it, leveraging the behavior where flex alignment affects the static position of absolute children.
