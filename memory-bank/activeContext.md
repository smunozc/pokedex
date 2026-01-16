# Active Context

## Current Focus
Centering the Pokemon card layout.

## Recent Changes
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
- Verify visual appearance across different themes (light/dark).
- Continue with other UI refinements (e.g., search bar, list view).
- Ensure Tailwind CDN performance is acceptable.

## Active Decisions
- **Icon Strategy**: Using local SVGs for Type icons to ensure quality and authenticity, styled as "Energy Symbols" (white icon on colored background).
- **Styling Strategy**: Adopted Tailwind CSS (via CDN) for rapid UI development and custom trading card look, alongside existing Angular Material/SCSS.
- **Font Choice**: Added 'Kanit' font for a more stylized, game-like appearance.
- **Documentation**: Maintaining strict Memory Bank updates.

## Project Insights
- **Automated Testing**: Encountered challenges with search bar interaction using coordinate-based clicks. The visual center of the search bar (around 400px vertically) seems to be the correct target, but precise focus handling is critical.
- **Layout Centering**: Using `flex justify-center` on the container of the absolute-positioned Pokemon card proved effective for centering it, leveraging the behavior where flex alignment affects the static position of absolute children.
