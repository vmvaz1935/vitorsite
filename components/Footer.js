const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        <div>
          <h4 className="font-semibold mb-2">Contato</h4>
          <p>WhatsApp: <a href="https://wa.me/5511983437846" target="_blank" rel="noopener noreferrer" className="text-primary">+55 11 98343-7846</a></p>
          <p>Email: <a href="mailto:contato@vitorvaz.com" className="text-primary">contato@vitorvaz.com</a></p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Clínica Pace</h4>
          <p>Rua Haddock Lobo, 1421 - Loja 08 - Mezanino, Cerqueira César, São Paulo</p>
          <p>Rua Doutor Amâncio de Carvalho, 182, Vila Mariana, São Paulo</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Links Rápidos</h4>
          <ul className="space-y-1">
            <li><a href="/servicos" className="hover:text-primary">Serviços</a></li>
            <li><a href="/sobre" className="hover:text-primary">Sobre</a></li>
            <li><a href="/blog" className="hover:text-primary">Blog</a></li>
            <li><a href="/contato" className="hover:text-primary">Contato</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 pb-4">
        © {new Date().getFullYear()} Vitor Vaz. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;