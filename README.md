# DevConnect Program

This repository contains my practical tasks, projects, documentation, and final project completed as part of the DevConnect program.

## Progress

- [x] Knowledge Assessment — 97%
- [x] Task 1 — Accessible Conference Schedule
- [ ] Task 2 — Personal Reading List
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

## Upcoming Work

### Task 2 — Personal Reading List

A state and data task demonstrating:

- loading state
- error state
- empty state
- adding and removing entries
- API or persistent storage integration

### Final Project

A project using a public dataset or API to make useful information easier to understand or explore.

### Community Contributions

Five substantive contributions to other DevConnect members.

### Documentation

Documentation covering important technical decisions, alternatives considered, trade-offs, and project setup.

### Professional Practice

Three merged pull requests showing what changed and why.

---

## Author

Dinesh Singh Dhami