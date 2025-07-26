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

        {/* Intro */}
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          I’m a <strong>Full-Stack Developer</strong> specialized in the{" "}
          <strong>MERN stack</strong> with a strong focus on backend
          development, real-time features, and building scalable systems.
        </p>

        {/* Highlights */}
        <div className="text-left max-w-3xl mx-auto text-gray-700 text-base sm:text-lg space-y-4 mb-8">
          <ul className="list-disc list-inside space-y-2">
            <li>
              💡 I create secure and maintainable APIs using{" "}
              <strong>Node.js</strong> and <strong>Express.js</strong>
            </li>
            <li>
              🧠 I’ve implemented <strong>JWT authentication</strong>, real-time
              communication via <strong>Socket.io</strong>, and AI-enhanced
              tools using APIs like Gemini
            </li>
            <li>
              📊 Proficient in data-driven components with libraries like{" "}
              <strong>Recharts</strong>
            </li>
            <li>
              ⚡ Focused on performance, clean code, and team-friendly
              architecture
            </li>
          </ul>
        </div>

        {/* Soft Skills */}
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          I'm a fast learner, an open communicator, and deeply value working in
          collaborative environments where feedback and ownership go hand in
          hand. I thrive on shipping real-world solutions and improving
          developer experience.
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

        {/* CTA */}
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
