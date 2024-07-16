import { useState, useEffect } from "react";
import Navbar from "@/components/navbar_components/Navbar";
import About from "@/components/about/index";
import FAQ from "@/components/about/faq/faqs";
import OurNewsletter from "@/components/OurNewsletter/index";
import Footer from "@/components/footer/index";

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
