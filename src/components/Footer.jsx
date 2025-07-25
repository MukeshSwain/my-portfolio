import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-50 border-t border-indigo-100 text-center py-6 mt-10 text-sm text-gray-600">
      <div className="flex justify-center gap-4 mb-2 text-indigo-600 text-xl">
        <a
          href="https://github.com/MukeshSwain"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-800"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mukesh-swain-0808ab2b5"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-800"
        >
          <FaLinkedin />
        </a>
      </div>

      <p>© {new Date().getFullYear()} Mukesh Swain. All rights reserved.</p>
      <a href="#hero" className="text-indigo-500 hover:underline mt-1 block">
        Back to top ↑
      </a>
    </footer>
  );
};

export default Footer;
