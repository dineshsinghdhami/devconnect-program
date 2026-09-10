# DevConnect Program

This repository contains my practical tasks, projects, documentation, and final project completed as part of the DevConnect program.

## Progress

- [x] Knowledge Assessment — 97%
- [x] Task 1 — Accessible Conference Schedule
- [x] Task 2 — Personal Reading List
- [ ] Final Project
- [ ] Community Contributions
- [ ] Documentation
- [ ] Professional Practice

## Repository Structure

```
devconnect-program/
├── task-1-conference-schedule/
├── task-2-reading-list/
├── final-project/
├── docs/
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
- Fully keyboard-accessible navigation
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

## Run Task 1 Locally

Move into the Task 1 directory:

cd task-1-conference-schedule

Install dependencies:

npm install

Start the development server:

npm run dev

Open the local Vite URL shown in the terminal.

## Task 1 Structure

```
task-1-conference-schedule/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Schedule.jsx
│   │   ├── SessionCard.jsx
│   │   └── SessionDialog.jsx
│   ├── data/
│   │   └── sessions.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── README.md
├── package.json
└── vite.config.js
```

---

# Task 2 — Personal Reading List

A responsive reading list application built with React and Vite.

The application uses the Open Library API to search real books and allows users to save books to a personal reading list using browser localStorage.

## Live Demo

https://devconnect-reading-list.vercel.app

## Features

- Search real books using the Open Library API
- Display real book titles, authors, publication years, and covers
- Add books to a personal reading list
- Remove books from the reading list
- Saved books persist after page refresh using localStorage
- Responsive desktop and mobile layout
- Loading state
- Error state
- Empty state
- Reviewer controls for testing required application states
- Retry action for error state

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

The interface explains what the reading list is for and gives the user a clear action to start adding books.

These states can be tested directly from the interface without changing the source code.

## How to Use

1. Search for a book, author, or topic.
2. Browse the results returned by Open Library.
3. Click `Add to reading list`.
4. The selected book appears in the saved reading list.
5. Refresh the page to confirm that the book remains saved.
6. Click `Remove` to remove the book.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Open Library API
- localStorage

## Run Task 2 Locally

Move into the Task 2 directory:

cd task-2-reading-list

Install dependencies:

npm install

Start the development server:

npm run dev

Open the local Vite URL shown in the terminal.

## Task 2 Structure

```
task-2-reading-list/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── BookSearch.jsx
│   │   ├── ReadingList.jsx
│   │   ├── BookCard.jsx
│   │   └── StatePanel.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── README.md
├── package.json
└── vite.config.js
```

---

## Remaining Work

### Final Project

Build a project using a public dataset or API to make useful information easier to understand or explore.

### Community Contributions

Complete five substantive contributions to five different DevConnect members.

### Documentation

Create documentation covering important technical decisions, alternatives considered, trade-offs, and project setup.

### Professional Practice

Complete three merged pull requests that clearly explain what changed and why.

---

## Projects

| Project | Status | Live Demo |
|---|---|---|
| Accessible Conference Schedule | Completed | https://devconnect-conference-schedule.vercel.app |
| Personal Reading List | Completed | https://devconnect-reading-list.vercel.app |
| Final Project | Upcoming | — |

---

## Author

Dinesh Singh Dhami