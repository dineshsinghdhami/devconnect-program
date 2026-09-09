export const conferenceDays = [
  {
    id: "day-1",
    label: "Day 1",
    date: "September 20, 2026",
  },
  {
    id: "day-2",
    label: "Day 2",
    date: "September 21, 2026",
  },
];

export const tracks = [
  {
    id: "frontend",
    name: "Frontend",
  },
  {
    id: "backend",
    name: "Backend",
  },
  {
    id: "ai",
    name: "AI & ML",
  },
];

export const sessions = [
  {
    id: 1,
    day: "day-1",
    time: "09:00",
    endTime: "10:00",
    track: "frontend",
    title: "Accessible React Interfaces",
    speaker: "DevConnect Team",
    room: "Frontend Room",
    description:
      "A practical session on semantic HTML, keyboard navigation, focus management, accessible dialogs, and building React interfaces that work for more users.",
  },
  {
    id: 2,
    day: "day-1",
    time: "09:00",
    endTime: "10:00",
    track: "backend",
    title: "Designing REST APIs with FastAPI",
    speaker: "Guest Session",
    room: "Backend Room",
    description:
      "A practical introduction to structuring FastAPI applications, designing predictable endpoints, validating requests, and returning useful API responses.",
  },
  {
    id: 3,
    day: "day-1",
    time: "09:00",
    endTime: "10:00",
    track: "ai",
    title: "Building ML Features for Web Applications",
    speaker: "Dinesh Singh Dhami",
    room: "AI Lab",
    description:
      "An overview of how machine learning models can be integrated into web applications, including data preparation, model inference, APIs, and user-facing results.",
  },

  {
    id: 4,
    day: "day-1",
    time: "10:30",
    endTime: "11:30",
    track: "frontend",
    title: "Responsive Layouts with Grid & Flexbox",
    speaker: "DevConnect Team",
    room: "Frontend Room",
    description:
      "Learn when to use CSS Grid and Flexbox, how to design layouts for narrow screens, and how to avoid horizontal scrolling on mobile devices.",
  },
  {
    id: 5,
    day: "day-1",
    time: "10:30",
    endTime: "11:30",
    track: "backend",
    title: "Authentication, Sessions & JWT",
    speaker: "Guest Session",
    room: "Backend Room",
    description:
      "A practical discussion of login flows, sessions, JSON Web Tokens, authentication boundaries, and common mistakes in web applications.",
  },
  {
    id: 6,
    day: "day-1",
    time: "10:30",
    endTime: "11:30",
    track: "ai",
    title: "Understanding Model Evaluation",
    speaker: "DevConnect Team",
    room: "AI Lab",
    description:
      "Understand accuracy, precision, recall, confusion matrices, train-test splits, and why choosing the right metric matters.",
  },

  {
    id: 7,
    day: "day-1",
    time: "13:00",
    endTime: "14:00",
    track: "frontend",
    title: "Managing State and Async UI",
    speaker: "DevConnect Team",
    room: "Frontend Room",
    description:
      "Explore practical patterns for loading, error, empty, and success states when React applications communicate with APIs.",
  },
  {
    id: 8,
    day: "day-1",
    time: "13:00",
    endTime: "14:00",
    track: "backend",
    title: "PostgreSQL for Web Applications",
    speaker: "Guest Session",
    room: "Backend Room",
    description:
      "A practical look at relational data, table relationships, queries, indexing, migrations, and using PostgreSQL in modern web applications.",
  },
  {
    id: 9,
    day: "day-1",
    time: "13:00",
    endTime: "14:00",
    track: "ai",
    title: "From Notebook to Production",
    speaker: "Dinesh Singh Dhami",
    room: "AI Lab",
    description:
      "A practical overview of moving a machine learning experiment from a notebook into a usable application or API.",
  },

  {
    id: 10,
    day: "day-2",
    time: "09:00",
    endTime: "10:00",
    track: "frontend",
    title: "React Rendering and Effects",
    speaker: "DevConnect Team",
    room: "Frontend Room",
    description:
      "Understand component rendering, state updates, dependency arrays, effects, and common React mistakes that cause unexpected behavior.",
  },
  {
    id: 11,
    day: "day-2",
    time: "09:00",
    endTime: "10:00",
    track: "backend",
    title: "Handling API Failures Gracefully",
    speaker: "DevConnect Team",
    room: "Backend Room",
    description:
      "Learn how applications should respond to timeouts, validation errors, unavailable services, retries, and unexpected server failures.",
  },
  {
    id: 12,
    day: "day-2",
    time: "09:00",
    endTime: "10:00",
    track: "ai",
    title: "Data Cleaning Before Machine Learning",
    speaker: "Dinesh Singh Dhami",
    room: "AI Lab",
    description:
      "Explore missing values, duplicates, inconsistent data, categorical features, and why data preparation often determines model quality.",
  },

  {
    id: 13,
    day: "day-2",
    time: "10:30",
    endTime: "11:30",
    track: "frontend",
    title: "Frontend Performance Fundamentals",
    speaker: "Guest Session",
    room: "Frontend Room",
    description:
      "Learn practical techniques for improving perceived performance, reducing unnecessary work, and keeping interfaces responsive.",
  },
  {
    id: 14,
    day: "day-2",
    time: "10:30",
    endTime: "11:30",
    track: "backend",
    title: "Environment Variables and Secrets",
    speaker: "DevConnect Team",
    room: "Backend Room",
    description:
      "Understand what belongs in environment variables, how frontend and backend environments differ, and why browser-side secrets are not actually secret.",
  },
  {
    id: 15,
    day: "day-2",
    time: "10:30",
    endTime: "11:30",
    track: "ai",
    title: "Classification with Scikit-learn",
    speaker: "Dinesh Singh Dhami",
    room: "AI Lab",
    description:
      "A practical introduction to building a classification workflow using preprocessing, training, prediction, and evaluation with Scikit-learn.",
  },

  {
    id: 16,
    day: "day-2",
    time: "13:00",
    endTime: "14:00",
    track: "frontend",
    title: "Testing Interfaces Through User Behavior",
    speaker: "DevConnect Team",
    room: "Frontend Room",
    description:
      "Learn what useful frontend tests should verify and why testing user-visible behavior is often more valuable than testing implementation details.",
  },
  {
    id: 17,
    day: "day-2",
    time: "13:00",
    endTime: "14:00",
    track: "backend",
    title: "Deploying a Full-Stack Application",
    speaker: "Guest Session",
    room: "Backend Room",
    description:
      "Walk through the practical path from local development to deployment, including builds, environment configuration, frontend hosting, and APIs.",
  },
  {
    id: 18,
    day: "day-2",
    time: "13:00",
    endTime: "14:00",
    track: "ai",
    title: "Responsible Use of AI in Products",
    speaker: "DevConnect Team",
    room: "AI Lab",
    description:
      "Discuss model limitations, misleading outputs, data quality, transparency, and responsible ways to introduce AI features into products.",
  },
];