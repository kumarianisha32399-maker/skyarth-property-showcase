# Continue SKYARTH Genesis

## Goal
Continue from the existing `skyarth-genesis` implementation without redesigning or replacing its public website.

## Work
- Copy the existing repository source and image assets into this project while preserving its current SKYARTH styling, public pages, property data, galleries, forms, and navigation.
- Fix any existing compile or runtime issues found after import.
- Complete the frontend-only demo admin flow at `/admin/login` and `/admin/dashboard`, including session-only route protection and logout.
- Add the requested admin sections for dashboard statistics, properties, categories, projects, services, testimonials, enquiries, hero, about, Why SKYARTH, contact information, and website settings.
- Connect every admin editor to the repository’s existing shared React state so changes immediately appear on public pages during the current session.
- Support add, edit, delete, publish/enable/feature, status, pricing, location, descriptions, and mock image URL fields where required.
- Preserve the existing footer credit exactly: `Designed and development by SOSynch Ai Tech`.
- Add route-specific page metadata for public and admin pages without changing the visual direction.

## Validation
- Verify public navigation, property search/filter/sort, property and project galleries, enquiry success states, admin login/logout, protected admin access, and all management actions.
- Check desktop and mobile layouts for overflow or overlapping content.
- Confirm the preview builds without errors and key flows run without console errors.

## Technical details
- Keep the project’s TanStack Start routing bootstrap while using only React state, Vite, and Tailwind/CSS for application functionality.
- Use mock data only: no database, backend, API, real authentication, or additional application libraries.
- Keep all public and admin data in the existing shared `SkyarthProvider` for same-session updates.
