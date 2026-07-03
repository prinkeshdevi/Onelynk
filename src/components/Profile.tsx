import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Mail, Share2, X, Copy, Check, Instagram, Download } from 'lucide-react';
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import logo from '../assets/logo.png';

const actions = [
  { id: 'call', icon: Phone, label: 'Call', href: 'tel:7385010471' },
  { id: 'whatsapp', icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/7385010471' },
  { id: 'email', icon: Mail, label: 'Email', href: 'mailto:onelynkofficial@gmail.com' },
  { id: 'instagram', icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/onelynk.official/' },
  { id: 'share', icon: Share2, label: 'Share', href: '#' },
];

export function Profile() {
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const profileUrl = "https://onelynk.com/prinkesh";

  const handleCopy = () => {
    navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveContact = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Prinkesh Devi
ORG:OneLynk Studio
TITLE:Founder & Digital Identity Designer
TEL;TYPE=WORK,VOICE:7385010471
EMAIL;TYPE=PREF,INTERNET:onelynkofficial@gmail.com
URL:https://onelynk.com/prinkesh
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Prinkesh_Devi_OneLynk.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="profile" className="relative pt-32 pb-16 px-6 max-w-[1024px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl text-center lg:text-left"
      >
        <h1 className="text-[44px] md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
          Crafting Premium<br />Digital Identities
        </h1>
        <p className="text-lg text-[#64748B] leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
          We design custom digital identities that help businesses create unforgettable first impressions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
           <a href="#profile-card" className="px-8 py-4 bg-[#2563EB] text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 active:scale-95 transition-transform text-center inline-block">
             Book Free Consultation
           </a>
           <a href="#experience" className="px-8 py-4 bg-[#F8FAFC] text-[#0A0A0A] rounded-xl font-bold shadow-sm border border-neutral-100 hover:bg-neutral-50 active:scale-95 transition-transform text-center inline-block">
             Experience It With Different Types
           </a>
        </div>
      </motion.div>

      <motion.div
        id="profile-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full max-w-md relative mx-auto"
      >
        <div className="relative p-1 bg-gradient-to-br from-blue-400 to-transparent rounded-[32px] shadow-2xl">
          <div className="bg-white rounded-[28px] overflow-hidden p-8 flex flex-col relative group">
            <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="flex justify-between items-start w-full mb-6">
                 <div className="w-24 h-24 rounded-2xl bg-neutral-100 overflow-hidden border-2 border-white shadow-sm mx-auto relative group-hover:scale-105 transition-transform duration-500">
                   <img 
                     src={logo}
                     alt="Prinkesh Devi" 
                     className="w-full h-full object-cover"
                   />
                 </div>
              </div>

              <h2 className="text-3xl font-bold text-[#0A0A0A] mb-1">Prinkesh Devi</h2>
              <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest mb-6">OneLynk</p>

              <div className="grid grid-cols-3 gap-4 mb-8 w-full">
                {actions.map((action) => (
                  <motion.a
                    key={action.id}
                    href={action.href}
                    onClick={(e) => {
                      if (action.id === 'share') {
                        e.preventDefault();
                        setShowShare(true);
                      } else if (action.id === 'vcard') {
                        e.preventDefault();
                        handleSaveContact();
                      }
                    }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center gap-2 group cursor-pointer"
                  >
                    <div className="aspect-square w-12 sm:w-14 bg-[#F8FAFC] rounded-xl flex items-center justify-center text-[#2563EB] shadow-sm border border-neutral-100 group-hover:bg-blue-50 transition-all duration-300">
                      <action.icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-semibold text-[#64748B]">{action.label}</span>
                  </motion.a>
                ))}
              </div>

              <button 
                onClick={handleSaveContact}
                className="w-full py-4 bg-[#0A0A0A] text-white rounded-2xl font-bold flex justify-center items-center gap-3 hover:bg-neutral-800 transition-colors"
              >
                <span>Save Contact</span>
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-[10px]">+</div>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showShare && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-sm"
            onClick={() => setShowShare(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-white rounded-[32px] p-8 shadow-2xl relative text-center"
            >
              <button 
                onClick={() => setShowShare(false)}
                className="absolute top-6 right-6 w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-500 hover:bg-neutral-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              
              <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">Share Profile</h3>
              <p className="text-sm text-[#64748B] mb-8">Scan QR code or copy link to share</p>
              
              <div className="bg-white p-4 rounded-2xl border-2 border-neutral-100 shadow-sm inline-block mb-8">
                <QRCodeSVG value={profileUrl} size={180} level="H" includeMargin={false} />
              </div>
              
              <div className="flex items-center gap-2 p-2 bg-[#F8FAFC] rounded-2xl border border-neutral-100">
                <div className="flex-1 truncate px-3 text-sm text-[#64748B] text-left select-all">
                  {profileUrl}
                </div>
                <button 
                  onClick={handleCopy}
                  className="px-4 py-2 bg-[#2563EB] text-white rounded-xl text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors flex items-center gap-2 shrink-0"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
