import { useState, useEffect } from "react";
import Navbar from "@/components/navbar_components/Navbar";
import About from "@/components/About/index";
import FAQ from "@/components/About/Faq/faqs";
import OurNewsletter from "@/components/OurNewsletter/index";
import Footer from "@/Components/Footer/index";

export default function Aboutus() {
  return (
    <>
      <section className='w-full' id='about'>
        <Navbar />
        <About />
        <FAQ />
        <OurNewsletter />
        <Footer />
      </section>
    </>
  );
}
