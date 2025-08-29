import Layout from '../../components/Layout';
import Link from 'next/link';

const Blog = () => {
  return (
    <Layout
      title="Blog de Fisioterapia – Dicas para Dor Crônica e Reabilitação de Joelho"
      description="Artigos informativos e dicas de prevenção para pacientes com dor crônica, lesões de joelho e recuperação pós-operatória. Acompanhe o blog do fisioterapeuta Vitor Vaz."
    >
      <h1 className="text-4xl font-bold text-primary mb-8">Blog</h1>
      <p className="mb-8 text-gray-700">Leia artigos escritos por Vitor Vaz sobre prevenção de lesões, reabilitação de joelho, tratamento de dor crônica e muito mais. Conteúdo atualizado regularmente para ajudá-lo(a) em todas as fases da recuperação.</p>
      <div className="space-y-6">
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2"><Link href="#">Prevenção de lesões de LCA: dicas para atletas e praticantes de esportes</Link></h2>
          <p className="text-gray-700">Descubra estratégias para fortalecer os músculos do joelho, melhorar a estabilidade e reduzir o risco de rompimento do ligamento cruzado anterior.</p>
        </article>
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2"><Link href="#">Como lidar com dor crônica: abordagem interdisciplinar</Link></h2>
          <p className="text-gray-700">Entenda a importância da fisioterapia, atividade física e educação em saúde no manejo da dor crônica e como retomar suas atividades diárias.</p>
        </article>
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2"><Link href="#">Reabilitação pós-operatória de cirurgia de joelho</Link></h2>
          <p className="text-gray-700">Saiba como é o processo de recuperação após cirurgias de menisco e ligamento, com foco na progressão gradual e no retorno seguro às atividades.</p>
        </article>
      </div>
    </Layout>
  );
};

export default Blog;