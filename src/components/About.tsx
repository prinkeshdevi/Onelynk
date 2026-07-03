import { motion } from 'motion/react';

export function About() {
  return (
    <section className="px-6 py-20 max-w-[1024px] mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#64748B] mb-6">The Studio</h4>
        <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight mb-8 leading-[1.1] text-[#0A0A0A]">
          More Than A Digital Card. <br className="hidden md:block"/><span className="text-[#2563EB]">A Statement.</span>
        </h2>
        <div className="text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed space-y-6">
          <p>
            At OneLynk, we reject templates. We craft high-performance digital identities that embody your brand's soul through bespoke design and premium engineering.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
