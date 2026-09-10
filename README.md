# DevConnect Program

This repository contains my practical tasks, documentation, pull-request work, and final project completed as part of the DevConnect program.

## Progress

- [x] Knowledge Assessment — 97%
- [x] Task 1 — Accessible Conference Schedule
- [x] Task 2 — Personal Reading List
- [x] Final Project — Atlas Country Explorer
- [ ] Community Contributions
- [x] Documentation
- [x] Professional Practice — 3 merged pull requests

## Repository Structure

```
devconnect-program/
├── task-1-conference-schedule/
├── task-2-reading-list/
├── final-project/
├── docs/
│   └── decisions/
└── README.md
```

---

# Task 1 — Accessible Conference Schedule

A responsive and keyboard-accessible two-day conference schedule built with React and Vite.

The application contains three parallel tracks:

- Frontend
- Backend
- AI & ML

Users can switch between conference days and open individual session details using either a mouse or keyboard.

## Live Demo

https://devconnect-conference-schedule.vercel.app

## Features

- Two-day conference schedule
- Three parallel tracks
- Responsive desktop and mobile layouts
- Keyboard-accessible navigation
- Visible focus indicators
- Accessible session details dialog
- Escape key support for closing dialogs
- Focus returns to the original session button after closing
- Arrow-key navigation between conference days
- No horizontal scrolling at 320px

## Keyboard Controls

- `Tab` — move through interactive elements
- `Enter` / `Space` — activate buttons
- `Arrow Right` — move to the next conference day
- `Arrow Left` — move to the previous conference day
- `Home` — move to the first conference day
- `End` — move to the last conference day
- `Escape` — close the session details dialog

## Responsive Layout Decision

On desktop screens, the three conference tracks are displayed side by side.

On smaller screens, the layout changes to a single-column structure so the tracks are displayed vertically.

This avoids horizontal scrolling and keeps session information readable on mobile devices.

The interface has been tested at a viewport width of 320px.

## Tech Stack

- React
- Vite
- JavaScript
- CSS

---

# Task 2 — Personal Reading List

A responsive reading list application built with React and Vite.

The application uses the Open Library API to search real books and allows users to save books to a personal reading list using browser `localStorage`.

## Live Demo

https://devconnect-reading-list.vercel.app

## Features

- Search real books using the Open Library API
- Display real book titles, authors, publication years, and covers
- Add books to a personal reading list
- Remove books from the reading list
- Saved books persist after page refresh
- Responsive desktop and mobile layout
- Loading state
- Error state
- Empty state
- Reviewer controls for testing required application states
- Retry action for the error state

## Data Source

Book data is fetched from the Open Library Search API.

Book covers are loaded using the Open Library Covers service.

The application does not use hardcoded book data.

## Persistent Storage

Saved books are stored using browser `localStorage`.

This means the reading list remains available after refreshing the page on the same browser.

## Required States

### Loading State

The loading state can be tested using the `Loading` button in the Reviewer Tools section.

### Error State

The error state can be tested using the `Error` button.

The interface explains that the reading list could not be loaded and provides a retry action.

### Empty State

The empty state can be tested using the `Empty` button.

The interface explains what the reading list is for and gives the user a clear first action.

## Tech Stack

```
- React
- Vite
- JavaScript
- CSS
- Open Library API
- localStorage
```

---

# Final Project — Atlas Country Explorer

Atlas Country Explorer is a responsive web application that makes country information easier to search, browse, and understand.

The project uses the REST Countries v5 API to load real country data.

Users can search countries, filter them by region, and open a country to view detailed information.

## Live Demo

https://devconnect-atlas-country-explorer.vercel.app/

## Features

- Browse countries
- Search countries by name
- Filter countries by region
- Real country flags
- Capital information
- Region and subregion
- Population
- Area
- Languages
- Currency information
- Country detail popup
- Loading state
- Error state with retry
- Empty search state
- Show-more functionality
- Responsive desktop, tablet, and mobile layout
- Keyboard-accessible country detail dialog
- Escape key support
- Focus restoration after closing the dialog

## Data Source

Country information is loaded from the REST Countries v5 API.

The application uses API data rather than hardcoded country information.

The application also handles missing values by displaying `Not available` instead of guessing information.

## Data Limitations

The project depends on information returned by an external API.

Because of this:

- Some values may change over time.
- Some countries may not contain every data field.
- Population and other changing statistics depend on the API's update schedule.
- API availability can affect the application.
- The application does not independently verify every value against national government sources.

## Application States

### Loading

A loading message is shown while country data is being requested.

### Error

If the API request fails, an error message is displayed with a `Try again` action.

### Empty

If no country matches the selected search or region, the application displays a clear empty state and allows the user to clear the filters.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- REST Countries v5 API

---

# Documentation

Technical decision records are stored in:

docs/decisions/

The documentation includes:

- `001-rest-countries-api.md`
- `002-country-detail-modal.md`
- `003-show-more-pagination.md`

These decision records explain:

- The decision that was made
- Alternatives considered
- Why the selected approach was chosen
- Downsides and trade-offs
- Awkward or difficult parts of the implementation

---

# Professional Practice

The final project was developed through separate branches and pull requests instead of making all changes directly on `main`.

## Merged Pull Requests

### PR #1 — Final Project Setup

Set up the Atlas Country Explorer project, API integration, and initial filtering functionality.

### PR #2 — Final Project UI

Improved the interface, responsive country cards, search and filters, country detail popup, and accessibility behavior.

### PR #3 — Documentation

Added the final project README and technical decision records.

This approach keeps changes separated, reviewable, and easier to understand.

---

# Community Contributions

Five substantive contributions to five different DevConnect members are still to be completed.

---

## Projects

| Project | Status | Live Demo |
|---|---|---|
| Accessible Conference Schedule | Completed | https://devconnect-conference-schedule.vercel.app |
| Personal Reading List | Completed | https://devconnect-reading-list.vercel.app |
| Atlas Country Explorer | Completed | https://devconnect-atlas-country-explorer.vercel.app/ |

---

## Author

**Dinesh Singh Dhami**

GitHub:
https://github.com/dineshsinghdhami

LinkedIn:
https://www.linkedin.com/in/dineshsinghdhami2/

Portfolio:
https://dineshsinghdhami.com.np/