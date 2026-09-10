# Personal Reading List

A simple reading list application built for DevConnect Task 2.

The app lets users search real books using the Open Library API, save books to a personal reading list, and remove them later.

## Live Features

- Search real books from Open Library
- Add books to a personal reading list
- Remove books from the list
- Saved books stay after page refresh using localStorage
- Loading state
- Error state
- Empty state
- Reviewer controls to test all required states without changing code
- Responsive layout for desktop and mobile

## API

This project uses the Open Library Search API to fetch book data.

The app fetches information such as:

- Book title
- Author
- First published year
- Cover image

Book covers are also loaded from Open Library Covers.

## Persistent Storage

The reading list is saved in browser localStorage.

This means saved books stay available after refreshing the page on the same browser.

## Required States

### Loading State

Click the `Loading` button in the Reviewer Tools section.

The app will show a loading message before returning to the normal state.

### Error State

Click the `Error` button in the Reviewer Tools section.

The app will show an error message explaining that the reading list could not be loaded and provides a retry action.

### Empty State

Click the `Empty` button in the Reviewer Tools section.

The saved reading list is cleared and the app shows an empty-state message explaining what the reading list is for and how to add the first book.

These states can all be tested directly from the interface without changing the source code.

## How to Use

1. Search for a title, author, or topic.
2. Browse the books returned by Open Library.
3. Click `Add to reading list`.
4. The book will appear in the saved reading list.
5. Refresh the page to confirm it stays saved.
6. Click `Remove` to remove a saved book.

## Run Locally

Move into the project directory:

cd task-2-reading-list

Install dependencies:

npm install

Start the development server:

npm run dev

Open the local Vite URL shown in the terminal.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Open Library API
- localStorage

## Project Structure

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

## Author

Dinesh Singh Dhami