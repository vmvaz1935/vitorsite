const FloatingWhatsAppButton = () => {
  const handleClick = () => {
    try {
      window.gtag && window.gtag('event', 'cta_whatsapp_click', { placement: 'floating_button' });
    } catch (_) {}
  };

  return (
    <a
      href="https://wa.me/5511983437846?text=Ol%C3%A1%20Vitor%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o&utm_source=site&utm_medium=cta&utm_campaign=whatsapp_floating"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      aria-label="Abrir conversa no WhatsApp com Vitor Vaz"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12a11.96 11.96 0 003.508 8.5L0 24l3.602-1.316A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.385 17.254c-.228.643-1.333 1.238-1.87 1.318-.48.07-1.07.1-1.727-.108-.397-.124-.909-.275-1.578-.538-2.777-1.09-4.602-3.676-4.733-3.857-.133-.182-1.131-1.506-1.131-2.876 0-1.37.715-2.045.968-2.317.252-.27.538-.338.718-.338.18 0 .36.002.515.009.166.006.386-.062.602.455.228.53.776 1.841.844 1.971.067.133.112.29.022.472-.09.182-.134.29-.268.443-.134.15-.282.333-.401.45-.133.133-.272.277-.117.548.153.27.681 1.121 1.462 1.813 1.006.902 1.858 1.183 2.128 1.316.27.133.422.112.574-.067.153-.18.651-.756.825-1.015.18-.27.356-.225.602-.135.246.09 1.574.744 1.84.879.268.135.447.202.513.315.067.112.067.643-.161 1.285z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsAppButton;