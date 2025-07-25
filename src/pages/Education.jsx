import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50 text-gray-900 border-t border-indigo-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-indigo-700">
          <span className="inline-flex items-center gap-2">
            <FaGraduationCap className="text-indigo-500" />
            Education
          </span>
        </h2>

        <div className="grid gap-10 sm:gap-8 md:grid-cols-2">
          {/* MSc */}
          <div className="relative border-l-4 border-indigo-300 pl-6 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700">
              Master of Science (M.Sc.) in Computer Science
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-1 mb-3">
              City College of Management and Science, Vikram Dev University
            </p>
            <span className="inline-block bg-indigo-100 text-indigo-700 text-xs sm:text-sm font-medium px-3 py-1 rounded-full">
              2023 – 2025
            </span>
          </div>

          {/* BSc */}
          <div className="relative border-l-4 border-indigo-300 pl-6 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700">
              Bachelor of Science (B.Sc.) in Information Technology
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-1 mb-3">
              Rayagada Autonomous College, Berhampur University
            </p>
            <span className="inline-block bg-indigo-100 text-indigo-700 text-xs sm:text-sm font-medium px-3 py-1 rounded-full">
              2020 – 2023
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
