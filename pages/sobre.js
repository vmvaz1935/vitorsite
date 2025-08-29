import Image from 'next/image';
import Layout from '../components/Layout';

const Sobre = () => {
  return (
    <Layout
      title="Sobre o Fisioterapeuta Vitor Vaz"
      description="Conheça a trajetória, formação acadêmica e experiência profissional do fisioterapeuta Vitor Vaz, especialista em dor crônica e reabilitação de joelho."
    >
      <h1 className="text-4xl font-bold text-primary mb-8">Sobre Vitor Vaz</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <p className="text-gray-700 mb-4">Vitor Vaz é fisioterapeuta graduado pela Universidade Federal de São Paulo (UNIFESP) e doutor em Saúde Baseada em Evidências pela Escola Paulista de Medicina. Possui formação avançada em terapia manual (conceito Mulligan) e larga experiência na área traumato-ortopédica e esportiva através do Centro Interprofissional de Pesquisa e Estudo do Esporte associado à UNIFESP.</p>
          <p className="text-gray-700 mb-4">Especializado no tratamento de lesões do joelho – especialmente lesões do ligamento cruzado anterior (LCA) – Vitor tem paixão por ajudar pacientes com dor crônica a recuperar funcionalidade e qualidade de vida. Membro da SONAFE/COFFITO como especialista em fisioterapia esportiva, ele alia conhecimento científico e prática clínica para oferecer o melhor cuidado individualizado.</p>
          <p className="text-gray-700 mb-4">Sua filosofia de trabalho é baseada em evidências e na educação do paciente: explicar claramente a lesão, orientar exercícios de forma segura e adaptada e criar um plano de tratamento que respeite o ritmo de cada pessoa.</p>
          <p className="text-gray-700 mb-4">Além das consultas presenciais, Vitor oferece atendimento domiciliar e teleconsultas, garantindo acessibilidade e continuidade do tratamento para todos os pacientes. Entre em contato para saber como ele pode ajudar na sua recuperação.</p>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <Image
            src="/images/vitor3.jpg"
            alt="Fisioterapeuta Vitor Vaz em atendimento"
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="/images/clinic-rehab.jpg"
            alt="Clínica Pace"
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Sobre;