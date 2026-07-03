import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  "Completely Custom Designed",
  "Premium User Experience",
  "Built Around Your Brand",
  "No Templates",
  "Lifetime Updates",
  "Dedicated Support",
  "Future Ready"
];

export function WhyChooseUs() {
  return (
    <section className="px-6 py-24 max-w-[1024px] mx-auto">
      <div className="bg-[#2563EB] rounded-[32px] p-10 md:p-16 text-white relative overflow-hidden flex flex-col md:flex-row items-center md:items-end justify-between gap-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-20 -translate-y-20 blur-2xl pointer-events-none"></div>
        
        <div className="relative z-10 w-full max-w-lg">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-4">Why Choose Us</h4>
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight mb-8 leading-tight">Beyond Generic Digital Cards.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-white/80 shrink-0" />
                <span className="font-semibold text-white/90 text-sm">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
