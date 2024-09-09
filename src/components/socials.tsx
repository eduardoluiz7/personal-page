import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

export function Socials() {
    return (
        <div className="flex space-x-4">
            <a 
                href="https://www.linkedin.com/in/eduardoluizs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-700 transition-colors duration-300"
            >
                <FaLinkedinIn size={32} />
            </a>
            <a 
                href="https://github.com/eduardoluiz7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
            >
                <FaGithub size={32} />
            </a>
            <a 
                href="https://instagram.com/eduardoluiz0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-pink-600 transition-colors duration-300"
            >
                <FaInstagram size={32} />
            </a>
            <a 
                href="https://facebook.com/eduardoluiz0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
                <FaFacebook size={32} />
            </a>
        </div>
    );
}