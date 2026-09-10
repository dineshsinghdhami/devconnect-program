# DevConnect Conference Schedule

A responsive and accessible single-page conference schedule built with React and Vite.

The project displays a two-day conference with three parallel tracks:

- Frontend
- Backend
- AI & ML

Users can switch between conference days and open individual session details using either a mouse or keyboard.

## Features

- Two-day conference schedule
- Three parallel session tracks
- Responsive layout
- Keyboard-accessible navigation
- Visible focus indicators
- Accessible session details dialog
- Escape key support for closing dialogs
- Focus returns to the original session button after closing
- Arrow-key navigation between conference day tabs
- Mobile layout designed for narrow screens
- No horizontal scrolling at 320px

## Accessibility

The interface is designed to be fully usable without a mouse.

Keyboard interactions include:

- `Tab` to move through interactive elements
- `Enter` or `Space` to activate buttons
- `Arrow Right` and `Arrow Left` to switch between conference days
- `Home` to move to the first conference day
- `End` to move to the last conference day
- `Escape` to close the session details dialog

Interactive elements include visible focus indicators so keyboard users can see which element is currently active.

## Narrow Screen Layout Decision

On desktop screens, the three conference tracks are displayed side by side.

This layout does not work well on narrow mobile screens because placing three columns next to each other would make the content too compressed and could introduce horizontal scrolling.

For screens below 900px, the layout changes from three columns to a single-column structure.

Instead of displaying:

Frontend | Backend | AI & ML

the mobile layout displays:

Frontend
Sessions

Backend
Sessions

AI & ML
Sessions

This keeps each session card readable and allows users to scroll vertically through the tracks without horizontal scrolling.

The layout has been tested at 320px viewport width.

## Technologies Used

- React
- Vite
- JavaScript
- CSS

## Project Structure

```
devconnect-conference-schedule/
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
├── README.md
├── package.json
└── vite.config.js
```

## Accessibility Testing

A reviewer can verify the accessibility behavior without changing the source code.

### Keyboard Navigation

- Use `Tab` to move through interactive elements.
- Use `Enter` or `Space` to activate buttons.
- Use `Arrow Left` and `Arrow Right` to switch between conference days.
- Use `Home` to move to the first conference day.
- Use `End` to move to the last conference day.

### Session Dialog

- Open any session using the keyboard or mouse.
- Press `Escape` to close the dialog.
- After closing, focus returns to the same session button that opened it.

### Focus Indicators

Interactive elements include visible focus indicators so keyboard users can see which element is currently active.

### Responsive Layout

The layout has been tested at a viewport width of 320px.

At small screen sizes:

- Conference tracks stack vertically.
- Content remains readable.
- The page does not require horizontal scrolling.

## Author

Dinesh Singh Dhami