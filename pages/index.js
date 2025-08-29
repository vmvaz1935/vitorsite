import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout
      title="Fisioterapia em São Paulo – Especialista em Joelho e Dor Crônica | Vitor Vaz"
      description="Recupere-se com o fisioterapeuta Vitor Vaz, especialista em lesão de ligamento cruzado anterior (LCA), dor crônica e reabilitação de joelho em São Paulo. Agende sua avaliação agora."
    >
      {/* Hero Section */}
      <section className="bg-accent py-16 px-6 rounded-xl flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Reabilitação de Joelho e Dor Crônica em São Paulo
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Com abordagem baseada em evidências, Vitor&nbsp;Vaz oferece tratamento personalizado para lesões de LCA, dores crônicas e recuperação pós-operatória. Atendimentos presenciais, domiciliares e online para sua comodidade.
          </p>
          <Link href="/contato" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors">
            Agende sua avaliação
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/vitor1.jpg"
            alt="Fisioterapeuta Vitor Vaz"
            width={450}
            height={450}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Services Overview */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-primary mb-6">Serviços em Destaque</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Consulta Presencial</h3>
            <p className="text-gray-700 mb-4">Sessões personalizadas na Clínica Pace, com foco em reabilitação de joelho, lesões de LCA e dor crônica.</p>
            <Link href="/servicos#presencial" className="text-primary hover:underline">Saiba mais →</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Atendimento Domiciliar</h3>
            <p className="text-gray-700 mb-4">Conforto e conveniência: Vitor atende você em casa, levando todos os equipamentos necessários para sua recuperação.</p>
            <Link href="/servicos#domiciliar" className="text-primary hover:underline">Saiba mais →</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Teleconsulta</h3>
            <p className="text-gray-700 mb-4">Orientações e acompanhamento online para pacientes que buscam apoio remoto e contínuo.</p>
            <Link href="/servicos#online" className="text-primary hover:underline">Saiba mais →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-primary mb-6">O que dizem os pacientes</h2>
        <div className="space-y-6">
          <blockquote className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-800 mb-2">“Vitor é muito mais do que um fisioterapeuta! Ele se torna parceiro de jornada com disponibilidade e comunicação super-motivacional. Altíssima competência e flexibilidade.”</p>
            <cite className="text-gray-600">— Opinião de paciente (29 de maio de 2025)【811834257920451†L331-L335】</cite>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-800 mb-2">“O Vitor é atencioso, atento e cuidadoso. Chegava com dor e ele sempre foi atento às minhas queixas.”</p>
            <cite className="text-gray-600">— Sandra, 15 de abril de 2025【811834257920451†L380-L383】</cite>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-800 mb-2">“Foi fundamental para minha melhora, atencioso e sabia muito do que estava falando.”</p>
            <cite className="text-gray-600">— Luka Ferreira, 25 de fevereiro de 2025【811834257920451†L427-L433】</cite>
          </blockquote>
        </div>
      </section>

      {/* About Preview */}
      <section className="mt-12 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <Image
            src="/images/vitor2.jpg"
            alt="Vitor Vaz em sessão de fisioterapia"
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-primary mb-4">Sobre o Fisioterapeuta</h2>
          <p className="text-gray-700 mb-4">Formado pela Universidade Federal de São Paulo e doutor em Saúde Baseada em Evidências, Vitor possui especialização em fisioterapia esportiva e ampla experiência em reabilitação de lesões de joelho e dor crônica【811834257920451†L88-L107】.</p>
          <Link href="/sobre" className="text-primary hover:underline">Conheça mais sobre Vitor →</Link>
        </div>
      </section>

    </Layout>
  );
}