import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';

export default function Layout({ children, title, description, keywords }) {
  return (
    <>
      <Head>
        <title>{title || 'Vitor Vaz - Fisioterapeuta Especialista'}</title>
        <meta name="description" content={description || 'Vitor Vaz é fisioterapeuta especialista em fisioterapia esportiva e traumato ortopédica. Atendimento personalizado para atletas e pacientes com lesões musculoesqueléticas.'} />
        <meta name="keywords" content={keywords || 'fisioterapia esportiva, fisioterapia traumato ortopédica, Vitor Vaz, fisioterapeuta, lesões esportivas, reabilitação'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vitor Vaz" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title || 'Vitor Vaz - Fisioterapeuta Especialista'} />
        <meta property="og:description" content={description || 'Vitor Vaz é fisioterapeuta especialista em fisioterapia esportiva e traumato ortopédica. Atendimento personalizado para atletas e pacientes com lesões musculoesqueléticas.'} />
        <meta property="og:url" content="https://vitorvaz.com" />
        <meta property="og:site_name" content="Vitor Vaz - Fisioterapeuta" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || 'Vitor Vaz - Fisioterapeuta Especialista'} />
        <meta name="twitter:description" content={description || 'Vitor Vaz é fisioterapeuta especialista em fisioterapia esportiva e traumato ortopédica. Atendimento personalizado para atletas e pacientes com lesões musculoesqueléticas.'} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </>
  );
}