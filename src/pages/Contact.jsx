import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white text-gray-900 border-t border-indigo-100"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Have a question, project idea, or just want to connect? Reach out —
          I'm always happy to chat!
        </p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 text-left">
          {/* Email */}
          <div className="flex items-start gap-4 border p-4 rounded-lg shadow hover:shadow-md transition">
            <FaEnvelope className="text-indigo-600 text-2xl mt-1" />
            <div>
              <h4 className="text-sm font-semibold text-gray-600">Email</h4>
              <a
                href="mailto:mukeshswain2844@gmail.com"
                className="text-indigo-700 hover:underline text-base font-medium"
              >
                mukeshswain2844@gmail.com
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-start gap-4 border p-4 rounded-lg shadow hover:shadow-md transition">
            <FaLinkedin className="text-indigo-600 text-2xl mt-1" />
            <div>
              <h4 className="text-sm font-semibold text-gray-600">LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/mukesh-swain-0808ab2b5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 hover:underline text-base font-medium"
              >
                linkedin.com/in/mukesh-swain
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-start gap-4 border p-4 rounded-lg shadow hover:shadow-md transition">
            <FaGithub className="text-indigo-600 text-2xl mt-1" />
            <div>
              <h4 className="text-sm font-semibold text-gray-600">GitHub</h4>
              <a
                href="https://github.com/MukeshSwain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 hover:underline text-base font-medium"
              >
                github.com/MukeshSwain
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
