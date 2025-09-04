import Link from 'next/link';
import { FaUserMd, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <FaUserMd className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Vitor Vaz</h3>
                <p className="text-gray-400">Fisioterapeuta Especialista</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Fisioterapeuta especialista em fisioterapia esportiva e traumato ortopédica, 
              dedicado a proporcionar o mais alto nível de cuidado e reabilitação para seus pacientes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-pink-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-xl font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">contato@vitorvaz.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Especialidades */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold mb-4">Especialidades</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                Fisioterapia Esportiva
              </span>
              <span className="bg-green-600 px-4 py-2 rounded-full text-sm font-medium">
                Traumato Ortopédica
              </span>
              <span className="bg-purple-600 px-4 py-2 rounded-full text-sm font-medium">
                Reabilitação Funcional
              </span>
              <span className="bg-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                Prevenção de Lesões
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Vitor Vaz - Fisioterapeuta Especialista em Fisioterapia Esportiva e Traumato Ortopédica. 
            Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desenvolvido com ❤️ para promover saúde e bem-estar
          </p>
        </div>
      </div>
    </footer>
  );
}