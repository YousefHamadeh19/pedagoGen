import HeroBanner from '@/components/HeroBanner'; // Adjust path as needed
import CallToAction from "@/components/CallToAction";
import InfoGrid from "@/components/InfoGrid";
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactUs';

export default function Home() {
  return (
    <>
      <main className="text-black bg-white">
        {/* First section replaced with the Carousel Component */}
        <HeroBanner />

        <section className="text-center py-12">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-black sm:text-4xl mb-8">
            Areas of Work
          </h1>
          <InfoGrid />
        </section>

        <section className="text-center bg-[#155dfc] py-10">
          <CallToAction />
        </section>

        <section className="text-center">
         
         <ContactSection />
         
        </section>
      </main>
      <Footer showDetails={true} />

    </>
  );
}