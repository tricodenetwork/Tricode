import { useState, useEffect } from "react";
import Navbar from "Components/navbar_components/Navbar";
import About from "Components/About/index";
import FAQ from "Components/About/Faq/faqs";
import OurNewsletter from "Components/OurNewsletter/index";
import Footer from "Components/Footer/index";

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
