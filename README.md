# # DevConnect Verified Frontend Internship

This repository contains the work I completed during the [DevConnect Verified Frontend Internship](https://devconnectplatform.com/).

During this program, I worked on frontend fundamentals, React projects, accessibility, APIs, responsive design, documentation, GitHub pull requests, community contributions, and a final project.

DevConnect is developed by [VYREN code](https://vyrencode.com/).

---

## # My Progress

I completed the following requirements during the program:

- [x] Knowledge Assessment : 97%
- [x] Task 1 : Accessible Conference Schedule
- [x] Task 2 : Personal Reading List
- [x] Final Project : Atlas Country Explorer
- [x] Community Contributions : 5/5 completed
- [x] Documentation
- [x] Professional Practice : Met

---

## # Repository Structure

I kept all of my internship work inside a single repository and separated each task into its own folder.

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

# # Task 1 : Accessible Conference Schedule

For my first practical task, I built an accessible and responsive conference schedule using React and Vite.

The goal of this task was to create a layout that could be fully used with a keyboard and still work properly on smaller screens.

I created a two-day conference schedule with three tracks:

- Frontend
- Backend
- AI & ML

Users can switch between conference days and open session details using either a mouse or keyboard.

## # What I Implemented

For this task, I added:

- Two-day conference schedule
- Three parallel tracks
- Responsive desktop and mobile layout
- Keyboard navigation
- Visible focus indicators
- Accessible session detail dialog
- Escape key support
- Focus return after closing the dialog
- Arrow-key navigation between conference days
- Mobile layout without horizontal scrolling at 320px

## # Keyboard Support

I added keyboard controls so the application can be used without a mouse.

The controls include:

- `Tab` to move between interactive elements
- `Enter` / `Space` to activate buttons
- `Arrow Right` to move to the next conference day
- `Arrow Left` to move to the previous conference day
- `Home` to move to the first conference day
- `End` to move to the last conference day
- `Escape` to close the session details dialog

## # Responsive Layout Decision

At first, the three conference tracks were displayed side by side.

This worked well on desktop but became difficult to use on smaller screens.

To solve this, I changed the layout so the three tracks stack vertically on mobile devices.

This helped me avoid horizontal scrolling and kept the session cards readable even at a width of 320px.

## # Tech Stack

```
- React
- Vite
- JavaScript
- CSS
```

## # Live Demo

https://devconnect-conference-schedule.vercel.app

---

# # Task 2 : Personal Reading List

For my second practical task, I built a Personal Reading List application.

The goal of this task was to work with real data and clearly handle three important application states:

- Loading
- Error
- Empty

I used the Open Library API to search for real books.

Users can search for books and save them to their own reading list.

## # What I Implemented

I added:

- Real book search using Open Library
- Book titles
- Authors
- Publication years
- Book covers
- Add to reading list
- Remove from reading list
- Persistent storage using `localStorage`
- Responsive layout
- Loading state
- Error state
- Empty state
- Reviewer tools
- Retry action

## # Data Source

I used the Open Library Search API to get book information.

Book cover images are loaded using the Open Library Covers service.

I did not use hardcoded book data.

## # Persistent Storage

I used browser `localStorage` to save the reading list.

This means saved books remain available even after refreshing the page in the same browser.

## # Required Application States

### # Loading State

I added a loading state so users can clearly see when data is being fetched.

I also added a reviewer control so this state can be tested directly.

### # Error State

I added an error state that explains when something fails.

The user also gets a retry option.

### # Empty State

I created an empty state for new users.

Instead of showing only a blank screen, it explains what the reading list is for and gives the user a clear first action.

## # Tech Stack

```
- React
- Vite
- JavaScript
- CSS
- Open Library API
- localStorage
```

## # Live Demo

https://devconnect-reading-list.vercel.app

---

# # Final Project : Atlas Country Explorer

For my final project, I built Atlas Country Explorer.

I wanted to create an application that makes country information easier to search and understand instead of only displaying raw API data.

I used the REST Countries v5 API as the main data source.

Users can browse countries, search by name, filter by region, and open detailed country information.

## # What I Built

I implemented:

- Country browsing
- Search by country name
- Functional Search button
- Enter-key search support
- Region filtering
- Country flags
- Capital information
- Region and subregion
- Population
- Area
- Languages
- Currency information
- Country detail popup
- Loading state
- Error state
- Empty search state
- Show-more functionality
- Responsive design
- Keyboard-accessible dialog
- Escape key support
- Focus restoration after closing the dialog

## # Search Improvement

Initially, the search field filtered data while typing.

Later, I improved the search interaction so the Search button actually performs the search.

I also added support for pressing `Enter` inside the search field.

This improvement was completed through a separate pull request.

## # Data Source

I used the REST Countries v5 API.

The application loads country information from the API instead of storing country data manually.

When information is missing, I display:

`Not available`

instead of guessing or creating data.

## # Data Limitations

While building the project, I also documented the limitations of using an external data source.

For example:

- Some values may change over time.
- Some countries may not contain every field.
- Population depends on the API's update schedule.
- API availability can affect the application.
- The application does not independently verify every value against official government sources.

## # Application States

### # Loading

I added a loading message while the country data is being requested.

### # Error

If the API request fails, the application displays an error message and provides a `Try again` button.

### # Empty

If no country matches the user's search or selected region, the application displays an empty state and allows the user to clear the filters.

## # Accessibility

I added several accessibility improvements to the country detail popup.

These include:

- `role="dialog"`
- `aria-modal="true"`
- Keyboard focus
- Escape key support
- Accessible close button
- Focus returning to the original country button

## # Tech Stack

```
- React
- Vite
- JavaScript
- CSS
- REST Countries v5 API
```

## # Live Demo

https://devconnect-atlas-country-explorer.vercel.app/

---

# # Documentation

For the documentation requirement, I created three technical decision records for my final project.

They are stored inside:

docs/decisions/

The files are:

- `001-rest-countries-api.md`
- `002-country-detail-modal.md`
- `003-show-more-pagination.md`

## # What I Documented

For every decision, I explained:

- What I decided
- What alternatives I considered
- Why I selected that option
- What disadvantages or costs came with it
- What became difficult or awkward during implementation

## # Decision 1 : REST Countries API

I documented why I selected REST Countries v5 instead of using older APIs, GitHub datasets, or hardcoded country data.

I also documented the downside of depending on an external API and API key configuration.

## # Decision 2 : Country Detail Modal

I documented why I used a popup modal instead of expanding cards, showing a large section below the grid, or creating separate detail pages.

I also documented the accessibility work required for focus and keyboard handling.

## # Decision 3 : Show More

I documented why I used a Show More button instead of displaying every country at once, traditional pagination, or infinite scrolling.

I also explained the downside that users need another action to see more results.

The Documentation requirement was completed and marked as **Met** by DevConnect.

---

# # Professional Practice

For Professional Practice, I worked with GitHub branches and pull requests instead of making every change directly on `main`.

This helped me practice a workflow closer to how development teams manage changes.

## # Pull Requests I Completed

### # PR #1 : Final Project Setup

I created the initial Atlas Country Explorer project and added the API integration and filtering functionality.

### # PR #2 : Final Project UI

I improved the interface, responsive country cards, search, filters, country detail popup, and accessibility behavior.

### # PR #3 : Documentation

I added the final project README and technical decision records.

### # PR #4 : Reviewer Guidance

I improved the final project README so reviewers could understand how to test the application.

### # PR #5 : Search Improvement

I made the Search button functional and added Enter-key search support.

### # PR #6 : Task 1 Accessibility Documentation

I improved the accessibility testing documentation for the conference schedule project.

These pull requests were created using separate branches and merged into `main`.

Professional Practice was marked as **Met** by DevConnect.

---

# # Community Contributions

For the Community Contribution requirement, I interacted with other DevConnect members and provided useful feedback on their projects.

I completed contributions for five different members.

My comments included feedback and questions related to:

- Project ideas
- User experience
- AI tools
- Privacy
- Data handling
- Product improvements

I completed:

- 5/5 contributions
- Contributions to five different members

Community Contribution was marked as **Met** by DevConnect.

---

# # What I Learned

During this internship, I worked on more than just building interfaces.

I practiced:

- React development
- Component-based frontend development
- Working with APIs
- Loading, error, and empty states
- Responsive web design
- Accessibility
- Keyboard navigation
- Browser storage
- Git branches
- Pull requests
- Documentation
- Technical decision records
- Deployment with Vercel
- Community feedback

The program also helped me understand why it is important to explain technical decisions instead of only showing finished code.

---

## # Current DevConnect Status

| Area | Status |
|---|---|
| Knowledge Assessment | Passed : 97% |
| Task 1 | Met |
| Task 2 | Met |
| Final Project | Met |
| Community Contribution | Met |
| Documentation | Met |
| Professional Practice | Met |

---

## # Projects

| Project | Status | Live Demo |
|---|---|---|
| Accessible Conference Schedule | Completed | https://devconnect-conference-schedule.vercel.app |
| Personal Reading List | Completed | https://devconnect-reading-list.vercel.app |
| Atlas Country Explorer | Completed | https://devconnect-atlas-country-explorer.vercel.app/ |

---

## # Program Completion

I completed all technical, project, documentation, professional-practice, and community requirements for the DevConnect Verified Frontend Internship.

---

## # Author

**Dinesh Singh Dhami**

GitHub:
https://github.com/dineshsinghdhami

LinkedIn:
https://www.linkedin.com/in/dineshsinghdhami2/

Portfolio:
https://dineshsinghdhami.com.np/
