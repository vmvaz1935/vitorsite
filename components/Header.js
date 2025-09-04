import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaUserMd } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <FaUserMd className="text-2xl text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Vitor Vaz</h1>
              <p className="text-sm text-gray-600">Fisioterapeuta Especialista</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Início
            </Link>
            <Link 
              href="/sobre" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Sobre
            </Link>
            <Link 
              href="/servicos" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Serviços
            </Link>
            <Link 
              href="/contato" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2"
                onClick={closeMenu}
              >
                Início
              </Link>
              <Link 
                href="/sobre" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2"
                onClick={closeMenu}
              >
                Sobre
              </Link>
              <Link 
                href="/servicos" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2"
                onClick={closeMenu}
              >
                Serviços
              </Link>
              <Link 
                href="/contato" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 text-center"
                onClick={closeMenu}
              >
                Contato
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}