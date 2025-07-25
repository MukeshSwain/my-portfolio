

import React from "react";

const projects = [
  {
    title: "AI-Powered Quiz Platform",
    image: "./quizapp.png", // AI/Data
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
    github: "https://github.com/MukeshSwain/AI-Powered-Quiz",
    live: "https://quizfrontend-swart.vercel.app",
  },
  {
    title: "Advanced Task Management App",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkX1H4pTeUpnA6ISqydGZA5aDpi3X7UZO-2Q&s", // productivity/task UI
    stack: ["MERN Stack", "Nodemailer", "node-cron", "JWT", "ShadCN UI"],
    summary:
      "A full-stack task management application with automated email reminders and a modern, user-friendly interface.",
    desc: [
      "Developed secure CRUD operations with JWT-based authentication.",
      "Utilized node-cron and Nodemailer for scheduled task reminder emails.",
      "Designed an accessible and responsive UI with ShadCN UI components.",
      "Built scalable RESTful APIs with MongoDB Atlas for persistent task storage.",
    ],
    github: "https://github.com/MukeshSwain/Advance-Todo-",
    live: "https://advance-todo-eight.vercel.app",
  },
  {
    title: "Real-Time Chat Application",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qbVMAdUgXTCKEZctDdDVKEnjtxrLT241oTytvE-2zNAWRFZMJKy12NSs9ffJ6yXRV4A&usqp=CAU", // messaging/chat
    stack: ["MERN Stack", "Socket.io", "Redux Toolkit", "JWT", "MongoDB"],
    summary:
      "A secure, scalable chat application enabling real-time messaging with persistent chat history and robust authentication.",
    desc: [
      "Enabled real-time communication using Socket.io for seamless messaging.",
      "Secured user sessions and routes with JWT authentication.",
      "Managed client-side state with Redux Toolkit for messages and sessions.",
      "Designed MongoDB schemas for efficient storage of chat history with timestamps.",
    ],
    github: "https://github.com/MukeshSwain/Full-Stack-Chat-App",
    live: "https://full-stack-chat-app-1-fs9k.onrender.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-indigo-800 tracking-tight">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(
            ({ title, image, stack, summary, desc, github, live }) => (
              <div
                key={title}
                className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`${title} Thumbnail`}
                  className="rounded-xl mb-4 h-48 w-full object-contain border border-gray-200 shadow-sm"
                />

                <h3 className="text-2xl font-semibold text-indigo-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="list-disc list-inside text-sm text-gray-700 mb-6 space-y-2">
                  {desc.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-6">
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold transition-colors flex items-center gap-1"
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold transition-colors flex items-center gap-1"
                  >
                    💻 GitHub
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
