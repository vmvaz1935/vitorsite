import Head from 'next/head';
import Layout from '../components/Layout';
import { 
  FaRunning, 
  FaBone, 
  FaHeartbeat, 
  FaUserMd, 
  FaDumbbell, 
  FaStethoscope,
  FaChartLine,
  FaShieldAlt,
  FaHandsHelping,
  FaClock,
  FaCheckCircle
} from 'react-icons/fa';

export default function Servicos() {
  return (
    <Layout>
      <Head>
        <title>Serviços - Vitor Vaz | Fisioterapia Esportiva e Traumato Ortopédica</title>
        <meta name="description" content="Conheça os serviços de fisioterapia esportiva e traumato ortopédica oferecidos por Vitor Vaz. Tratamentos especializados para atletas e pacientes com lesões musculoesqueléticas." />
        <meta name="keywords" content="serviços fisioterapia, fisioterapia esportiva, traumato ortopédica, tratamentos, reabilitação, Vitor Vaz" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Tratamentos especializados em fisioterapia esportiva e traumato ortopédica
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Especialidades</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos tratamentos especializados com foco em resultados e recuperação completa
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Fisioterapia Esportiva */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-4 rounded-full mr-4">
                  <FaRunning className="text-3xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Fisioterapia Esportiva</h3>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Especialização focada na prevenção, tratamento e reabilitação de lesões relacionadas 
                à prática esportiva, atendendo atletas de todas as modalidades e níveis.
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <FaShieldAlt className="text-blue-600 mr-3" />
                    Prevenção de Lesões
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Avaliação e programas preventivos para reduzir o risco de lesões esportivas, 
                    incluindo análise de movimento e correção de padrões inadequados.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <FaHandsHelping className="text-blue-600 mr-3" />
                    Reabilitação Pós-Lesão
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Tratamento especializado para recuperação completa após lesões esportivas, 
                    com foco no retorno seguro e eficiente às atividades.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <FaChartLine className="text-blue-600 mr-3" />
                    Melhora de Performance
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Programas específicos para otimização do desempenho atlético, 
                    incluindo fortalecimento, flexibilidade e coordenação.
                  </p>
                </div>
              </div>
            </div>

            {/* Traumato Ortopédica */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-4 rounded-full mr-4">
                  <FaBone className="text-3xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Traumato Ortopédica</h3>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Tratamento especializado de lesões musculoesqueléticas, fraturas, luxações e 
                outras condições ortopédicas com foco na recuperação funcional.
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <FaStethoscope className="text-green-600 mr-3" />
                    Lesões Musculoesqueléticas
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Tratamento de lesões agudas e crônicas do sistema musculoesquelético, 
                    incluindo tendinites, bursites e distensões musculares.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <FaUserMd className="text-green-600 mr-3" />
                    Pós-Operatório Ortopédico
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Reabilitação especializada após cirurgias ortopédicas, 
                    garantindo recuperação completa e retorno às atividades.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <FaHeartbeat className="text-green-600 mr-3" />
                    Dor Crônica
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Tratamento multidisciplinar para dor crônica musculoesquelética, 
                    utilizando técnicas modernas e evidências científicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Técnicas e Métodos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Técnicas e Métodos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utilizamos as mais modernas técnicas e métodos baseados em evidências científicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaDumbbell className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Exercícios Terapêuticos</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Programas de exercícios específicos para cada condição, 
                focados na recuperação funcional e fortalecimento.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandsHelping className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Terapia Manual</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Técnicas manuais especializadas para mobilização articular, 
                liberação miofascial e alívio da dor.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Avaliação Funcional</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Avaliações detalhadas do movimento e função para 
                identificar disfunções e planejar o tratamento.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeartbeat className="text-2xl text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Eletroterapia</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Uso de correntes elétricas terapêuticas para 
                alívio da dor e estimulação muscular.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Prevenção</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Programas preventivos personalizados para 
                reduzir o risco de lesões e recidivas.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserMd className="text-2xl text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Educação</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Orientação e educação sobre a condição, 
                autocuidado e prevenção de recidivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Atendimento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Como Funciona o Atendimento</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo estruturado para garantir o melhor resultado no seu tratamento
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Avaliação Inicial</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Anamnese detalhada, avaliação física e funcional para identificar 
                    a causa da lesão e estabelecer objetivos do tratamento.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Plano de Tratamento</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Desenvolvimento de um plano personalizado baseado nas necessidades 
                    específicas e objetivos de cada paciente.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Tratamento</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Aplicação das técnicas e métodos mais adequados, com acompanhamento 
                    contínuo da evolução e ajustes quando necessário.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Alta e Manutenção</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Orientações para manutenção dos resultados e prevenção de recidivas, 
                    com acompanhamento quando necessário.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Benefícios do Tratamento</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Resultados comprovados para sua recuperação e bem-estar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Recuperação Completa</h3>
              <p className="text-blue-100">Retorno total às atividades cotidianas e esportivas</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Prevenção</h3>
              <p className="text-blue-100">Redução significativa do risco de recidivas</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Melhora de Performance</h3>
              <p className="text-blue-100">Otimização do desempenho físico e funcional</p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeartbeat className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Qualidade de Vida</h3>
              <p className="text-blue-100">Melhora significativa no bem-estar geral</p>
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
            alcançar seus objetivos de saúde e recuperação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contato" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            >
              Agendar Consulta
            </a>
            <a 
              href="/sobre" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Conhecer Mais
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}