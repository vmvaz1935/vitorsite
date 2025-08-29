import Layout from '../../components/Layout';
import Head from 'next/head';

const PostDorCronica = () => {
  const title = 'Como lidar com dor crônica: abordagem ativa e interdisciplinar';
  const description = 'Entenda como educação em dor, exercício físico progressivo e acompanhamento interdisciplinar ajudam a reduzir a dor crônica e recuperar funcionalidade.';
  return (
    <Layout title={title} description={description}>
      <Head>
        <meta name="keywords" content="dor crônica, educação em dor, fisioterapia, exercício, reabilitação" />
      </Head>
      <article className="prose max-w-none">
        <h1 className="text-3xl font-bold text-primary mb-4">{title}</h1>
        <p className="text-gray-700">Dor crônica é um fenômeno complexo, que envolve não apenas tecidos, mas também os sistemas nervoso e imunológico, além de fatores emocionais e ambientais. Uma abordagem ativa e informada é essencial.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">O que funciona</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Educação em dor</strong>: entender o mecanismo da dor altera a percepção e reduz medo/evitação.</li>
          <li><strong>Exercício graduado</strong>: fortalecimento, aeróbio e mobilidade com progressão e monitoramento de sintomas.</li>
          <li><strong>Rotina de sono e estresse</strong>: sono adequado e manejo do estresse melhoram a resposta ao exercício.</li>
          <li><strong>Interdisciplinaridade</strong>: integração com médicos, psicologia e nutrição quando indicado.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Como começar com segurança</h2>
        <ol className="list-decimal list-inside text-gray-700">
          <li>Defina metas funcionais realistas (ex.: caminhar 30min 3×/semana).</li>
          <li>Escolha exercícios que respeitem sua tolerância diária de sintomas.</li>
          <li>Monitore sinais de sobrecarga e ajuste volume/intensidade semanalmente.</li>
          <li>Inclua estratégias de relaxamento e higiene do sono.</li>
        </ol>
        <p className="text-gray-700 mt-4">A reabilitação deve ser personalizada. Uma avaliação ajuda a direcionar o plano e remover barreiras específicas.</p>
        <div className="mt-8">
          <a href="https://wa.me/5511983437846?text=Ol%C3%A1%20Vitor%2C%20preciso%20de%20ajuda%20com%20dor%20cr%C3%B4nica" className="bg-primary text-white px-5 py-3 rounded-md hover:bg-secondary">Falar com o Vitor</a>
        </div>
      </article>
    </Layout>
  );
};

export default PostDorCronica;


