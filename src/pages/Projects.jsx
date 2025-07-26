

import React, { useState } from "react";

const projects = [
  {
    title: "AI-Powered Quiz Platform",
    image: "./quizapp.png",
    stack: [
      "MERN Stack",
      "Gemini AI",
      "Redux Toolkit",
      "JWT",
      "Tailwind CSS",
      "Recharts",
    ],
    summary:
      "A dynamic quiz platform leveraging AI to generate personalized multiple-choice questions with comprehensive performance analytics.",
    desc: [
      "Integrated Gemini AI API for real-time, prompt-driven quiz generation.",
      "Implemented secure JWT-based authentication with Redux Toolkit for state management.",
      "Tracked quiz results with detailed metrics including timestamps, accuracy, and performance history.",
      "Visualized user performance with interactive charts using Recharts.",
    ],
    why: "To help learners practice dynamically generated quizzes using AI with detailed performance analysis.",
    features: [
      "AI-generated quizzes",
      "Real-time performance tracking",
      "Secure login and user dashboard",
    ],
    challenges: [
      "Prompt engineering for accurate questions",
      "Managing state and auth securely",
    ],
    github: "https://github.com/MukeshSwain/AI-Powered-Quiz",
    live: "https://quizfrontend-swart.vercel.app",
  },
  {
    title: "Advanced Task Management App",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkX1H4pTeUpnA6ISqydGZA5aDpi3X7UZO-2Q&s",
    stack: ["MERN Stack", "Nodemailer", "node-cron", "JWT", "ShadCN UI"],
    summary:
      "A full-stack task management application with automated email reminders and a modern, user-friendly interface.",
    desc: [
      "Developed secure CRUD operations with JWT-based authentication.",
      "Utilized node-cron and Nodemailer for scheduled task reminder emails.",
      "Designed an accessible and responsive UI with ShadCN UI components.",
      "Built scalable RESTful APIs with MongoDB Atlas for persistent task storage.",
    ],
    why: "To help users manage and track tasks with timely reminders to increase productivity.",
    features: ["Email reminders", "Responsive UI", "Secure task management"],
    challenges: [
      "Scheduling and sending emails reliably",
      "Handling auth in multiple UI flows",
    ],
    github: "https://github.com/MukeshSwain/Advance-Todo-",
    live: "https://advance-todo-eight.vercel.app",
  },
  {
    title: "Real-Time Chat Application",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qbVMAdUgXTCKEZctDdDVKEnjtxrLT241oTytvE-2zNAWRFZMJKy12NSs9ffJ6yXRV4A&usqp=CAU",
    stack: ["MERN Stack", "Socket.io", "zustand", "JWT", "MongoDB"],
    summary:
      "A secure, scalable chat application enabling real-time messaging with persistent chat history and robust authentication.",
    desc: [
      "Enabled real-time communication using Socket.io for seamless messaging.",
      "Secured user sessions and routes with JWT authentication.",
      "Managed client-side state with zustand for messages and sessions.",
      "Designed MongoDB schemas for efficient storage of chat history with timestamps.",
    ],
    why: "To build a lightweight, scalable chat solution with real-time experience.",
    features: [
      "Real-time messaging",
      "Persistent chat history",
      "JWT-based secured routing",
    ],
    challenges: [
      "Socket event handling",
      "Syncing message history efficiently",
    ],
    github: "https://github.com/MukeshSwain/Full-Stack-Chat-App",
    live: "https://full-stack-chat-app-1-fs9k.onrender.com",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-indigo-800 tracking-tight">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={`${project.title} Thumbnail`}
                className="rounded-xl mb-4 h-48 w-full object-contain border border-gray-200 shadow-sm"
              />

              <h3 className="text-2xl font-semibold text-indigo-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-2">
                {project.desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="text-sm text-gray-800 mb-2">
                <p className="font-semibold">🎯 Why this idea?</p>
                <p className="mb-2">{project.why}</p>

                <p className="font-semibold">✨ Key Features</p>
                <ul className="list-disc list-inside mb-2">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <p className="font-semibold">🛠️ Stack & Architecture</p>
                <p className="mb-2">{project.stack.join(", ")}</p>

                <p className="font-semibold">🚧 Challenges & Learnings</p>
                <ul className="list-disc list-inside">
                  {project.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-6 mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold transition-colors flex items-center gap-1"
                >
                  🔗 Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold transition-colors flex items-center gap-1"
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
