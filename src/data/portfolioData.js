// ─────────────────────────────────────────────────────────────────────────
// portfolioData.js
// Single source of truth for all content on the site. Components import
// from here rather than hard-coding copy, so the page can be updated by
// editing data, not JSX.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Krishna Tiwari',
  role: 'Computer Science & Engineering Student',
  tagline: 'Building scalable full-stack software and intelligent AI solutions, with engineering experience spanning cloud infrastructure, computer vision, machine learning, and modern RAG architectures.',
  location: 'Bengaluru, India',
  email: 'krishna.tiwaricap@gmail.com',
  status: 'Open to internships & collaborations',
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'CMR University',
    period: '2024 – 2028',
  },
}

export const navSections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  // { id: 'experience', label: 'Experience' },
  { id: 'extracurricular', label: 'Beyond Code' },
  { id: 'contact', label: 'Contact' },
]

export const skillGroups = [
  {
    category: 'Languages',
    accent: 'cyan',
    skills: ['JavaScript (ES6+)', 'Python', 'Java', 'C++', 'SQL'],
  },
  {
    category: 'Frameworks & Web',
    accent: 'indigo',
    skills: ['React.js', 'Tailwind CSS', 'Node.js', 'REST APIs'],
  },
  {
    category: 'Cloud, AI & Tools',
    accent: 'emerald',
    skills: [
      'Microsoft Azure',
      'Supabase (PostgreSQL)',
      'Google Gemini API',
      'Git / GitHub',
      'Agile / SDLC',
      'NLP',
    ],
  },
]

export const projects = [
  {
    id: 'orbitlab',
    size: 'hero',
    name: 'OrbitLab',
    tag: 'Hero Project · Orbital Mechanics',
    description: 'A 3D simulation platform for satellite engineering and orbital mechanics, built for live trajectory modeling and mission visualization.',
    details: 'Spearheaded a 4-member hackathon team across India Innovation, AMD Slingshot, and Microsoft Imagine Cup.',
    stack: ['JavaScript', '3D Web Simulation', 'Azure Static Web Apps'],
    accent: 'cyan',
    githubUrl: 'https://github.com/Krishnatiwari1909/Orbit-lab',
    liveUrl: 'https://white-field-012c90a00.6.azurestaticapps.net/', 
  },
  {
    id: 'nutrition-ai',
    size: 'md',
    name: 'AI-Powered Nutrition Application',
    tag: 'Full-Stack · Applied AI',
    description: 'Full-stack React & Tailwind web app parsing natural-language meal descriptions into structured macronutrient data.',
    details: 'Backed by Supabase Edge Functions (Deno) and the Google Gemini API for NLP parsing.',
    stack: ['React', 'Tailwind CSS', 'Supabase', 'Gemini API'],
    accent: 'emerald',
    githubUrl: 'https://github.com/Krishnatiwari1909/Nutrition-Tracking-App',
    liveUrl: null,
  },
  {
    id: 'hybrid-rag',
    size: 'md',
    name: 'Hybrid RAG Chatbot',
    tag: 'LLM Orchestration · RAG',
    description: 'Zero-latency document retrieval system routing vector embeddings and fast inference across a resilient hybrid cloud pipeline.',
    details: 'Solves API rate-limiting bottlenecks using ChromaDB, Gemini Embeddings, and the Groq API.',
    stack: ['Python', 'ChromaDB', 'Groq API', 'Gradio'],
    accent: 'indigo',
    githubUrl: 'https://github.com/Krishnatiwari1909/pdf-rag-engine',
    liveUrl: null,
  },
  {
    id: 'vision-api',
    size: 'md',
    name: 'VisionAPI Studio',
    tag: 'Computer Vision · Microservice',
    description: 'High-throughput asynchronous image classification REST API microservice powered by Google Vision Transformer (ViT).',
    details: 'Features a FastAPI asynchronous backend and a dynamic client dashboard for real-time inference.',
    stack: ['FastAPI', 'Python', 'Vision Transformer', 'Hugging Face'],
    accent: 'cyan',
    githubUrl: 'https://github.com/Krishnatiwari1909/vision-api-microservice',
    liveUrl: null,
  },
  {
    id: 'doc-classifier',
    size: 'sm',
    name: 'Smart Document Classifier',
    tag: 'NLP · Zero-Shot Classification',
    description: 'Dynamic categorization system categorizing unstructured data into arbitrary user-defined labels on the fly.',
    details: 'Zero-shot classification pipeline powered by facebook/bart-large-mnli.',
    stack: ['Python', 'Transformers', 'Gradio', 'PyPDF2'],
    accent: 'emerald',
    githubUrl: 'https://github.com/Krishnatiwari1909/document-classifier',
    liveUrl: null,
  },
  {
    id: 'fire-gas-detection',
    size: 'sm',
    name: 'Fire & Gas Detection System',
    tag: 'Embedded · Computer Vision',
    description: 'Real-time environmental warning system integrating physical gas sensors with a Python/OpenCV vision interface.',
    details: 'Microcontroller firmware bridging hardware sensor thresholds to a desktop application.',
    stack: ['Arduino Uno', 'Serial I/O', 'Python', 'OpenCV'],
    accent: 'indigo',
    githubUrl: null,
    liveUrl: null,
  },
]

export const certificates = [
  {
    id: 'toc',
    title: 'Theory Of Computation / Automata',
    issuer: 'Udemy',
    duration: '12 Hours',
    instructor: null,
    image: '/assets/certificates/toc.jpg',
  },
  {
    id: 'os-fundamentals',
    title: 'Fundamentals Of Operating Systems',
    issuer: 'Udemy',
    duration: '22.5 Hours',
    instructor: 'Hussein Nasser',
    image: '/assets/certificates/os-fundamentals.jpg',
  },
  {
    id: 'python-bootcamp',
    title: 'The Complete Python Bootcamp',
    issuer: 'Udemy',
    duration: '22 Hours',
    instructor: 'Jose Portilla',
    image: '/assets/certificates/python-bootcamp.jpg',
  },
  {
    id: 'python-beginners',
    title: 'Python For Beginners',
    issuer: 'Simplilearn',
    duration: null,
    instructor: null,
    image: '/assets/certificates/python-beginners.jpg',
  },
  {
    id: 'intro-databases',
    title: 'Introduction To Databases',
    issuer: 'Simplilearn',
    duration: null,
    instructor: null,
    image: '/assets/certificates/intro-databases.jpg',
  },
  {
    id: 'software-eng-principles',
    title: 'Software Engineering Principles',
    issuer: 'Infosys Springboard',
    duration: null,
    instructor: null,
    image: '/assets/certificates/software-eng-principles.jpg',
  },
]

export const extracurriculars = [
  {
    id: 'polio-campaign',
    title: 'Pulse Polio Immunization Campaign, Karnataka',
    date: 'Dec 2025',
    description: 'Served as a ground volunteer supporting on-site immunization efforts.',
  },
  {
    id: 'walk-to-empowerher',
    title: 'CRY "Walk to EmpowerHER"',
    date: null,
    description: 'Participated in the STEM-advocacy walkathon supporting girls\u2019 education.',
  },
  {
    id: 'treasure-hunt',
    title: 'College Technical Treasure Hunt',
    date: null,
    description: 'Placed 1st in a campus-wide technical treasure hunt.',
    highlight: true,
  },
]

export const resume = {
  url: '/assets/resume/KrishnaTiwari_Resume.pdf',
  filename: 'KrishnaTiwari_Resume.pdf',
}

export const socials = {
  email: `mailto:${profile.email}`,
  phone: `tel:${profile.phone?.replace(/\s+/g, '') || ''}`,
  github: 'https://github.com/Krishnatiwari1909',
  linkedin: 'https://www.linkedin.com/in/krishna-tiwari-87906b335',
}
// Add 'about' and 'experience' to your navSections array (keep experience commented out or hidden for now)


// Add this new About object
export const aboutData = {
  heading: "Know Me Better",
  bio: [
  "I am a Computer Science and Engineering student at CMR University in Bengaluru, and a full-stack developer specializing in AI-integrated platforms, mobile apps, and cloud architectures. Proficient in React, Node.js, Python, and TypeScript, I am driven by a passion for turning complex problems into robust, scalable software.",
  "Beyond the screen, I believe in maintaining a strong balance between my technical pursuits and everyday life. Outside of tech, you can usually find me playing the Indian bamboo flute, discovering new music, catching a movie, or going for a ride."
],
  images: [
    "/public/assets/about/krishna1.jpg",
    "/public/assets/about/krishna2.jpg", 
    "/public/assets/about/krishna3.jpg"
  ]
}

// Add this new Experience/Internship array
// export const experienceData = [
//   {
//     id: 1,
//     role: "AI/ML Intern",
//     company: "ScholarX",
//     duration: "July 2026 - Aug 2026",
//     description: "Completed project-based domain assignments in Artificial Intelligence and Machine Learning. Submitted practical learning projects for periodic evaluation in a remote environment.",
//     skills: ["Artificial Intelligence", "Machine Learning", "Python", "Data Processing"],
//     documents: [
//       { label: "Offer Letter", url: "/scholarx-offer.jpg" },
//       // Make sure your certificate image is saved in the public folder and matches this name!
//       { label: "Completion Certificate", url: "/public/assets/internship/scholarx-cert.jpg" } 
//     ]
//   }
// ]