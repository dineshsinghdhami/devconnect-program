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
    title: "Modern React Patterns",
    speaker: "Aarav Sharma",
    room: "Hall A",
    description:
      "A practical session on reusable React patterns, component composition, state management, and building maintainable user interfaces.",
  },
  {
    id: 2,
    day: "day-1",
    time: "09:00",
    endTime: "10:00",
    track: "backend",
    title: "Building Reliable APIs",
    speaker: "Nisha Karki",
    room: "Hall B",
    description:
      "Learn how to design APIs that are predictable, secure, easy to maintain, and easier for frontend teams to consume.",
  },
  {
    id: 3,
    day: "day-1",
    time: "09:00",
    endTime: "10:00",
    track: "ai",
    title: "AI for Everyday Applications",
    speaker: "Suman Thapa",
    room: "Hall C",
    description:
      "Explore practical ways to add AI features to real applications without overcomplicating the product or user experience.",
  },
  {
    id: 4,
    day: "day-1",
    time: "10:30",
    endTime: "11:30",
    track: "frontend",
    title: "Accessible Interfaces",
    speaker: "Priya Joshi",
    room: "Hall A",
    description:
      "An introduction to building interfaces that work well with keyboards, screen readers, different screen sizes, and different user needs.",
  },
  {
    id: 5,
    day: "day-1",
    time: "10:30",
    endTime: "11:30",
    track: "backend",
    title: "Database Design That Scales",
    speaker: "Rohan Adhikari",
    room: "Hall B",
    description:
      "Understand practical database design choices, relationships, indexing, and common mistakes that become expensive later.",
  },
  {
    id: 6,
    day: "day-1",
    time: "10:30",
    endTime: "11:30",
    track: "ai",
    title: "Understanding Machine Learning Models",
    speaker: "Sneha Bista",
    room: "Hall C",
    description:
      "A beginner-friendly look at how machine learning models make predictions and how to evaluate whether those predictions are useful.",
  },
  {
    id: 7,
    day: "day-1",
    time: "13:00",
    endTime: "14:00",
    track: "frontend",
    title: "Responsive Layouts with CSS",
    speaker: "Kiran Poudel",
    room: "Hall A",
    description:
      "Learn practical techniques for building layouts that adapt cleanly from desktop screens to small mobile devices.",
  },
  {
    id: 8,
    day: "day-1",
    time: "13:00",
    endTime: "14:00",
    track: "backend",
    title: "Authentication in Web Applications",
    speaker: "Bikash Rai",
    room: "Hall B",
    description:
      "A practical overview of authentication, sessions, tokens, password handling, and common security mistakes.",
  },
  {
    id: 9,
    day: "day-1",
    time: "13:00",
    endTime: "14:00",
    track: "ai",
    title: "Working with Real-World Data",
    speaker: "Meera Lama",
    room: "Hall C",
    description:
      "Learn how messy data affects machine learning projects and what developers should consider before training a model.",
  },
  {
    id: 10,
    day: "day-2",
    time: "09:00",
    endTime: "10:00",
    track: "frontend",
    title: "State Management Without Confusion",
    speaker: "Anil Shrestha",
    room: "Hall A",
    description:
      "Understand when local state is enough, when shared state is useful, and how to avoid unnecessary complexity.",
  },
  {
    id: 11,
    day: "day-2",
    time: "09:00",
    endTime: "10:00",
    track: "backend",
    title: "FastAPI in Production",
    speaker: "Dipesh Khadka",
    room: "Hall B",
    description:
      "A practical discussion of structuring, deploying, and maintaining FastAPI applications for real-world use.",
  },
  {
    id: 12,
    day: "day-2",
    time: "09:00",
    endTime: "10:00",
    track: "ai",
    title: "From Model to Product",
    speaker: "Ritika Gurung",
    room: "Hall C",
    description:
      "Learn what changes when a machine learning experiment becomes a feature that real users depend on.",
  },
  {
    id: 13,
    day: "day-2",
    time: "10:30",
    endTime: "11:30",
    track: "frontend",
    title: "Performance in React Applications",
    speaker: "Nabin KC",
    room: "Hall A",
    description:
      "Learn how to identify unnecessary rendering and improve performance without premature optimization.",
  },
  {
    id: 14,
    day: "day-2",
    time: "10:30",
    endTime: "11:30",
    track: "backend",
    title: "Error Handling and Observability",
    speaker: "Sujal Basnet",
    room: "Hall B",
    description:
      "Explore practical ways to log, monitor, and understand failures in backend applications.",
  },
  {
    id: 15,
    day: "day-2",
    time: "10:30",
    endTime: "11:30",
    track: "ai",
    title: "Responsible AI Development",
    speaker: "Asmita Koirala",
    room: "Hall C",
    description:
      "A practical discussion about limitations, bias, transparency, and responsible use of AI systems.",
  },
  {
    id: 16,
    day: "day-2",
    time: "13:00",
    endTime: "14:00",
    track: "frontend",
    title: "Testing User Interfaces",
    speaker: "Sagar Maharjan",
    room: "Hall A",
    description:
      "Learn what frontend tests should focus on and how to test user behavior instead of implementation details.",
  },
  {
    id: 17,
    day: "day-2",
    time: "13:00",
    endTime: "14:00",
    track: "backend",
    title: "Deploying Modern Web Applications",
    speaker: "Roshan Oli",
    room: "Hall B",
    description:
      "Understand the practical deployment flow from source code to a live web application.",
  },
  {
    id: 18,
    day: "day-2",
    time: "13:00",
    endTime: "14:00",
    track: "ai",
    title: "AI Project Lessons from Production",
    speaker: "Samir Gautam",
    room: "Hall C",
    description:
      "Real-world lessons about data quality, model reliability, deployment, monitoring, and user expectations.",
  },
];