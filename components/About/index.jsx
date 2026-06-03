import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import greenLady from "@/public/assets/lottie/greenlady.json";
import FAQs from "./Faq/faqs";
import CompanyPolicy from "../Policy/CompanyPolicy";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const FeatureCard = ({ title, desc }) => (
  <motion.div 
    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
    className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all"
  >
    <h4 className="text-binance_green font-bold text-lg mb-2">{title}</h4>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default function About({ mobile }) {
  return (
    <section className="w-full bg-black overflow-hidden" id="about">
      {/* Hero Section */}
      <div className="relative px-8 lg:px-24 pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-binance_green/10 via-transparent to-transparent">
        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-binance_green/20 text-binance_green text-xs font-bold tracking-widest uppercase mb-6">
              The Agentic OS
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">
              TRICODE <span className="text-binance_green">PRO</span> <br />
              <span className="text-gray-500">LTD</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Building the future of technical execution through autonomous AI infrastructure. We enable organizations to scale digital operations with precision, security, and intelligence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FeatureCard 
                title="AI-Native Execution" 
                desc="Integrating autonomous agents into every phase of the SDLC for unmatched velocity."
              />
              <FeatureCard 
                title="Digital Sovereignty" 
                desc="Local-first infrastructure ensuring your proprietary data remains your asset."
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 relative"
          >
            <div className="absolute inset-0 bg-binance_green/20 blur-[100px] rounded-full" />
            <Lottie
              className="relative w-full max-w-[500px] mx-auto filter grayscale hover:grayscale-0 transition-all duration-700"
              animationData={greenLady}
              loop={true}
            />
          </motion.div>
        </div>
      </div>

      {/* Vision & Mission with Micro-interactions */}
      <div className="bg-zinc-950 py-24 px-8 lg:px-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
          >
            <span className="text-binance_green font-mono text-sm tracking-widest uppercase mb-4 block">Our Mission</span>
            <p className="text-gray-300 text-lg leading-relaxed">
              To set a new global standard for digital collaboration and technical execution through AI-powered project management and autonomous workflow orchestration.
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
          >
            <span className="text-binance_green font-mono text-sm tracking-widest uppercase mb-4 block">Our Vision</span>
            <p className="text-gray-300 text-lg leading-relaxed">
              To become the foundational operating system for technical organizations worldwide, bridging the gap between human creativity and AI-driven scale.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Legacy Content preserved and styled */}
      <div className="py-24 px-8 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-3xl font-bold mb-8 uppercase tracking-widest">Our DNA</h2>
          <div className="text-gray-500 space-y-6 text-sm md:text-base leading-loose">
            <p>
              TRICODE PRO is a SaaS platform tailored for software development and digital hardware projects, designed to enhance productivity for remote technical teams. By integrating healthy work practices and fostering a collaborative social ecosystem, TRICODE PRO creates a seamless workspace where innovation thrives.
            </p>
            <p>
              As your Agile Development Partner, we enable businesses to tap into a curated pool of experts who specialize in creating custom software solutions, APIs, and tools that drive digital transformation. Whether you need support for software engineering or hardware product design, our team aligns with your goals, ensuring projects stay on track from ideation to Product Market Fit.
            </p>
          </div>
        </div>
      </div>

      {/* Company Policy */}
      <CompanyPolicy />

      {/* FAQs */}
      <div className="bg-zinc-950 py-24">
        <FAQs darkTheme={true} />
      </div>
    </section>
  );
}
