import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="text-center py-20 px-6 bg-gradient-to-b from-sky-100 via-white to-indigo-100 text-gray-900"
    >
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <img
          src="/mukesh.jpeg"
          alt="Mukesh Swain"
          className="w-36 h-36 rounded-full border-4 border-indigo-200 shadow-lg object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
        Mukesh Swain
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-gray-600 mt-2">
        Passionate Developer crafting modern web experiences
      </p>

      {/* Role */}
      <p className="text-lg sm:text-xl mt-4 text-indigo-700 font-medium">
        Full-Stack MERN Developer (Backend Focus)
      </p>

      {/* Description */}
      <p className="mt-6 max-w-2xl mx-auto text-gray-700 text-base sm:text-lg">
        I build secure, scalable, and intelligent web applications using the
        MERN stack, real-time communication (Socket.IO), and AI integrations for
        enhanced UX and functionality.
      </p>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md shadow hover:bg-indigo-700 transition"
        >
          View Projects
        </a>

        <a
          href="/MukeshSwainCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-indigo-600 px-6 py-2 rounded-md text-indigo-600 hover:bg-indigo-50 transition"
        >
          View Resume
        </a>

        <a
          href="/MukeshSwainCV.pdf"
          download
          className="border border-indigo-600 px-6 py-2 rounded-md text-indigo-600 hover:bg-indigo-50 transition"
        >
          Download Resume
        </a>

        <a
          href="https://github.com/MukeshSwain"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="flex items-center justify-center border border-indigo-600 px-3 py-2 rounded-md text-indigo-600 hover:bg-indigo-50 transition text-xl hover:scale-105"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Hero;
