import React from "react";
import { FaFacebookF,FaGithub,FaTwitter,FaYoutube } from "react-icons/fa";
import logo from '../../assets/StudyNotion-logo-light.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8">
        {/* Company */}
        <div>
          <div className="mb-3">
          <img src={logo} alt="" width={180}  />
          </div>
          <h2 className="font-bold mb-4 text-lg">Company</h2>
          <ul className="space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Affiliates</li>
          </ul>
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#" aria-label="Facebook"><FaFacebookF className="hover:text-gray-400 transition-colors duration-200" /></a>
            <a href="#" aria-label="GitHub"><FaGithub className="hover:text-gray-400 transition-colors duration-200" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="hover:text-gray-400 transition-colors duration-200" /></a>
            <a href="#" aria-label="YouTube"><FaYoutube className="hover:text-gray-400 transition-colors duration-200" /></a>
        </div>

        </div>

        {/* Resources */}
        <div>
          <h2 className="font-bold mb-4 text-lg">Resources</h2>
          <ul className="space-y-2">
            <li>Articles</li>
            <li>Blog</li>
            <li>Cheat Sheets</li>
            <li>Code Challenges</li>
            <li>Docs</li>
            <li>Projects</li>
            <li>Videos</li>
            <li>Workspace</li>
          </ul>
        </div>

        {/* Plans */}
        <div>
          <h2 className="font-bold mb-4 text-lg">Plans</h2>
          <ul className="space-y-2">
            <li>Plan Information</li>
            <li>For Students</li>
            <li>Business Solutions</li>
          </ul>
          <h3 className="font-semibold mt-4 mb-2">Community</h3>
          <ul className="space-y-2">
            <li>Forums</li>
            <li>Chapters</li>
            <li>Events</li>
          </ul>
        </div>

        {/* Subjects */}
        <div>
          <h2 className="font-bold mb-4 text-lg">Subjects</h2>
          <ul className="space-y-2 text-sm">
            <li>AI</li>
            <li>Basics Computing</li>
            <li>Code Foundations</li>
            <li>Computer Science</li>
            <li>Cybersecurity</li>
            <li>Data Analysis</li>
            <li>Data Science</li>
            <li>Data Visualization</li>
            <li>Developer Tools</li>
            <li>DevOps</li>
            <li>Game Development</li>
            <li>IT</li>
            <li>Machine Learning</li>
            <li>Math</li>
            <li>Mobile Development</li>
            <li>Web Design</li>
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h2 className="font-bold mb-4 text-lg">Languages</h2>
          <ul className="space-y-2 text-sm">
            <li>Bash</li>
            <li>C</li>
            <li>C++</li>
            <li>C#</li>
            <li>Go</li>
            <li>HTML & CSS</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Kotlin</li>
            <li>PHP</li>
            <li>Python</li>
            <li>R</li>
            <li>Ruby</li>
            <li>SQL</li>
            <li>Swift</li>
          </ul>
        </div>

        {/* Career Building */}
        <div>
          <h2 className="font-bold mb-4 text-lg">Career Building</h2>
          <ul className="space-y-2 text-sm">
            <li>Career Paths</li>
            <li>Career Services</li>
            <li>Interview Prep</li>
            <li>Professional Certification</li>
            <li>Full Catalog</li>
            <li>Build Content</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
