import Head from 'next/head';
import Layout from '../components/Layout';
import { FaRunning, FaBone, FaHeartbeat, FaUserMd, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Vitor Vaz - Fisioterapeuta Especialista em Fisioterapia Esportiva e Traumato Ortopédica</title>
        <meta name="description" content="Vitor Vaz é fisioterapeuta especialista em fisioterapia esportiva e traumato ortopédica. Atendimento personalizado para atletas e pacientes com lesões musculoesqueléticas." />
        <meta name="keywords" content="fisioterapia esportiva, fisioterapia traumato ortopédica, Vitor Vaz, fisioterapeuta, lesões esportivas, reabilitação" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Vitor Vaz
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-100">
              Fisioterapeuta Especialista em Fisioterapia Esportiva e Traumato Ortopédica
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">
              Cuidando da sua recuperação com excelência técnica e atendimento humanizado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contato" 
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
              >
                Agendar Consulta
              </a>
              <a 
                href="/sobre" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300"
              >
                Conhecer Mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Especialidades</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendimento especializado em fisioterapia esportiva e traumato ortopédica, 
              oferecendo soluções personalizadas para cada paciente
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
                Prevenção, tratamento e reabilitação de lesões relacionadas à prática esportiva. 
                Atendimento especializado para atletas de todas as modalidades e níveis.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Prevenção de lesões
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Reabilitação pós-lesão
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Melhora de performance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Retorno ao esporte
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
                Tratamento especializado de lesões musculoesqueléticas, fraturas, 
                luxações e outras condições ortopédicas com foco na recuperação funcional.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Lesões musculoesqueléticas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Pós-operatório ortopédico
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Dor crônica
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Reabilitação funcional
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que escolher o Dr. Vitor Vaz?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiência, dedicação e resultados comprovados no tratamento fisioterapêutico
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUserMd className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Especialização</h3>
              <p className="text-gray-600 leading-relaxed">
                Formação especializada em fisioterapia esportiva e traumato ortopédica, 
                com constante atualização profissional.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeartbeat className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Atendimento Humanizado</h3>
              <p className="text-gray-600 leading-relaxed">
                Cuidado personalizado, respeitando as individualidades de cada paciente 
                e suas necessidades específicas.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaBone className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resultados Comprovados</h3>
              <p className="text-gray-600 leading-relaxed">
                Tratamentos baseados em evidências científicas, com foco na 
                recuperação completa e retorno às atividades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para iniciar sua recuperação?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Entre em contato e agende sua consulta. Vamos trabalhar juntos para 
            alcançar seus objetivos de saúde e bem-estar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contato" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
            >
              Agendar Consulta
            </a>
            <a 
              href="/servicos" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-600">Entre em contato para agendar</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-2xl text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Localização</h3>
              <p className="text-gray-600">Consultório bem localizado</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Horários</h3>
              <p className="text-gray-600">Segunda a Sexta</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}