export interface Project {
  id: string
  name: string
  description: string
  longDescription: string
  image: string
  images: string[]
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
  category: string
  challenges?: string[]
  features: string[]
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'AskPDF',
    description: 'AskPDF is a simple RAG app using LangChain that lets you upload PDFs and ask questions with help from Google Gemini AI.',
    longDescription: 'A smart PDF question-answering application that lets you upload PDF documents and ask questions about their content using AI. Built with React, Express, and Google Gemini AI.',
    image: 'https://github.com/user-attachments/assets/04952cd9-0d2d-4b07-9929-5e22bd55e6ec',
    images: [
      'https://github.com/user-attachments/assets/04952cd9-0d2d-4b07-9929-5e22bd55e6ec',
    ],
    technologies: ['React', 'TypeScript', 'LangChain', 'PostgreSQL', 'Redis', 'Google Gemini AI'],
    liveUrl: 'https://askpdf-vlti.onrender.com/',
    githubUrl: 'https://github.com/partiksingh1/AskPDF',
    featured: true,
    category: 'AI Agent',
    features: [
      'Upload PDF files and extract text content',
      'Ask questions about your PDFs and get intelligent answers',
      'Create up to 3 separate chat sessions for different documents',
      'Find relevant content from your documents using embeddings',
    ]
  },
  {
    id: '2',
    name: 'BlogZone',
    description: 'A modern web app for tracking and managing blog posts with a clean, easy-to-use interface.',
    longDescription: 'Blogs Zone is a complete web application that helps users organize all their blog content in one place. It is built with modern technologies and offers a smooth experience across all devices. Users can create accounts, write and manage their blog posts, and enjoy features like AI-powered content summarization. The app has both light and dark themes and works great on phones, tablets, and computers.',
    image: 'https://github.com/user-attachments/assets/bb5fe26a-aeec-451d-8f20-3ec13ff2f897',
    images: [
      'https://github.com/user-attachments/assets/2e1dc2bb-b4e9-440b-a13c-6197146ee155',
      'https://github.com/user-attachments/assets/b8961e71-5d58-432c-8c5f-83249e6a594c',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Gemini AI'],
    liveUrl: 'https://blogzone-8chd.onrender.com/',
    githubUrl: 'https://github.com/partiksingh1/Blogs-Tracker',
    featured: true,
    category: 'Web Application',
    features: [
      'AI-Powered: Smart blog post summarization',
      'User Accounts: Secure login and personal dashboards',
      'Blog Management: Create, edit, and organize blog posts',
      'Theme Options: Switch between light and dark modes',
    ]
  },
  {
    id: '3',
    name: 'TopicTalk',
    description: 'Anonymous Topic Chat App',
    longDescription: 'An open, ephemeral, anonymous real-time chat application where users can create topic-based chat rooms',
    image: 'https://github.com/user-attachments/assets/3b251d20-2be7-4cc3-ab65-271e4140d490',
    images: [
      'https://github.com/user-attachments/assets/cd3aa440-3b23-43c5-96b9-45511816c469',
    ],
    technologies: ['React', 'WebSocket', 'Cron Jobs'],
    liveUrl: 'https://topictalk-vdbgrq.fly.dev/',
    githubUrl: 'https://github.com/partiksingh1/TopicTalk',
    featured: true,
    category: 'Web Application',
    features: [
      'Real-time WebSocket chat (using ws)',
      'Anonymous names per device',
      'Multiple topic rooms',
      'Automatic message cleanup after 24 hours ',
      'REST API for room & message management',
    ]
  },
  {
    id: '4',
    name: 'SmartBank',
    description: 'Secure, full-featured digital banking platform developed with Java Spring Boot',
    longDescription: 'A secure, full-featured digital banking platform built with Spring Boot, providing REST APIs for user management, account operations, and transaction processing.',
    image: 'https://github.com/user-attachments/assets/8b6eb30b-3515-4361-af56-c3269a90a6ed',
    images: [
      'https://github.com/user-attachments/assets/ec966f42-b5a6-49d1-ac43-2870ca3f9575',
      'https://github.com/user-attachments/assets/b3d92eb4-0173-4e1b-9747-77d42ab8d8eb',
      'https://github.com/user-attachments/assets/ee090774-0082-4cda-97d0-416148aca853'
    ],
    technologies: ['Java Springboot', 'React', 'PostgreSQL'],
    liveUrl: 'https://github.com/partiksingh1/smartbank',
    githubUrl: 'https://github.com/partiksingh1/smartbank',
    featured: true,
    category: 'Web Application',
    features: [
      'Secure registration, JWT authentication, and encrypted password storage',
      'Multiple account types, real-time balance tracking, and account lookup',
      'Money transfers, transaction status tracking, and multiple transaction types.',
      'JWT authentication, password encryption and email verification,',
    ]
  }
]

export function getProject(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}