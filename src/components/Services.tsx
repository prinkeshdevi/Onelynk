import { motion } from 'motion/react';
import { Layout, Smartphone, QrCode, CreditCard, Monitor, BookOpen, Fingerprint, CalendarCheck, Settings2 } from 'lucide-react';

const services = [
  { icon: Layout, title: 'Digital Identity' },
  { icon: Monitor, title: 'Mini Websites' },
  { icon: CreditCard, title: 'NFC Cards' },
  { icon: QrCode, title: 'QR Solutions' },
  { icon: Smartphone, title: 'Portfolio Websites' },
  { icon: BookOpen, title: 'Product Catalogues' },
  { icon: Fingerprint, title: 'Brand Identity' },
  { icon: CalendarCheck, title: 'Appointment Booking' },
  { icon: Settings2, title: 'Business Automation' },
];

export function Services() {
  return (
    <section className="px-6 py-24 max-w-[1024px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#64748B] mb-4">Our Expertise</h4>
        <h2 className="text-[32px] font-bold tracking-tight text-[#0A0A0A] leading-tight max-w-xl">
          Everything You Need for a Complete Digital Presence.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="p-8 rounded-[24px] bg-[#F8FAFC] border border-neutral-100 hover:border-[#2563EB]/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-neutral-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <service.icon className="w-6 h-6 text-[#2563EB]" strokeWidth={2} />
            </div>
            <h4 className="text-sm font-bold text-[#0A0A0A]">{service.title}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
