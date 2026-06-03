import React from 'react';
import { motion } from 'framer-motion';

const PolicySection = ({ title, children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h3 className="text-binance_green text-xl md:text-2xl font-bold mb-4 border-l-4 border-binance_green pl-4">
      {title}
    </h3>
    <div className="text-gray-400 leading-relaxed space-y-4">
      {children}
    </div>
  </motion.div>
);

const CompanyPolicy = () => {
  return (
    <div className="bg-black text-white py-16 px-8 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-3xl md:text-5xl font-black mb-16 text-center tracking-tighter uppercase"
        >
          Company <span className="text-binance_green">Governance</span> & Policy
        </motion.h2>

        <PolicySection title="1. Agentic Governance">
          <p>
            TRICODE PRO LTD operates on an Agentic Governance framework. All autonomous AI agents deployed within the ecosystem are subject to strict human-in-the-loop (HITL) oversight. 
            Agents are granted permissions based on Role-Based Access Control (RBAC) and are prohibited from executing financial transactions or destructive operations without explicit multi-signature approval from authorized personnel.
          </p>
        </PolicySection>

        <PolicySection title="2. Technical Execution Standards">
          <p>
            Every line of code delivered through the TRICODE OS&trade; must adhere to our ISO-aligned SDLC standards. 
            This includes mandatory AI-driven security auditing, automated unit testing with 90%+ coverage, and peer review by senior engineering leads. 
            We prioritize &quot;Security by Design&quot; and &quot;Local-First&quot; infrastructure to ensure maximum data sovereignty for our clients.
          </p>
        </PolicySection>

        <PolicySection title="3. Data Privacy & Sovereignty">
          <p>
            Client data is treated as a sovereign asset. We employ end-to-end encryption for all data at rest and in transit. 
            Our platform does not utilize client proprietary data for training foundation models unless explicitly authorized via a separate Data Contribution Agreement. 
            Clients retain full ownership of all intellectual property (IP) generated during the execution phase.
          </p>
        </PolicySection>

        <PolicySection title="4. Ethical AI Policy">
          <p>
            TRICODE PRO is committed to the ethical development of AI. We strictly prohibit the use of our infrastructure for the development of autonomous weaponry, surveillance systems that violate human rights, or any technology designed to propagate misinformation. 
            Transparency is our core value; all AI-generated outputs are clearly tagged for auditability.
          </p>
        </PolicySection>

        <PolicySection title="5. Remote Engineering Infrastructure">
          <p>
            Our workforce operates through secure, ephemeral dev-containers. 
            Access to client environments is session-based and audited in real-time. 
            This infrastructure ensures that no source code is permanently stored on local machines, mitigating the risk of endpoint data breaches.
          </p>
        </PolicySection>

        <motion.div 
          className="mt-20 p-8 border border-binance_green/30 bg-binance_green/5 rounded-2xl text-center"
          whileHover={{ borderColor: 'rgba(56, 163, 18, 0.6)' }}
        >
          <p className="text-sm text-gray-500 mb-2">Last Updated: June 3, 2026</p>
          <p className="text-binance_green font-mono">TRICODE PRO LTD — GLOBAL OPERATIONS UNIT</p>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyPolicy;
