import Image from 'next/image';
import Layout from '../components/Layout';

const Servicos = () => {
  return (
    <Layout
      title="Serviços de Fisioterapia em São Paulo | Vitor Vaz"
      description="Conheça os serviços oferecidos pelo fisioterapeuta Vitor Vaz: consultas presenciais na Clínica Pace, atendimentos domiciliares em São Paulo e teleconsultas para reabilitação de joelho e dor crônica."
    >
      <h1 className="text-4xl font-bold text-primary mb-8">Nossos Serviços</h1>
      {/* Presencial */}
      <section id="presencial" className="mt-8">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <Image
              src="/images/clinic-rehab.jpg"
              alt="Consulta presencial na Clínica Pace"
              width={500}
              height={350}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Consulta Presencial</h2>
            <p className="text-gray-700 mb-2">No consultório da <strong>Clínica Pace</strong>, em ambientes modernos e equipados, você receberá avaliação completa, diagnóstico funcional e tratamento personalizado para lesões de joelho, LCA, dores musculoesqueléticas e reabilitação pós-operatória.</p>
            <p className="text-gray-700">Endereços:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Rua Haddock Lobo, 1421 - Loja 08 - Mezanino, Cerqueira César, São Paulo【811834257920451†L64-L68】</li>
              <li>Rua Doutor Amâncio de Carvalho 182, Vila Mariana, São Paulo【811834257920451†L75-L76】</li>
            </ul>
            <p className="text-gray-700 mb-4">Os agendamentos são feitos individualmente, de acordo com sua disponibilidade.</p>
            <a href="https://wa.me/5511983437846" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-5 py-3 rounded-md hover:bg-secondary">Agendar presencial</a>
          </div>
        </div>
      </section>
      {/* Domiciliar */}
      <section id="domiciliar" className="mt-12">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-2xl font-semibold mb-4">Atendimento Domiciliar</h2>
            <p className="text-gray-700 mb-2">Para pacientes com dificuldade de locomoção ou que preferem comodidade, Vitor se desloca até seu domicílio levando equipamentos portáteis, fornecendo um tratamento seguro e eficaz.</p>
            <p className="text-gray-700 mb-4">Ideal para pós-operatório de LCA, reabilitação neuromuscular e tratamento de dor crônica.</p>
            <a href="https://wa.me/5511983437846" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-5 py-3 rounded-md hover:bg-secondary">Solicitar atendimento em casa</a>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <Image
              src="/images/home-visit.jpg"
              alt="Atendimento domiciliar de fisioterapia"
              width={500}
              height={350}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
      {/* Online */}
      <section id="online" className="mt-12">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <Image
              src="/images/teleconsulta.jpg"
              alt="Teleconsulta de fisioterapia"
              width={500}
              height={350}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Teleconsulta</h2>
            <p className="text-gray-700 mb-2">Através de videoconferência, você recebe orientação profissional, acompanhamento de exercícios e ajustes de tratamento sem sair de casa.</p>
            <p className="text-gray-700 mb-4">Excelente opção para dar continuidade ao tratamento quando viagens ou imprevistos impossibilitam a consulta presencial.</p>
            <a href="https://wa.me/5511983437846" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-5 py-3 rounded-md hover:bg-secondary">Agendar teleconsulta</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;