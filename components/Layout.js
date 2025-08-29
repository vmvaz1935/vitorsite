import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {/* Open Graph tags for social sharing */}
        {title && <meta property="og:title" content={title} />}
        {description && <meta property="og:description" content={description} />}
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
};

export default Layout;