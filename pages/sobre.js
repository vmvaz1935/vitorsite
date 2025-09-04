import Head from 'next/head';
import Layout from '../components/Layout';
import { FaGraduationCap, FaAward, FaUserMd, FaHeart, FaRunning, FaBone, FaUsers, FaBook } from 'react-icons/fa';

export default function Sobre() {
  return (
    <Layout>
      <Head>
        <title>Sobre - Vitor Vaz | Fisioterapeuta Especialista</title>
        <meta name="description" content="Conheça Vitor Vaz, fisioterapeuta especialista em fisioterapia esportiva e traumato ortopédica. Formação, experiência e compromisso com a excelência no atendimento." />
        <meta name="keywords" content="sobre Vitor Vaz, fisioterapeuta, especialista, formação, experiência, fisioterapia esportiva, traumato ortopédica" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Vitor Vaz</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Fisioterapeuta especialista dedicado à excelência no cuidado e reabilitação de pacientes
            </p>
          </div>
        </div>
      </section>

      {/* Perfil Profissional */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfil Profissional</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    Vitor Vaz é um fisioterapeuta especialista com foco em <strong>fisioterapia esportiva</strong> e 
                    <strong> traumato ortopédica</strong>, dedicado a proporcionar o mais alto nível de cuidado 
                    e reabilitação para seus pacientes.
                  </p>
                  <p className="text-lg">
                    Com uma abordagem baseada em evidências científicas e atendimento humanizado, 
                    Vitor trabalha para garantir que cada paciente receba um tratamento personalizado, 
                    respeitando suas individualidades e objetivos específicos.
                  </p>
                  <p className="text-lg">
                    Sua especialização permite atender desde atletas de alto rendimento até pacientes 
                    com lesões musculoesqueléticas, sempre com o compromisso de promover a recuperação 
                    completa e o retorno às atividades cotidianas e esportivas.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-48 h-48 bg-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <FaUserMd className="text-6xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Vitor Vaz</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">
                    Fisioterapeuta Especialista
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p>• Fisioterapia Esportiva</p>
                    <p>• Traumato Ortopédica</p>
                    <p>• Reabilitação Funcional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especializações */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Especializações</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Áreas de atuação especializada com foco em resultados e excelência no atendimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <FaRunning className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Fisioterapia Esportiva</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Especialização focada na prevenção, tratamento e reabilitação de lesões relacionadas 
                à prática esportiva, atendendo atletas de todas as modalidades e níveis de performance.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Prevenção de lesões esportivas</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Reabilitação pós-lesão para retorno ao esporte</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Melhora de performance atlética</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Tratamento de lesões por overuse</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Preparação física preventiva</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-4 rounded-full mr-4">
                  <FaBone className="text-3xl text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Traumato Ortopédica</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Tratamento especializado de lesões musculoesqueléticas, fraturas, luxações e 
                outras condições ortopédicas, com foco na recuperação funcional completa.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Lesões musculoesqueléticas agudas e crônicas</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Reabilitação pós-operatória ortopédica</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Tratamento de dor crônica</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Reabilitação funcional</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Prevenção de recidivas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia de Trabalho */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Filosofia de Trabalho</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaHeart className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Atendimento Humanizado</h3>
                <p className="text-gray-600 leading-relaxed">
                  Cada paciente é único. Respeitamos as individualidades e trabalhamos 
                  de forma personalizada para alcançar os melhores resultados.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaBook className="text-3xl text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Baseado em Evidências</h3>
                <p className="text-gray-600 leading-relaxed">
                  Todos os tratamentos são fundamentados em evidências científicas 
                  e nas melhores práticas da fisioterapia moderna.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaUsers className="text-3xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Trabalho em Equipe</h3>
                <p className="text-gray-600 leading-relaxed">
                  Colaboramos com outros profissionais da saúde para garantir 
                  um cuidado integral e multidisciplinar.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
              <blockquote className="text-xl text-gray-700 italic leading-relaxed">
                "A fisioterapia vai além do tratamento de sintomas. É sobre restaurar a qualidade de vida, 
                promover o bem-estar e ajudar cada pessoa a alcançar seu potencial máximo de movimento e funcionalidade."
              </blockquote>
              <cite className="text-lg font-semibold text-gray-900 mt-4 block">
                - Vitor Vaz, Fisioterapeuta Especialista
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Compromisso com a Excelência</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Meu compromisso é oferecer o mais alto padrão de cuidado fisioterapêutico, 
              combinando conhecimento técnico especializado com um atendimento acolhedor 
              e personalizado para cada paciente.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Objetivos</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Promover a recuperação completa e funcional</li>
                  <li>• Prevenir recidivas e novas lesões</li>
                  <li>• Melhorar a qualidade de vida dos pacientes</li>
                  <li>• Retornar às atividades cotidianas e esportivas</li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Valores</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Ética profissional e transparência</li>
                  <li>• Atualização constante do conhecimento</li>
                  <li>• Respeito à individualidade de cada paciente</li>
                  <li>• Compromisso com resultados efetivos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pronto para iniciar seu tratamento?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato e agende sua consulta. Vamos trabalhar juntos para 
            alcançar seus objetivos de saúde e bem-estar.
          </p>
          <a 
            href="/contato" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg inline-block"
          >
            Agendar Consulta
          </a>
        </div>
      </section>
    </Layout>
  );
}