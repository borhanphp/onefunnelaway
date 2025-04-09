import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';

export default function Template({ children }) {
  return (
    <>
      <Header />
      <Breadcrumbs />
      {children}
      <Footer />
    </>
  );
} 