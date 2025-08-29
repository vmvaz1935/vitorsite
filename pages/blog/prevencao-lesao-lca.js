import Layout from '../../components/Layout';
import Head from 'next/head';

const PostLCA = () => {
  const title = 'Prevenção de lesão do LCA: guia prático para joelhos mais fortes';
  const description = 'Como reduzir o risco de lesão do ligamento cruzado anterior (LCA) com exercícios de força, equilíbrio e pliometria supervisionada.';
  return (
    <Layout title={title} description={description}>
      <Head>
        <meta name="keywords" content="lesão LCA, prevenção LCA, joelho, fisioterapia esportiva, fortalecimento" />
      </Head>
      <article className="prose max-w-none">
        <h1 className="text-3xl font-bold text-primary mb-4">{title}</h1>
        <p className="text-gray-700">O ligamento cruzado anterior (LCA) é essencial para a estabilidade do joelho. Embora nem toda lesão possa ser evitada, um programa estruturado de prevenção diminui significativamente o risco, especialmente em esportes com saltos, giros e mudanças rápidas de direção.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Por que o LCA se lesiona?</h2>
        <p className="text-gray-700">Geralmente, ocorre em movimentos de desaceleração, aterrissagens mal alinhadas e rotações do joelho com o pé fixo. Fraquezas em glúteos, isquiotibiais, core e déficits de controle neuromuscular aumentam o risco.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Pilares da prevenção</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Força</strong>: agachamentos, avanços e levantamentos com técnica guiada.</li>
          <li><strong>Controle neuromuscular</strong>: exercícios de equilíbrio unipodal e aterrissagens suaves.</li>
          <li><strong>Pliometria</strong>: saltos com foco em alinhamento de joelho e quadril.</li>
          <li><strong>Mobilidade</strong>: tornozelo e quadril livres para evitar compensações.</li>
          <li><strong>Educação</strong>: técnica de aterrissagem, progressão e recuperação adequadas.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Exemplo semanal (base)</h2>
        <p className="text-gray-700">2–3 sessões/semana, 30–45min, após aquecimento:</p>
        <ol className="list-decimal list-inside text-gray-700">
          <li>Agachamento + avanço (3×8–10)</li>
          <li>Elevação pélvica unilateral (3×10)</li>
          <li>Equilíbrio unipodal com perturbação (3×30s)</li>
          <li>Saltos verticais com foco em aterrissagem (3×8)</li>
          <li>Mobilidade tornozelo/quadril (5–8min)</li>
        </ol>
        <p className="text-gray-700 mt-4">Ajustes devem ser individualizados. Se você já teve lesão ou sente dor, procure avaliação profissional.</p>
        <div className="mt-8">
          <a href="https://wa.me/5511983437846?text=Ol%C3%A1%20Vitor%2C%20gostaria%20de%20prevenir%20les%C3%A3o%20do%20LCA" className="bg-primary text-white px-5 py-3 rounded-md hover:bg-secondary">Agende uma avaliação</a>
        </div>
      </article>
    </Layout>
  );
};

export default PostLCA;


