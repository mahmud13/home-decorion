import HowItWorks from '@components/HowItWorks';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhyDecorion from '@components/WhyDecorion';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HowItWorks />
        <WhyDecorion />
      </main>
      <Footer />
    </>
  );
}
