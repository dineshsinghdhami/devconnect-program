# Atlas Country Explorer

Atlas Country Explorer is a responsive web application for exploring information about countries around the world.

The project was built using React and Vite and uses the REST Countries v5 API to load real country data.

Users can search countries, filter them by region, and open a country to view more detailed information such as its capital, population, area, languages, currency, and region.

## Features

- Browse countries from around the world
- Search countries by name
- Filter countries by region
- View real country flags
- View capital information
- View population
- View area
- View region and subregion
- View languages
- View currency information
- Country details popup
- Loading state
- Error state with retry action
- Empty search state
- Responsive desktop, tablet, and mobile layout
- Keyboard-accessible country details popup
- Escape key support for closing the popup
- Clicking outside the popup closes it
- Focus returns to the original country button after closing

## Live Demo

https://devconnect-atlas-country-explorer.vercel.app/

Reviewer note:

Use the search box and region filters to explore countries. Click `View country` to open the country detail dialog. The application also includes loading, error, and empty states for API and search behavior.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- REST Countries v5 API
- FlagCDN as a fallback for country flag images

## Data Source

Country information is loaded from the REST Countries v5 API.

The application requests country data such as:

- Country name
- Country codes
- Capital
- Region
- Subregion
- Population
- Area
- Languages
- Currencies
- Flag

The project uses API data instead of hardcoded country information.

## API Configuration

The project requires a REST Countries API key.

Create a `.env` file inside the `final-project` directory:

VITE_REST_COUNTRIES_API_KEY=YOUR_API_KEY

After creating or changing the `.env` file, restart the Vite development server.

Important:

The `.env` file is ignored by Git and should not be committed to the repository.

Because this is currently a client-side Vite application, variables beginning with `VITE_` are included in the browser build. The API key should therefore be restricted using the allowed-origin settings provided by the API service.

For local development, the allowed hostname is:

localhost

For deployment, the deployed website hostname should also be added to the allowed origins.

## Run Locally

Clone the repository:

git clone https://github.com/dineshsinghdhami/devconnect-program.git

Move into the final project directory:

cd devconnect-program/final-project

Install dependencies:

npm install

Create the `.env` file:

VITE_REST_COUNTRIES_API_KEY=YOUR_API_KEY

Start the development server:

npm run dev

Open the local URL shown by Vite in the terminal.

Usually:

http://localhost:5173

## How to Use

1. Open Atlas Country Explorer.
2. Browse the available countries.
3. Use the search box to search for a country.
4. Use the region buttons to filter countries.
5. Click `View country` on a country card.
6. A popup opens with more information about the selected country.
7. Close the popup using:
   - the `×` button
   - the `Escape` key
   - clicking outside the popup
8. Use `Show more countries` to display additional countries.

## Application States

### Loading State

While country data is being requested from the API, the application displays a loading message.

### Error State

If the API request fails, the application displays an error message explaining that the countries could not be loaded.

A `Try again` button allows the user to retry the request.

### Empty State

If a search or region filter returns no matching countries, the application displays a clear empty state.

The user can clear the filters and continue browsing.

## Responsive Design

The interface was designed to work across different screen sizes.

### Desktop

Countries are displayed in a multi-column grid with a sidebar containing region shortcuts, project information, data-source information, and author links.

### Tablet

The number of country cards per row decreases so the content remains readable.

### Mobile

Country cards move to a single-column layout.

The navigation, search area, sidebar content, footer, and country detail popup also adapt to smaller screens.

The application is designed to avoid page-level horizontal scrolling on small devices.

## Accessibility

The project includes several accessibility improvements:

- Semantic HTML elements
- Accessible labels for the search input
- Visible keyboard focus indicators
- Country detail popup uses `role="dialog"`
- Popup uses `aria-modal="true"`
- `Escape` closes the popup
- Focus moves to the close button when the popup opens
- Focus returns to the country button after the popup closes
- Country flag images include alternative text
- Interactive elements use native buttons and links

## Project Structure

final-project/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── README.md
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js

Note: `.env` exists only on the local machine and is ignored by Git.

## Data Limitations

Atlas displays information provided by the external REST Countries API.

Because this information comes from an external service:

- Some values may change over time.
- Some countries may not have every field available.
- Population and other changing statistics depend on the API's data source and update schedule.
- API availability can affect whether country information loads.
- The application does not independently verify every value against individual national government sources.

The interface displays `Not available` when a value is missing instead of creating or guessing data.

## Design Decisions

### REST Countries v5

REST Countries was selected because it provides country information through one API and includes the fields needed by the application.

Downside:

The application depends on an external service and requires API configuration.

### Country Detail Popup

Country information is displayed in a popup instead of adding a large detail section below the country grid.

This keeps the main country directory compact and allows users to inspect a country without permanently changing the page layout.

Downside:

The popup required additional keyboard and focus handling for accessibility.

### Region Filtering

Region buttons are provided in addition to country search.

This makes it easier to explore countries even when the user does not already know a country name.

Downside:

Region names depend on the classification returned by the API.

### Show More Instead of Showing Everything

The application initially displays a limited number of countries and provides a `Show more countries` button.

This keeps the first page easier to scan and avoids displaying hundreds of cards immediately.

Downside:

Users need an additional action to see the complete list.

## Future Improvements

Possible future improvements include:

- Compare two countries
- Sort countries by population or area
- Add population charts
- Add map integration
- Save favorite countries
- Add more country statistics
- Improve API security using a backend or serverless proxy
- Add automated tests

## Author

Dinesh Singh Dhami

GitHub:
https://github.com/dineshsinghdhami

LinkedIn:
https://www.linkedin.com/in/dineshsinghdhami2/

Portfolio:
https://dineshsinghdhami.com.np/