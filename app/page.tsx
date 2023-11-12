import HowItWorks from '@components/HowItWorks';
import StartFreeTrial from '@components/StartFreeTrial';
import WhyDecorion from '@components/WhyDecorion';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HowItWorks />
        <WhyDecorion />
        <StartFreeTrial />
      </main>
      <Footer />
    </>
  );
}
