export const categories = [
  { id: "history", name: "History", icon: "/images/history-logo.jpeg" },
  { id: "science", name: "Science", icon: "/images/science-logo.jpeg" },
  { id: "math", name: "Math", icon: "/images/maths-logo.jpeg" },
  {
    id: "programming",
    name: "Programming",
    icon: "/images/programming-logo.jpg",
  },
];

export const quizzes = {
  history: [
    { id: "h1", title: "World War II" },
    { id: "h2", title: "Ancient Civilizations" },
  ],
  science: [
    { id: "s1", title: "Physics Basics" },
    { id: "s2", title: "Biology 101" },
  ],
  math: [
    { id: "m1", title: "Algebra" },
    { id: "m2", title: "Geometry" },
  ],
  programming: [
    { id: "p1", title: "JavaScript Basics" },
    { id: "p2", title: "Data Structures" },
  ],
};

export const quizDetails = {
  h1: {
    title: "World War II",
    questions: [
      {
        question: "When did WWII end?",
        options: ["1945", "1939"],
        answer: "1945",
      },
      {
        question: "Main Axis Power?",
        options: ["Germany", "Brazil"],
        answer: "Germany",
      },
      {
        question: "Which event started WWII?",
        options: ["Invasion of Poland", "Attack on Pearl Harbor"],
        answer: "Invasion of Poland",
      },
      {
        question: "What was the code name for the Normandy invasion?",
        options: ["Operation Overlord", "Operation Desert Storm"],
        answer: "Operation Overlord",
      },
    ],
  },

  h2: {
    title: "Ancient Civilizations",
    questions: [
      {
        question: "Which river was central to Egyptian civilization?",
        options: ["Nile", "Amazon"],
        answer: "Nile",
      },
      {
        question: "Who built the Hanging Gardens?",
        options: ["Babylonians", "Romans"],
        answer: "Babylonians",
      },
      {
        question: "Which civilization invented writing?",
        options: ["Sumerians", "Greeks"],
        answer: "Sumerians",
      },
    ],
  },

  s1: {
    title: "Physics Basics",
    questions: [
      {
        question: "Unit of force?",
        options: ["Newton", "Watt"],
        answer: "Newton",
      },
      {
        question: "Speed formula?",
        options: ["d/t", "m*g"],
        answer: "d/t",
      },
      {
        question: "What is acceleration due to gravity on Earth?",
        options: ["9.8 m/s²", "3.6 km/h"],
        answer: "9.8 m/s²",
      },
    ],
  },

  s2: {
    title: "Biology 101",
    questions: [
      {
        question: "Basic unit of life?",
        options: ["Cell", "Tissue"],
        answer: "Cell",
      },
      {
        question: "DNA stands for?",
        options: ["Deoxyribonucleic Acid", "Dynamic Nuclear Acid"],
        answer: "Deoxyribonucleic Acid",
      },
      {
        question: "Which organ pumps blood?",
        options: ["Heart", "Liver"],
        answer: "Heart",
      },
    ],
  },

  m1: {
    title: "Algebra",
    questions: [
      {
        question: "Solve: 2x + 3 = 7. Find x.",
        options: ["2", "5"],
        answer: "2",
      },
      {
        question: "What is (a + b)^2?",
        options: ["a^2 + 2ab + b^2", "a^2 + b^2"],
        answer: "a^2 + 2ab + b^2",
      },
      {
        question: "Which is a linear equation?",
        options: ["y = 2x + 1", "y = x^2"],
        answer: "y = 2x + 1",
      },
    ],
  },

  m2: {
    title: "Geometry",
    questions: [
      {
        question: "Sum of angles in a triangle?",
        options: ["180°", "360°"],
        answer: "180°",
      },
      {
        question: "Area of a circle formula?",
        options: ["πr²", "2πr"],
        answer: "πr²",
      },
      {
        question: "A polygon with 6 sides is called?",
        options: ["Hexagon", "Pentagon"],
        answer: "Hexagon",
      },
    ],
  },

  p1: {
    title: "JavaScript Basics",
    questions: [
      {
        question: "Which keyword declares a variable?",
        options: ["let", "var", "const", "All of the above"],
        answer: "All of the above",
      },
      {
        question: "typeof null returns?",
        options: ["object", "null"],
        answer: "object",
      },
      {
        question: "How to write a comment in JS?",
        options: ["// comment", "/* comment */", "# comment"],
        answer: "// comment",
      },
    ],
  },

  p2: {
    title: "Data Structures",
    questions: [
      {
        question: "Which data structure uses FIFO?",
        options: ["Queue", "Stack"],
        answer: "Queue",
      },
      {
        question: "Which data structure uses LIFO?",
        options: ["Stack", "Queue"],
        answer: "Stack",
      },
      {
        question: "Best case time complexity of binary search?",
        options: ["O(1)", "O(log n)"],
        answer: "O(1)",
      },
    ],
  },
};
