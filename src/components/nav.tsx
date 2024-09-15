import { useState } from "react";
import { Link } from 'react-router-dom';

export function Navbar () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

      return (
        <nav className="p-4 fixed w-full z-50">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-lime-300 text-xl font-bold">
              <Link to="/">EL</Link>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="text-lime-300 hover:text-gray-300">Home</Link>
              <Link to="/experiences" className="text-lime-300 hover:text-gray-300">Experiências</Link>
              <Link to="/skills" className="text-lime-300 hover:text-gray-300">Skills</Link>
              <Link to="/contact" className="text-lime-300 hover:text-gray-300">Contato</Link>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {/* Ícone de menu hambúrguer */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden">
              <a href="#" className="block text-white hover:bg-lime-300 p-2">About</a>
              <a href="#" className="block text-white hover:bg-lime-300 p-2">Services</a>
              <a href="#" className="block text-white hover:bg-lime-300 p-2">Contato</a>
            </div>
          )}
        </nav>
      );
}