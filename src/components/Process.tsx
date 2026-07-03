import { motion } from 'motion/react';

const steps = [
  { id: '01', title: 'Discovery Call', desc: 'Initial consultation to align goals.' },
  { id: '02', title: 'Requirement Discussion', desc: 'Deep dive into your visual identity and technical needs.' },
  { id: '03', title: 'Creative Strategy', desc: 'Crafting the mood, layout, and positioning.' },
  { id: '04', title: 'Custom Design', desc: 'Pixel-perfect handcrafted interface.' },
  { id: '05', title: 'Review & Refinement', desc: 'Feedback and polishing to ensure perfection.' },
  { id: '06', title: 'Launch', desc: 'Deployment of your premium digital identity.' },
  { id: '07', title: 'Lifetime Support', desc: 'Ongoing refinement and priority updates.' }
];

export function Process() {
  return (
    <section className="px-6 py-24 relative overflow-hidden max-w-[1024px] mx-auto">
      <div className="bg-[#F8FAFC] rounded-[32px] p-10 md:p-16 border border-neutral-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#64748B] mb-4">The Journey</h4>
          <h2 className="text-[32px] font-bold tracking-tight text-[#0A0A0A]">How We Craft Perfection</h2>
        </motion.div>

        <div className="relative pl-8 space-y-10">
          {/* Vertical Line */}
          <div className="absolute left-[3px] top-2 bottom-2 w-px bg-neutral-200"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6"
            >
              {/* Dot */}
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#2563EB] shadow-sm"></div>
              
              <p className="text-sm font-bold text-[#0A0A0A] uppercase tracking-wider mb-1">{step.title}</p>
              <p className="text-sm text-[#64748B]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
