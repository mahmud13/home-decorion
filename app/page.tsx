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
    // <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
    //   <Header />
    //   <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">

    //     <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
    //       Generating dream rooms{" "}
    //       <span className="relative whitespace-nowrap text-blue-600">
    //         <SquigglyLines />
    //         <span className="relative">using AI</span>
    //       </span>{" "}
    //       for everyone.
    //     </h1>
    //     <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
    //       Take a picture of your room and see how your room looks in different
    //       themes. remodel your room today.
    //     </h2>
    //     <Link
    //       className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
    //       href="/dream"
    //     >
    //       Generate your dream room
    //     </Link>
    //     <div className="bg-green flex justify-between items-center w-full flex-col sm:mt-10 mt-6 ">
    //       <div className="flex flex-col space-y-10 mt-4 mb-16">
    //         <div className="flex sm:space-x-8 sm:flex-row flex-col">
    //           <div>
    //             <h3 className="mb-1 font-medium text-lg">Original Room</h3>
    //             <Image
    //               alt="Original photo of a room with Decorion"
    //               src="/original-pic.jpg"
    //               className="w-full object-cover h-96 rounded-2xl"
    //               width={400}
    //               height={400}
    //             />
    //           </div>
    //           <div className="sm:mt-0 mt-8 " >
    //             <h3 className="mb-1 font-medium text-lg">Generated Room</h3>
    //             <Image
    //               alt="Generated photo of a room with Decorion"
    //               width={400}
    //               height={400}
    //               src="/generated-pic-2.jpg"
    //               className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    //   <Footer />
    // </div>
  );
}
