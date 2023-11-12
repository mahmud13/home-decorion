import HowItWorks from '@components/HowItWorks';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhyDecorion from '@components/WhyDecorion';
import SimpleSlider from '@components/Gallery';
import ImageCarousel from '@components/Gallery';
import Gallery from '@components/Gallery';
import StartFreeTrial from '@components/StartFreeTrial';

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
