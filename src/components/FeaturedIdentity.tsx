import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  Info, Briefcase, ShoppingBag, FolderOpen, Image, Video, MessageSquare, 
  Star, Download, CreditCard, Link as LinkIcon, Clock, MapPin, Phone 
} from 'lucide-react';
import logo from '../assets/logo.png';

const tabs = [
  { id: 'about', label: 'About', icon: Info, content: 'We are a premium digital identity design studio specializing in bespoke digital business cards and mini-websites.' },
  { id: 'services', label: 'Services', icon: Briefcase, content: 'Digital Identity, Mini Websites, NFC Cards, QR Solutions, Portfolio Design.' },
  { id: 'products', label: 'Products', icon: ShoppingBag, content: 'Browse our range of digital cards and mini websites.' },
  { id: 'payment', label: 'Payment', icon: CreditCard, content: 'Secure payment gateway for fast transactions.' },
  { id: 'social', label: 'Social Links', icon: LinkIcon, content: 'Connect with us on WhatsApp, Instagram, and Mail.' },
  { id: 'hours', label: 'Business Hours', icon: Clock, content: 'Mon-Fri: 9AM - 6PM EST' },
  { id: 'contact', label: 'Contact', icon: Phone, content: 'Reach us via Call, WhatsApp, or Email.' },
];

export function FeaturedIdentity() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <section id="virtual-card" className="px-6 py-24 max-w-[1024px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#64748B] mb-4">Featured Digital Identity</h4>
        <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-[#0A0A0A] leading-tight">
          The Complete OneLynk Experience
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
        {/* Mockup Phone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[340px] aspect-[9/19.5] bg-[#0A0A0A] rounded-[48px] p-2 shadow-2xl shrink-0"
        >
          {/* Screen */}
          <div className="w-full h-full bg-white rounded-[40px] overflow-hidden flex flex-col relative">
            {/* Notch */}
            <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
              <div className="w-32 h-6 bg-[#0A0A0A] rounded-b-[1rem]"></div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar pt-12 pb-8 px-6 bg-[#F8FAFC]">
              <div className="flex flex-col items-center text-center mb-8">
                 <div className="w-20 h-20 rounded-2xl bg-neutral-900 shadow-sm border border-neutral-100 flex items-center justify-center mb-4 p-2 overflow-hidden">
                    <img src={logo} alt="OneLynk Logo" className="w-full h-full object-contain" />
                 </div>
                 <h3 className="font-bold text-xl text-[#0A0A0A] mb-1">OneLynk Studio</h3>
                 <p className="text-sm text-[#64748B]">Premium Digital Identities</p>
              </div>

              {/* Dynamic Content */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 mb-6 min-h-[120px] flex items-center justify-center text-center">
                <p className="text-[#0A0A0A] text-sm leading-relaxed">{activeContent}</p>
              </div>

              {/* Tabs Grid */}
              <div className="grid grid-cols-4 gap-3">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#2563EB] text-white shadow-md' 
                          : 'bg-white text-[#64748B] hover:bg-blue-50 hover:text-[#2563EB] shadow-sm border border-neutral-100'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      <span className="text-[8px] font-bold uppercase tracking-wider">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Area */}
        <div className="max-w-md text-center lg:text-left">
          <h3 className="text-2xl font-bold mb-4 text-[#0A0A0A]">Interactive. Comprehensive. Yours.</h3>
          <p className="text-[#64748B] leading-relaxed mb-6">
            A premium digital identity is more than just a business card. It is a comprehensive hub for your brand. 
            Test the live demo to experience how seamlessly we integrate your entire professional ecosystem into one beautiful, mobile-first interface.
          </p>
          <ul className="space-y-3 mb-8">
            {['14+ Interactive Modules', 'Seamless Navigation', 'Zero App Installation', 'Always Up-to-Date'].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-sm font-semibold text-[#0A0A0A]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
