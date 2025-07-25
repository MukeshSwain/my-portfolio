import {
  FaNodeJs,
  FaReact,
  FaPython,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiSocketdotio,
} from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white text-gray-800 border-t border-b border-indigo-100"
    >
      <div
        className="max-w-5xl mx-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-4xl font-extrabold mb-10 text-indigo-700">
          About Me
        </h2>

        {/* Bio */}
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          I’m a <strong>Full-Stack Developer</strong> specializing in the{" "}
          <strong>MERN stack</strong> with a passion for building robust
          backends, scalable systems, and AI-powered tools. I believe in the
          power of clean code, real-time tech, and intuitive design to solve
          real-world problems.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          I’ve worked on secure platforms with <strong>JWT auth</strong>,
          real-time communication using <strong>Socket.io</strong>, and data
          visualization via <strong>Recharts</strong>. My toolbelt includes
          <strong>
            {" "}
            Node.js, Express, React, MongoDB, Redux, Tailwind CSS, and Gemini AI
          </strong>
          .
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          I enjoy learning new technologies and contributing to impactful
          projects through backend architecture, API design, and collaborative
          teamwork.
        </p>

        {/* Tech Stack */}
        <div className="mt-12" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-bold text-indigo-700 mb-6">
            💻 Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-4xl">
            <FaNodeJs title="Node.js" className="text-[#68A063]" />
            <SiExpress title="Express.js" className="text-gray-700" />
            <FaReact title="React.js" className="text-[#61DBFB]" />
            <SiRedux title="Redux Toolkit" className="text-[#764ABC]" />
            <SiMongodb title="MongoDB" className="text-[#4DB33D]" />
            <FaDatabase
              title="SQL / MongoDB Atlas"
              className="text-[#f29111]"
            />
            <FaPython title="Python" className="text-[#3776AB]" />
            <SiTailwindcss title="Tailwind CSS" className="text-[#38B2AC]" />
            <SiSocketdotio title="Socket.io" className="text-gray-800" />
            <FaGithub title="GitHub" className="text-[#181717]" />
          </div>
        </div>

        {/* Fun Fact */}
        <div
          className="mt-12 text-center text-gray-600"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p>
            🚀 <span className="italic">Fun Fact:</span> I once debugged a cron
            job at 3 AM that was auto-emailing reminders to the wrong time zone
            😅
          </p>
        </div>

        {/* Call to Action */}
        <div
          className="mt-12 flex justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <a
            href="#contact"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition text-sm font-medium"
          >
            Contact Me
          </a>
          <a
            href="/MukeshSwainCV.pdf"
            download
            className="border border-indigo-600 px-6 py-3 rounded-md text-indigo-700 hover:bg-indigo-50 transition text-sm font-medium"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
