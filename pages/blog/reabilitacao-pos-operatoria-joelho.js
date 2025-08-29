import Layout from '../../components/Layout';
import Head from 'next/head';

const PostPosOp = () => {
  const title = 'Reabilitação pós-operatória do joelho: fases e expectativas reais';
  const description = 'Entenda as fases da reabilitação após cirurgia de menisco ou LCA, metas por etapa e quando esperar retorno às atividades com segurança.';
  return (
    <Layout title={title} description={description}>
      <Head>
        <meta name="keywords" content="pós-operatório joelho, reabilitação, menisco, LCA, fisioterapia" />
      </Head>
      <article className="prose max-w-none">
        <h1 className="text-3xl font-bold text-primary mb-4">{title}</h1>
        <p className="text-gray-700">A recuperação cirúrgica do joelho segue fases com objetivos claros. O tempo total depende do procedimento, resposta individual e adesão ao plano.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Fase 1 – Proteção e mobilidade inicial</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Controle de dor e inchaço; extensão completa do joelho.</li>
          <li>Ativação de quadríceps e marcha assistida conforme orientação médica.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Fase 2 – Força e controle</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Fortalecimento progressivo de quadríceps, glúteos e panturrilhas.</li>
          <li>Equilíbrio, propriocepção e padrões de movimento.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Fase 3 – Capacidade funcional</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Cardiorrespiratório, saltos e trocas de direção graduais.</li>
          <li>Testes funcionais para critério de progressão.</li>
        </ul>
        <p className="text-gray-700 mt-4">Retorno ao esporte só deve ocorrer após critérios objetivos, não apenas pelo tempo de cirurgia. Acompanhe com fisioterapeuta para reduzir riscos.</p>
        <div className="mt-8">
          <a href="https://wa.me/5511983437846?text=Ol%C3%A1%20Vitor%2C%20gostaria%20de%20planejar%20minha%20reabilita%C3%A7%C3%A3o%20p%C3%B3s-operat%C3%B3ria" className="bg-primary text-white px-5 py-3 rounded-md hover:bg-secondary">Agendar pós-operatório</a>
        </div>
      </article>
    </Layout>
  );
};

export default PostPosOp;


