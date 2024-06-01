import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/reset.css';
import '../assets/css/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;



