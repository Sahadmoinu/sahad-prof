export const personalInfo = {
  name: "Sahad Moinuddeen",
  shortName: "Sahad",
  fullName: "Sahad Moinuddeen P P",
  initials: "SM",
  role: "AI Software Engineer",
  roles: [
    "AI Software Engineer",
    "Full Stack Developer",
    "GenAI & RAG Builder",
    "Computer Vision Engineer",
  ],
  location: "Kerala, India",
  relocate: "Willing to relocate",
  email: "sahadmoinu3@gmail.com",
  phone: "+91 7034071082",
  github: "https://github.com/Sahadmoinu",
  linkedin: "https://www.linkedin.com/in/sahad-moinuddeen-p-p",
  resume: "/Sahad-CV.pdf",

  description:
    "I build end-to-end AI applications: models served through FastAPI and Laravel REST APIs, with React front ends. LLMs, RAG, computer vision and the backend that runs them.",

  bio: [
    "I'm an AI Software Engineer with 3+ years of backend and full-stack experience. Today I lead a development team at Bpract Software Solutions, where I own delivery of backend features for client applications.",
    "Along the way I completed 9 months of hands-on Data Science training, and now I combine both sides: Generative AI (LLMs, RAG, vector databases), Computer Vision (YOLO, OpenCV, OCR), Deep Learning and NLP, shipped behind production-grade REST APIs.",
  ],
};

export const stats = [
  { value: 3, suffix: "+", label: "Years building software" },
  { value: 6, suffix: "+", label: "AI & full-stack projects" },
  { value: 9, suffix: "", label: "Months of Data Science training" },
  { value: 30, suffix: "+", label: "Tools & technologies" },
];

export const experience = [
  {
    period: "Aug 2025 — Present",
    role: "Full Stack Developer & Team Lead",
    company: "Bpract Software Solutions LLP",
    type: "Full-time",
    current: true,
    points: [
      "Lead the development team: delegate tasks, review code and own delivery of backend modules for client applications.",
      "Design and maintain scalable REST APIs and admin endpoints for real-time analytics and user management.",
      "Gather requirements with clients and coordinate implementation across the team.",
      "Optimise SQL queries and build secure systems with authentication and role-based authorisation.",
    ],
    tech: ["PHP", "Laravel", "Lumen", "MySQL", "REST APIs", "Team Leadership"],
  },
  {
    period: "Jul 2025 — Mar 2026",
    role: "Data Science Intern",
    company: "Luminar Technolab",
    type: "Internship",
    points: [
      "Developed LLM-powered applications using RAG, Ollama, ChromaDB and Sentence Transformers.",
      "Built regression and classification models with Scikit-learn, and CNN models for image classification.",
      "Implemented an NLP-based spam detection system.",
      "Ran EDA with Pandas and NumPy; evaluated and tuned models with validation techniques.",
    ],
    tech: ["Python", "Scikit-learn", "TensorFlow", "RAG", "NLP", "Pandas"],
  },
  {
    period: "Jan 2024 — Jul 2025",
    role: "Web & Backend Developer",
    company: "Techffodils Technologies LLP",
    type: "Full-time",
    points: [
      "Developed and maintained ERP and CRM modules using Laravel and Livewire.",
      "Built e-commerce features in React, including checkout and wallet transactions.",
      "Worked with queues, database transactions and payment gateway integrations.",
    ],
    tech: ["Laravel", "Livewire", "React", "MySQL", "Payments"],
  },
  {
    period: "Mar 2023 — Oct 2023",
    role: "Software Developer Intern",
    company: "TRY LOGIC Soft Solutions",
    type: "Internship",
    points: [
      "Collaborated on real-world client projects following Agile practices.",
      "Built REST APIs and integrated React components for dynamic user interfaces.",
    ],
    tech: ["PHP", "REST APIs", "React", "Agile"],
  },
];

export const skillGroups = [
  {
    title: "Generative AI",
    icon: "sparkles",
    accent: "brand",
    blurb: "LLM apps grounded in your own data.",
    items: [
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "Ollama (Llama 3)",
      "ChromaDB",
      "Vector Embeddings",
      "Sentence Transformers",
      "Chatbots",
    ],
  },
  {
    title: "ML & Deep Learning",
    icon: "brain",
    accent: "lime",
    blurb: "From EDA to trained, validated models.",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "CNN",
      "NLP",
      "Transfer Learning (VGG16)",
      "MediaPipe",
      "TF-IDF",
    ],
  },
  {
    title: "Computer Vision",
    icon: "eye",
    accent: "hot",
    blurb: "Real-time detection and recognition.",
    items: ["OpenCV", "YOLOv8", "EasyOCR", "face_recognition", "PDFPlumber"],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    accent: "amber",
    blurb: "The production layer that serves the models.",
    items: [
      "FastAPI",
      "Laravel",
      "Lumen",
      "Node.js",
      "Express.js",
      "Livewire",
      "REST APIs",
      "RBAC",
      "Queues",
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    accent: "sky",
    blurb: "Clean, responsive interfaces.",
    items: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Data & Tools",
    icon: "database",
    accent: "teal",
    blurb: "Storage, analysis and delivery.",
    items: [
      "Python",
      "PHP",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Power BI",
      "Git",
      "AWS",
      "Jupyter",
    ],
  },
];

export const marqueeItems = [
  "Python",
  "LLMs",
  "RAG",
  "FastAPI",
  "Laravel",
  "React",
  "YOLOv8",
  "OpenCV",
  "TensorFlow",
  "ChromaDB",
  "Ollama",
  "Scikit-learn",
  "MySQL",
  "PostgreSQL",
  "Node.js",
  "AWS",
];

export const projectFilters = ["All", "GenAI", "Computer Vision", "Full Stack"];

export const projects = [
  {
    id: "resume-analyzer",
    title: "AI Resume Analyzer",
    category: "GenAI",
    tagline: "Scores resumes against job descriptions with LLMs + RAG.",
    description:
      "An end-to-end AI platform that evaluates a resume against a job description, produces a match score, finds missing skills and gives personalised improvement advice.",
    points: [
      "Extracted resume content with PDFPlumber and generated semantic embeddings with Sentence Transformers.",
      "Ran semantic matching against job requirements using ChromaDB as the vector store.",
      "Integrated Ollama (Llama 3) to produce match scores, identify skill gaps and write recommendations.",
      "React front end talking to Laravel and a FastAPI AI service.",
    ],
    tech: ["React.js", "Laravel", "FastAPI", "RAG", "Ollama", "ChromaDB"],
    featured: true,
    visual: "rag",
  },
  {
    id: "number-plate",
    title: "Number Plate Recognition",
    category: "Computer Vision",
    tagline: "Real-time plate reading from a live webcam feed.",
    description:
      "A real-time vehicle number plate recognition system that detects plates, reads them with OCR and looks up the owner through a REST API.",
    points: [
      "Detected plates with YOLOv8 and read them with EasyOCR from a live webcam stream.",
      "Added plate-format validation and repeated-read confirmation to cut false OCR reads.",
      "Laravel REST API looks up vehicle owner details, shown in a React dashboard.",
    ],
    tech: ["YOLOv8", "EasyOCR", "OpenCV", "Laravel", "React.js"],
    featured: true,
    visual: "vision",
  },
  {
    id: "face-attendance",
    title: "Face Recognition Attendance",
    category: "Computer Vision",
    tagline: "Hands-free attendance with IN/OUT and working hours.",
    description:
      "A real-time attendance system with face detection, encoding and similarity-based identity recognition, logged automatically to a Laravel backend.",
    points: [
      "Face detection, encoding and similarity matching with OpenCV and face_recognition.",
      "Engineered IN/OUT detection and automatic working-hours computation.",
      "End-to-end pipeline: detection → recognition → REST API → database.",
    ],
    tech: ["Python", "OpenCV", "face_recognition", "Laravel"],
    visual: "face",
  },
  {
    id: "car-chatbot",
    title: "Car Info Site + AI Chatbot",
    category: "GenAI",
    tagline: "Ask about price, mileage and specs in plain language.",
    description:
      "A car information platform with an LLM chatbot that answers questions on price, mileage and specifications using a RAG pipeline.",
    points: [
      "RAG pipeline grounds chatbot answers in the car dataset.",
      "Interactive UI for browsing car models with real-time chatbot assistance.",
    ],
    tech: ["React.js", "LLM", "RAG", "Vector Search"],
    visual: "chat",
  },
  {
    id: "movie-recs",
    title: "Movie Recommendation System",
    category: "Full Stack",
    tagline: "Netflix-style personalised recommendations.",
    description:
      "A movie recommendation system that serves personalised suggestions from an ML service over REST.",
    points: [
      "TF-IDF and cosine similarity for recommendations based on user behaviour.",
      "ML service in FastAPI, integrated with a React + Node.js app for real-time results.",
    ],
    tech: ["React", "Node.js", "FastAPI", "TF-IDF", "Cosine Similarity"],
    visual: "grid",
  },
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    category: "Full Stack",
    tagline: "Products, cart, checkout, payments and orders.",
    description:
      "A full-stack e-commerce system covering product management, cart, checkout, payment and order tracking.",
    points: [
      "Built product, cart, checkout and order APIs.",
      "Integrated a payment gateway and built admin features.",
      "Responsive UI for product and order pages.",
    ],
    tech: ["Laravel", "React", "MySQL", "REST API", "Payment Gateway"],
    visual: "shop",
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "University of Calicut",
  place: "Calicut, India",
  period: "2020 — 2023",
};

export const certifications = [
  {
    title: "Python Data Science with ML, AI & Power BI",
    org: "Luminar Technolab, Ernakulam",
    period: "Jul 2025 — Mar 2026",
    text: "Hands-on training in Python, Machine Learning, Deep Learning, EDA and Power BI with real-world project implementation.",
  },
];

export const process = [
  {
    step: "01",
    title: "Data",
    text: "Collect, clean and explore. Parse PDFs, run EDA, build the dataset the model needs.",
    tools: ["PDFPlumber", "Pandas", "NumPy"],
    icon: "database",
  },
  {
    step: "02",
    title: "Model",
    text: "Embed, train or prompt: vector search with RAG, YOLO for vision, Scikit-learn for prediction.",
    tools: ["Llama 3", "ChromaDB", "YOLOv8"],
    icon: "brain",
  },
  {
    step: "03",
    title: "API",
    text: "Wrap it in a fast, secure service with auth, validation and tuned SQL.",
    tools: ["FastAPI", "Laravel", "MySQL"],
    icon: "server",
  },
  {
    step: "04",
    title: "Product",
    text: "Put it in front of users: dashboards, chat UIs and real-time results in React.",
    tools: ["React", "REST", "Live UI"],
    icon: "rocket",
  },
];
