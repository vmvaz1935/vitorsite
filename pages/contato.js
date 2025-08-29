import { useState } from 'react';
import Layout from '../components/Layout';

const Contato = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', consent: false });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    if (!form.consent) {
      setStatus('É necessário consentir com a Política de Privacidade.');
      return;
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus('Mensagem enviada com sucesso!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Erro ao enviar. Tente novamente mais tarde.');
      }
    } catch (err) {
      setStatus('Erro ao enviar.');
    }
  };

  return (
    <Layout
      title="Contato | Fisioterapeuta Vitor Vaz"
      description="Entre em contato com o fisioterapeuta Vitor Vaz para agendar sua avaliação, tirar dúvidas ou solicitar atendimento domiciliar e online."
    >
      <h1 className="text-4xl font-bold text-primary mb-8">Entre em Contato</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium mb-1">Mensagem</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            ></textarea>
          </div>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              required
              className="mt-1"
            />
            <label htmlFor="consent" className="text-sm text-gray-700">
              Li e concordo com a <a href="/politica-de-privacidade" className="text-primary underline">Política de Privacidade</a> e os <a href="/termos-de-uso" className="text-primary underline">Termos de Uso</a>.
            </label>
          </div>
          <button type="submit" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary">
            Enviar mensagem
          </button>
          {status && <p className="text-gray-600 mt-2">{status}</p>}
        </form>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Informações de Contato</h2>
          <p>WhatsApp: <a href="https://wa.me/5511983437846" target="_blank" rel="noopener noreferrer" className="text-primary">+55 11 98343-7846</a></p>
          <p>Email: <a href="mailto:contato@vitorvaz.com" className="text-primary">contato@vitorvaz.com</a></p>
          <p>Endereços:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Rua Haddock Lobo, 1421 - Loja 08 - Mezanino, Cerqueira César, São Paulo</li>
            <li>Rua Doutor Amâncio de Carvalho 182, Vila Mariana, São Paulo</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Contato;