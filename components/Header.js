import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold text-primary">Vitor&nbsp;Vaz</span>
        </Link>
        <button
          className="sm:hidden text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
          onClick={toggleMenu}
          aria-label="Abrir menu de navegação"
          aria-expanded={isOpen}
          aria-controls="menu-principal"
        >
          ☰
        </button>
        <nav
          id="menu-principal"
          className={`${isOpen ? 'block' : 'hidden'} sm:flex space-y-2 sm:space-y-0 sm:space-x-6 text-gray-700 font-medium`}
        >
          <Link href="/" className="hover:text-primary">Início</Link>
          <Link href="/servicos" className="hover:text-primary">Serviços</Link>
          <Link href="/sobre" className="hover:text-primary">Sobre</Link>
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <Link href="/contato" className="hover:text-primary">Contato</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;