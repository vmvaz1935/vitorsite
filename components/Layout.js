import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-primary px-3 py-2 rounded shadow">Pular para o conteúdo</a>
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {/* Open Graph tags for social sharing */}
        {title && <meta property="og:title" content={title} />}
        {description && <meta property="og:description" content={description} />}
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main id="conteudo" className="max-w-7xl mx-auto px-4 py-8">{children}</main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
};

export default Layout;