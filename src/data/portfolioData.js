// ─────────────────────────────────────────────────────────────────────────
// portfolioData.js
// Single source of truth for all content on the site. Components import
// from here rather than hard-coding copy, so the page can be updated by
// editing data, not JSX.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Krishna Tiwari',
  role: 'Computer Science & Engineering Student',
  tagline: 'Building systems that leave the ground — from orbital simulations to full-stack AI apps.',
  location: 'Bengaluru, India',
  email: 'krishna.tiwaricap@gmail.com',
  status: 'Open to internships & collaborations',
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'CMR University',
    period: '2024 – 2028',
  },
}

// Nav sections drive both the floating dock and the scroll-spy highlighting.
export const navSections = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'extracurricular', label: 'Beyond Code' },
  { id: 'contact', label: 'Contact' },
]

// Skill matrix, grouped by category. Each skill can optionally carry a
// "note" used as a small telemetry-style annotation.
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

// Projects power the bento grid. `size` controls the grid span in
// Projects.jsx — "hero" spans 2x2, everything else is a single cell.
export const projects = [
  {
    id: 'orbitlab',
    size: 'hero',
    name: 'OrbitLab',
    tag: 'Hero Project · Orbital Mechanics',
    description:
      'A 3D simulation platform for satellite engineering and orbital mechanics, built for live trajectory modeling and mission visualization.',
    details:
      'Spearheaded a 4-member hackathon team across India Innovation, AMD Slingshot, and Microsoft Imagine Cup.',
    stack: ['JavaScript', '3D Web Simulation', 'Azure Static Web Apps'],
    accent: 'cyan',
  },
  {
    id: 'nutrition-ai',
    size: 'md',
    name: 'AI-Powered Nutrition Application',
    tag: 'Full-Stack · Applied AI',
    description:
      'Full-stack React & Tailwind web app that parses natural-language meal descriptions into structured macronutrient data.',
    details: 'Backed by Supabase Edge Functions (Deno) and the Google Gemini API for NLP parsing.',
    stack: ['React', 'Tailwind CSS', 'Supabase Edge Functions', 'Gemini API'],
    accent: 'emerald',
  },
  {
    id: 'fire-gas-detection',
    size: 'md',
    name: 'Fire and Gas Detection System',
    tag: 'Embedded · Computer Vision',
    description:
      'Arduino Uno hardware integration with gas sensors and low-level serial communication for real-time environmental sensing.',
    details: 'Paired with a Python + OpenCV computer-vision layer for visual flame detection.',
    stack: ['Arduino Uno', 'Serial Communication', 'Python', 'OpenCV'],
    accent: 'indigo',
  },
  {
    id: 'expense-tracker',
    size: 'sm',
    name: 'Expense Tracker Desktop System',
    tag: 'Desktop · Core Java',
    description: 'A standalone Java desktop system for tracking expenses using File I/O streams and string-parsing algorithms.',
    details: 'Focused on clean parsing logic and persistent local file storage.',
    stack: ['Java', 'File I/O', 'String Parsing'],
    accent: 'indigo',
  },
  {
    id: 'maze-runner',
    size: 'sm',
    name: 'Maze Runner Game',
    tag: 'Desktop Game · AI Pathfinding',
    description: 'A desktop game built with Python and Pygame, featuring automated enemy pathfinding and dynamic maze generation.',
    details: 'Enemy agents navigate procedurally generated mazes in real time.',
    stack: ['Python', 'Pygame', 'Pathfinding AI'],
    accent: 'cyan',
  },
]

// Certificates back the grid + inspection modal.
//
// To attach proof images: drop a file into `public/assets/certificates/`
// and point `image` at it, e.g. `/assets/certificates/toc.jpg`. Any of
// jpg / png / webp work. Leave `image: null` and the modal falls back to
// a placeholder "Verified Credential" panel automatically — nothing else
// needs to change.
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

// Extracurricular / leadership log — framed as a mission log, in keeping
// with the site's telemetry motif.
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

// Resume download — see public/assets/resume/README.md for the exact
// filename to upload. Contact.jsx's "Download CV" card checks this file
// exists before triggering the download, so nothing breaks if it's
// missing yet.
export const resume = {
  url: '/assets/resume/KrishnaTiwari_Resume.pdf',
  filename: 'KrishnaTiwari_Resume.pdf',
}

export const socials = {
  email: `mailto:${profile.email}`,
  phone: `tel:${profile.phone.replace(/\s+/g, '')}`,
  github: 'https://github.com/Krishnatiwari1909',
  linkedin: 'https://www.linkedin.com/in/krishna-tiwari-87906b335',
}
