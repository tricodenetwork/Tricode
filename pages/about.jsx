import Faq from "@/components/About/Faq/faqs";
import About from "@/components/About/index";
import Footer from "@/components/Footer/index";
import Navbar from "@/components/navbar_components/Navbar";
import OurNewsletter from "@/components/OurNewsletter/index";

export default function Aboutus() {
  return (
    <section className='w-full' id='about'>
      <Navbar />
      <About />
      <Faq />
      <OurNewsletter />
      <Footer />
    </section>
  );
}
