import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#F2F6F9] py-24">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="text-[#212529] text-center mb-8">
              <h3 className="font-bold text-5xl mb-4">How it Works</h3>
              <p>Create beatuful interior designs in just 3 simple steps!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              <Card
                title="Upload Image"
                description="Upload a picture of your space. "
                imgUrl="/original-pic.jpg"
              />
              <Card
                title="Choose Your Theme"
                description="Pick a theme from our design library"
                imgUrl="/choose-theme.jpg"
              />
              <Card
                title="Generate Designs"
                description="Get a design in 30 seconds."
                imgUrl="/generated-pic-2.jpg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
