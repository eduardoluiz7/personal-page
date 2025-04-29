import { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Navbar () {

    const [isOpen, setIsOpen] = useState(false);
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const menuRef = useRef<HTMLDivElement | null>(null); 

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
      i18n.changeLanguage(event.target.value);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

      useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            isOpen && 
            menuRef.current && 
            !menuRef.current.contains(event.target as Node)
          ) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [isOpen]);

      return (
        <nav className="p-4 fixed w-full z-50">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-lime-300 text-xl font-bold">
              <Link to="/">EL</Link>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="text-lime-300 hover:text-gray-300">{t('nav.home')}</Link>
             {
              /* 
               <Link to="/experiences" className="text-lime-300 hover:text-gray-300">{t('nav.experience')}</Link>
              <Link to="/skills" className="text-lime-300 hover:text-gray-300">{t('nav.skills')}</Link>
              */
             }
              
              <Link to="/contact" className="text-lime-300 hover:text-gray-300">{t('nav.contact')}</Link>
              <span className="text-lime-300 m-0 p-0 border-none">|</span>
              <select
                value={i18n.language}
                onChange={changeLanguage}
                className="bg-inherit text-lime-300 border-none ml-4"
              >
                <option className="bg-zinc-900 text-lime-300" value="en">English</option>
                <option className="bg-zinc-900 text-lime-300" value="pt">Português</option>
              </select>
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
            <div ref={menuRef} className="bg-black md:hidden">
              <Link to="/" className="block text-white hover:bg-lime-300 p-2">{t('nav.home')}</Link>
              <Link to="/experiences" className="block text-white hover:bg-lime-300 p-2">{t('nav.experience')}</Link>
              <Link to="/skills" className="block text-white hover:bg-lime-300 p-2">{t('nav.skills')}</Link>
              <Link to="/contact" className="block text-white hover:bg-lime-300 p-2">{t('nav.contact')}</Link>
              <select
                value={i18n.language}
                onChange={changeLanguage}
                className="bg-inherit text-white border-none ml-4"
              >
                <option className="bg-zinc-900 text-white" value="en">English</option>
                <option className="bg-zinc-900 text-white" value="pt">Português</option>
              </select>
            </div>
          )}
        </nav>
      );
}