import { useState } from "react";
import { FaCode, FaTools, FaServer, FaLaptopCode } from "react-icons/fa";

const skills = {
  Languages: ["JavaScript", "Java (basic)", "Python", "SQL"],
  Frontend: ["React.js", "Redux", "Tailwind CSS", "HTML", "CSS", "ShadCN UI"],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT",
    "MongoDB",
    "MySQL",
    "Flask",
  ],
  Tools: ["Postman", "Git", "GitHub", "Docker (basic)", "Linux", "Nodemailer"],
};

const categoryIcons = {
  Languages: <FaCode className="inline-block mr-2 text-indigo-600" />,
  Frontend: <FaLaptopCode className="inline-block mr-2 text-indigo-600" />,
  Backend: <FaServer className="inline-block mr-2 text-indigo-600" />,
  Tools: <FaTools className="inline-block mr-2 text-indigo-600" />,
};

const Skills = () => {
  const categories = Object.keys(skills);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-indigo-50 text-gray-800 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-indigo-700">
          Skills & Technologies
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition duration-200 focus:outline-none ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                  : "text-indigo-700 border-indigo-300 hover:bg-indigo-100"
              }`}
              aria-pressed={activeCategory === cat}
            >
              {categoryIcons[cat]}
              {cat}
            </button>
          ))}
        </div>

        {/* Skill List */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-xl mx-auto shadow-md">
          <div className="flex items-center justify-center mb-4 text-lg font-semibold text-indigo-700">
            {categoryIcons[activeCategory]}
            <span>{activeCategory}</span>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {skills[activeCategory].map((skill) => (
              <li
                key={skill}
                className="py-1.5 px-3 rounded-md bg-indigo-100 text-indigo-800 font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
