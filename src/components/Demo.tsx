import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ArrowRight, User, Briefcase, Star, Phone, Mail, Globe, Grid, Layers, Play, Clock, QrCode, Download, Share2, Instagram, MessageCircle } from 'lucide-react';
import logoImg from 'public/assets/logo.png';

const styles = [
  'Simple',
  'Flip Card',
  'Expand Card',
  'Dropdown',
  'Swipe Cards',
  'Story Mode',
  'Tab View',
  'Glass UI',
  'Portfolio',
  'Executive Mode'
];

const brandInfo = {
  name: 'OneLynk®',
  tagline: 'CONNECT • GROW • SUCCEED.',
  founder: 'Prinkesh Devi',
  role: 'Founder & Digital Identity Designer',
  logo: logoImg,
  hours: 'Mon – Sat | 10:00 AM – 7:00 PM',
  about: "OneLynk crafts premium digital identities that help professionals and businesses create unforgettable first impressions. Unlike generic digital cards, every OneLynk experience is custom-designed. We don't sell templates. We design digital experiences.",
  services: [
    'Digital Identity Design',
    'Premium Digital Business Cards',
    'Mini Business Websites',
    'NFC Business Cards',
    'Smart QR Solutions',
    'Brand Identity'
  ]
};

export function Demo() {
  const [activeStyle, setActiveStyle] = useState(0);
  const [tabStates, setTabStates] = useState<Record<number, any>>({});

  const getTabState = (key: string, defaultVal: any) => {
    return tabStates[activeStyle]?.[key] !== undefined ? tabStates[activeStyle][key] : defaultVal;
  };

  const updateTabState = (key: string, value: any, defaultVal: any) => {
    setTabStates(prev => {
      const currentVal = prev[activeStyle]?.[key] !== undefined ? prev[activeStyle][key] : defaultVal;
      const newVal = typeof value === 'function' ? value(currentVal) : value;
      return {
        ...prev,
        [activeStyle]: {
          ...(prev[activeStyle] || {}),
          [key]: newVal
        }
      };
    });
  };

  const isFlipped = getTabState('isFlipped', false);
  const setIsFlipped = (val: any) => updateTabState('isFlipped', val, false);

  const isExpanded = getTabState('isExpanded', false);
  const setIsExpanded = (val: any) => updateTabState('isExpanded', val, false);

  const activeAccordion = getTabState('activeAccordion', null);
  const setActiveAccordion = (val: any) => updateTabState('activeAccordion', val, null);

  const activePhoneTab = getTabState('activePhoneTab', 0);
  const setActivePhoneTab = (val: any) => updateTabState('activePhoneTab', val, 0);

  const storyIndex = getTabState('storyIndex', 0);
  const setStoryIndex = (val: any) => updateTabState('storyIndex', val, 0);

  const swipeIndex = getTabState('swipeIndex', 0);
  const setSwipeIndex = (val: any) => updateTabState('swipeIndex', val, 0);

  const handleAction = async (action: string) => {
    switch (action) {
      case 'Call':
        window.location.href = 'tel:7385010471';
        break;
      case 'WhatsApp':
        window.open('https://wa.me/7385010471', '_blank');
        break;
      case 'Insta':
      case 'Instagram':
        window.open('https://instagram.com/onelynk.official', '_blank');
        break;
      case 'Share':
        try {
          if (navigator.share) {
            await navigator.share({
              title: brandInfo.name,
              text: brandInfo.tagline,
              url: window.location.href,
            });
          } else {
            await navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
          }
        } catch (err) {
          console.log('Error sharing:', err);
        }
        break;
      case 'SaveContact':
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${brandInfo.founder}
ORG:${brandInfo.name}
TITLE:${brandInfo.role}
TEL;TYPE=CELL:7385010471
URL:https://onelynk.com
END:VCARD`;
        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${brandInfo.founder.replace(/\s+/g, '_')}.vcf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        break;
    }
  };

  const renderContent = () => {
    switch (activeStyle) {
      case 0: // Simple
        return (
          <motion.div
            key="simple"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 bg-[#F8FAFC] flex flex-col items-center pt-20 px-6 overflow-y-auto no-scrollbar"
          >
            <div className="w-24 h-24 rounded-2xl bg-white mb-4 overflow-hidden border-2 border-white shadow-sm flex items-center justify-center p-2">
              <img src={brandInfo.logo} className="w-full h-full object-contain" alt="Logo" />
            </div>
            <h3 className="text-xl font-bold text-[#0A0A0A] mb-1">{brandInfo.founder}</h3>
            <p className="text-sm text-[#2563EB] font-semibold mb-1">{brandInfo.role}</p>
            <p className="text-xs font-bold text-[#64748B] mb-6">{brandInfo.name}</p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8 w-full">
              {[
                { icon: Phone, label: 'Call' },
                { icon: MessageCircle, label: 'WhatsApp' },
                { icon: Instagram, label: 'Insta' },
                { icon: Share2, label: 'Share' }
              ].map((Action, i) => (
                <div key={i} onClick={() => handleAction(Action.label)} className="flex flex-col items-center gap-1.5 cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2563EB] shadow-sm border border-neutral-100 group-hover:bg-blue-50 transition-colors">
                    <Action.icon className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => handleAction('SaveContact')} className="w-full py-4 bg-[#0A0A0A] text-white rounded-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> Save Contact
            </button>
            <div className="w-full p-5 bg-white rounded-2xl shadow-sm border border-neutral-100 text-center mb-8">
              <p className="text-xs text-[#64748B] leading-relaxed">{brandInfo.tagline}</p>
            </div>
          </motion.div>
        );

      case 1: // Flip Card
        return (
          <motion.div
            key="flip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 bg-[#F8FAFC] flex items-center justify-center p-6 perspective-[1000px]"
          >
            <motion.div
              className="w-full aspect-[4/5] relative cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div 
                className="absolute inset-0 bg-white rounded-3xl p-6 shadow-xl border border-neutral-100 flex flex-col items-center justify-center text-center"
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              >
                <div className="w-20 h-20 bg-neutral-50 rounded-2xl mb-4 flex items-center justify-center p-2 shadow-sm border border-neutral-100">
                  <img src={brandInfo.logo} className="w-full h-full object-contain" alt="Logo" />
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-1">{brandInfo.founder}</h3>
                <p className="text-xs text-[#2563EB] font-bold mb-4">{brandInfo.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-[#64748B] mb-8">{brandInfo.tagline}</p>
                
                <div className="flex gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                  <div className="w-10 h-10 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center"><Mail className="w-4 h-4" /></div>
                </div>
                <p className="text-[10px] text-[#64748B] mt-4 opacity-50 flex items-center gap-1"><ArrowRight className="w-3 h-3" /> Tap to flip</p>
              </div>
              <div 
                className="absolute inset-0 bg-[#0A0A0A] text-white rounded-3xl p-6 shadow-xl flex flex-col items-center"
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <div className="w-24 h-24 bg-white rounded-2xl mb-4 p-2 flex items-center justify-center relative mt-2">
                  <QrCode className="w-full h-full text-[#0A0A0A]" />
                  <div className="absolute inset-0 border-2 border-white/20 rounded-2xl animate-pulse pointer-events-none"></div>
                </div>
                <h4 className="font-bold text-sm mb-1">{brandInfo.name}</h4>
                <p className="text-[10px] text-white/60 text-center mb-4 leading-relaxed px-2">{brandInfo.about.slice(0, 60)}...</p>
                
                <div className="flex gap-2 w-full justify-center mb-auto">
                  <div onClick={(e) => { e.stopPropagation(); handleAction('Insta'); }} className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#2563EB] transition-colors cursor-pointer"><Instagram className="w-3 h-3" /></div>
                  <div onClick={(e) => { e.stopPropagation(); handleAction('Call'); }} className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#2563EB] transition-colors cursor-pointer"><Phone className="w-3 h-3" /></div>
                  <div onClick={(e) => { e.stopPropagation(); handleAction('WhatsApp'); }} className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#2563EB] transition-colors cursor-pointer"><MessageCircle className="w-3 h-3" /></div>
                  <div onClick={(e) => { e.stopPropagation(); handleAction('Share'); }} className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#2563EB] transition-colors cursor-pointer"><Share2 className="w-3 h-3" /></div>
                </div>

                <div className="w-full space-y-2 mt-4">
                  <button onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }} className="w-full py-2.5 bg-[#2563EB] text-white rounded-xl font-bold text-[10px] flex justify-center items-center gap-2">Back to Demo Card</button>
                  <button className="w-full py-2.5 bg-white/10 text-white rounded-xl font-bold text-[10px] flex justify-center items-center gap-2" onClick={(e) => { e.stopPropagation(); handleAction('SaveContact'); }}><Download className="w-3 h-3" /> Save Contact</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );

      case 2: // Expand Card
        return (
          <motion.div
            key="expand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 bg-[#F8FAFC] flex flex-col relative"
          >
            <div className="flex-1 p-6 pt-16 flex flex-col items-center pb-32">
              <div className="w-24 h-24 rounded-2xl bg-white mb-4 shadow-sm border border-neutral-100 flex items-center justify-center p-3 relative z-10">
                <img src={brandInfo.logo} className="w-full h-full object-contain" alt="Logo" />
              </div>
              <h3 className="text-xl font-bold text-[#0A0A0A]">{brandInfo.founder}</h3>
              <p className="text-xs font-bold text-[#2563EB] mb-2">{brandInfo.name}</p>
              <p className="text-[10px] text-[#64748B] uppercase tracking-widest">{brandInfo.tagline}</p>
              
              <div className="flex gap-2 w-full mt-6 mb-2 justify-center">
                <div onClick={() => handleAction('Call')} className="w-10 h-10 rounded-full bg-white text-[#2563EB] shadow-sm border border-neutral-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors"><Phone className="w-4 h-4" /></div>
                <div onClick={() => handleAction('WhatsApp')} className="w-10 h-10 rounded-full bg-white text-[#2563EB] shadow-sm border border-neutral-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors"><MessageCircle className="w-4 h-4" /></div>
                <div onClick={() => handleAction('Insta')} className="w-10 h-10 rounded-full bg-white text-[#2563EB] shadow-sm border border-neutral-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors"><Instagram className="w-4 h-4" /></div>
                <div onClick={() => handleAction('Share')} className="w-10 h-10 rounded-full bg-white text-[#2563EB] shadow-sm border border-neutral-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors"><Share2 className="w-4 h-4" /></div>
              </div>
              
              <div className="flex gap-3 w-full mt-4">
                <button onClick={() => handleAction('SaveContact')} className="flex-1 py-3 bg-[#0A0A0A] text-white text-xs font-bold rounded-xl shadow-sm">Save Contact</button>
              </div>
            </div>
            <motion.div
              className="absolute bottom-0 inset-x-0 bg-white rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-neutral-100 overflow-hidden cursor-pointer flex flex-col"
              animate={{ height: isExpanded ? '90%' : '100px' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-6 pb-2 shrink-0" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="w-12 h-1.5 bg-neutral-200 rounded-full mx-auto mb-4"></div>
                <h4 className="text-center font-bold text-[#0A0A0A] text-sm flex items-center justify-center gap-2">
                  {isExpanded ? 'Collapse' : 'Explore More'} <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </h4>
              </div>
              
              {isExpanded && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.1 }}
                  className="px-6 pb-6 space-y-4 overflow-y-auto no-scrollbar flex-1"
                >
                  <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-neutral-100">
                    <h5 className="font-bold text-sm mb-2">About</h5>
                    <p className="text-xs text-[#64748B] leading-relaxed">{brandInfo.about}</p>
                  </div>
                  <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-neutral-100">
                    <h5 className="font-bold text-sm mb-3">Services</h5>
                    <div className="flex flex-wrap gap-2">
                      {brandInfo.services.slice(0,4).map(s => <span key={s} className="text-[10px] px-2 py-1 bg-white border border-neutral-200 rounded-md font-medium text-[#0A0A0A]">{s}</span>)}
                    </div>
                  </div>
                  <button className="w-full py-3 bg-[#2563EB] text-white rounded-xl text-xs font-bold">Book Consultation</button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        );

      case 3: // Dropdown
        return (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 bg-[#F8FAFC] p-6 pt-12 overflow-y-auto no-scrollbar"
          >
            <div className="flex items-center gap-4 mb-6 bg-white p-4 rounded-2xl shadow-sm border border-neutral-100">
              <div className="w-14 h-14 bg-neutral-50 rounded-xl p-2 border border-neutral-100 shrink-0">
                <img src={brandInfo.logo} className="w-full h-full object-contain" alt="Logo" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0A0A0A] leading-tight">{brandInfo.founder}</h3>
                <p className="text-xs text-[#2563EB] font-bold">{brandInfo.name}</p>
                <p className="text-[10px] text-[#64748B] mt-1">{brandInfo.role}</p>
              </div>
            </div>
            <div className="flex gap-2 w-full justify-between mb-6 px-2">
              <div onClick={() => handleAction('Call')} className="w-10 h-10 rounded-full bg-white text-[#2563EB] shadow-sm border border-neutral-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors"><Phone className="w-4 h-4" /></div>
              <div onClick={() => handleAction('WhatsApp')} className="w-10 h-10 rounded-full bg-white text-[#2563EB] shadow-sm border border-neutral-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors"><MessageCircle className="w-4 h-4" /></div>
              <div onClick={() => handleAction('Insta')} className="w-10 h-10 rounded-full bg-white text-[#2563EB] shadow-sm border border-neutral-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors"><Instagram className="w-4 h-4" /></div>
              <div onClick={() => handleAction('Share')} className="w-10 h-10 rounded-full bg-white text-[#2563EB] shadow-sm border border-neutral-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors"><Share2 className="w-4 h-4" /></div>
            </div>
            <button onClick={() => handleAction('SaveContact')} className="w-full py-3 bg-[#0A0A0A] text-white text-xs font-bold rounded-xl mb-6">Save Contact</button>
            <div className="space-y-3 pb-8">
              {[
                { title: 'About OneLynk', content: brandInfo.about },
                { title: 'Our Services', content: brandInfo.services.join(' • ') },
                { title: 'Why Choose OneLynk', content: "We don't just create digital cards; we engineer complete digital identity experiences tailored to your brand's unique positioning." },
                { title: 'Business Hours', content: brandInfo.hours }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                    className="w-full p-4 flex justify-between items-center bg-white"
                  >
                    <span className="font-bold text-sm text-[#0A0A0A]">{item.title}</span>
                    <ChevronDown className={`w-4 h-4 text-[#64748B] transition-transform duration-300 ${activeAccordion === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeAccordion === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-4 pb-4 pt-1 bg-white text-xs text-[#64748B] leading-relaxed border-t border-neutral-50 mt-2">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 4: { // Swipe Cards
        const swipeCards = [
          { title: 'Welcome', subtitle: brandInfo.name, content: brandInfo.tagline, icon: User },
          { title: 'Services', subtitle: 'What we do', content: brandInfo.services.slice(0,3).join(', '), icon: Briefcase },
          { title: 'Availability', subtitle: 'Business Hours', content: brandInfo.hours, icon: Clock },
        ];
        
        return (
          <motion.div
            key="swipe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 bg-[#F8FAFC] flex flex-col justify-center overflow-hidden p-6 h-full relative"
          >
            <div className="absolute top-4 left-0 right-0 flex justify-center pointer-events-none z-10">
               <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-widest bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">Swipe left & right</span>
            </div>
            
            <div className="w-full h-[75%] relative" style={{ containerType: 'inline-size' }}>
              <motion.div 
                className="flex gap-4 h-full absolute top-0 left-0 cursor-grab active:cursor-grabbing w-full touch-pan-y"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                dragMomentum={false}
                animate={{ x: `calc(-${swipeIndex * 85}cqw - ${swipeIndex * 1}rem)` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipePower = Math.abs(offset.x) * velocity.x;
                  if (swipePower < -10000 || offset.x < -50) {
                    setSwipeIndex((prev: number) => Math.min(prev + 1, swipeCards.length - 1));
                  } else if (swipePower > 10000 || offset.x > 50) {
                    setSwipeIndex((prev: number) => Math.max(prev - 1, 0));
                  }
                }}
              >
                {swipeCards.map((card, i) => (
                  <div key={i} className="w-[85cqw] shrink-0 h-full bg-white rounded-3xl p-6 flex flex-col relative shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-neutral-100 overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] border border-neutral-100 flex items-center justify-center text-[#2563EB] mb-6 pointer-events-none">
                       <card.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-1 pointer-events-none">{card.subtitle}</h4>
                    <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4 pointer-events-none">{card.title}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-4 pointer-events-none">{card.content}</p>
                    
                    <div className="flex gap-2 w-full mt-auto pt-4 border-t border-neutral-100">
                      <div className="w-8 h-8 rounded-full bg-[#F8FAFC] text-[#2563EB] flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors" onPointerDown={e => { e.stopPropagation(); handleAction('Call'); }}><Phone className="w-3 h-3" /></div>
                      <div className="w-8 h-8 rounded-full bg-[#F8FAFC] text-[#2563EB] flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors" onPointerDown={e => { e.stopPropagation(); handleAction('WhatsApp'); }}><MessageCircle className="w-3 h-3" /></div>
                      <div className="w-8 h-8 rounded-full bg-[#F8FAFC] text-[#2563EB] flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors" onPointerDown={e => { e.stopPropagation(); handleAction('Insta'); }}><Instagram className="w-3 h-3" /></div>
                      <div className="w-8 h-8 rounded-full bg-[#F8FAFC] text-[#2563EB] flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors" onPointerDown={e => { e.stopPropagation(); handleAction('Share'); }}><Share2 className="w-3 h-3" /></div>
                    </div>
                    <button onClick={() => handleAction('SaveContact')} className="w-full mt-3 py-2.5 bg-[#0A0A0A] text-white text-[10px] font-bold rounded-xl" onPointerDown={e => e.stopPropagation()}>Save Contact</button>
                    
                    {i === 0 && (
                       <div className="absolute bottom-6 right-6 pointer-events-none">
                          <div className="w-10 h-10 bg-[#0A0A0A] rounded-full flex items-center justify-center text-white"><ArrowRight className="w-4 h-4" /></div>
                       </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
              {swipeCards.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${swipeIndex === i ? 'w-4 bg-[#2563EB]' : 'w-1.5 bg-neutral-200'}`}></div>
              ))}
            </div>
          </motion.div>
        );
      }

      case 5: // Story Mode
        return (
          <motion.div
            key="story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 bg-[#0A0A0A] relative flex flex-col cursor-pointer"
            onClick={() => setStoryIndex((storyIndex + 1) % 4)}
          >
            <div className="absolute top-6 inset-x-4 flex gap-1 z-20">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                  <div className={`h-full bg-white ${i <= storyIndex ? 'w-full' : 'w-0'}`} style={{ transition: i === storyIndex ? 'width 3s linear' : 'none' }}></div>
                </div>
              ))}
            </div>
            
            <div className="flex-1 relative bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a] flex flex-col items-center justify-center p-6 text-center">
               {storyIndex === 0 && (
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center">
                     <div className="w-20 h-20 bg-white rounded-2xl p-3 mb-6">
                        <img src={brandInfo.logo} className="w-full h-full object-contain" alt="Logo" />
                     </div>
                     <h2 className="text-2xl font-bold text-white mb-2">Welcome to<br/>{brandInfo.name}</h2>
                     <p className="text-white/60 text-sm mb-6">{brandInfo.tagline}</p>
                     
                     <div className="flex gap-3">
                        <div onClick={(e) => { e.stopPropagation(); handleAction('Call'); }} className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-md border border-white/10 hover:bg-white/20"><Phone className="w-4 h-4" /></div>
                        <div onClick={(e) => { e.stopPropagation(); handleAction('WhatsApp'); }} className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-md border border-white/10 hover:bg-white/20"><MessageCircle className="w-4 h-4" /></div>
                        <div onClick={(e) => { e.stopPropagation(); handleAction('Insta'); }} className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-md border border-white/10 hover:bg-white/20"><Instagram className="w-4 h-4" /></div>
                     </div>
                  </motion.div>
               )}
               {storyIndex === 1 && (
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex flex-col items-start text-left w-full">
                     <h2 className="text-2xl font-bold text-white mb-6">Our Services</h2>
                     <div className="space-y-4 w-full">
                        {brandInfo.services.slice(0,3).map((s, i) => (
                           <div key={i} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white text-sm font-medium">{s}</div>
                        ))}
                     </div>
                  </motion.div>
               )}
               {storyIndex === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center text-center">
                     <h2 className="text-2xl font-bold text-white mb-4">Why Digital Identity Matters</h2>
                     <p className="text-white/80 leading-relaxed text-sm italic">"First impressions are digital now. Make yours unforgettable."</p>
                  </motion.div>
               )}
               {storyIndex === 3 && (
                  <motion.div initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center w-full h-full">
                     <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center text-white mb-6 animate-pulse">
                        <Phone className="w-6 h-6" />
                     </div>
                     <h2 className="text-2xl font-bold text-white mb-8">Book Your<br/>Consultation</h2>
                     <button onClick={(e) => { e.stopPropagation(); handleAction('SaveContact'); }} className="w-full py-4 bg-white text-[#0A0A0A] font-bold rounded-2xl mb-3">Save Contact</button>
                     <button className="w-full py-4 bg-white/10 text-white font-bold rounded-2xl">Get Started</button>
                  </motion.div>
               )}
            </div>
          </motion.div>
        );

      case 6: // Tab View
        return (
          <motion.div
            key="tabview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 bg-[#F8FAFC] flex flex-col"
          >
            <div className="pt-10 px-4 pb-0 bg-white border-b border-neutral-100 flex gap-6 overflow-x-auto no-scrollbar shrink-0">
              {['Overview', 'About', 'Services', 'Contact'].map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActivePhoneTab(i)}
                  className={`text-xs font-bold pb-3 relative whitespace-nowrap ${activePhoneTab === i ? 'text-[#2563EB]' : 'text-[#64748B]'}`}
                >
                  {tab}
                  {activePhoneTab === i && <motion.div layoutId="phone-tab-indicator" className="absolute bottom-0 inset-x-0 h-0.5 bg-[#2563EB]"></motion.div>}
                </button>
              ))}
            </div>
            <div className="flex-1 p-6 overflow-y-auto no-scrollbar">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhoneTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 min-h-full"
                >
                  {activePhoneTab === 0 && (
                     <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-neutral-50 rounded-xl border border-neutral-100 p-2 mb-4">
                           <img src={brandInfo.logo} className="w-full h-full object-contain" alt="Logo" />
                        </div>
                        <h3 className="font-bold text-lg text-[#0A0A0A]">{brandInfo.name}</h3>
                        <p className="text-xs text-[#64748B] mb-6">{brandInfo.tagline}</p>
                        <div className="flex gap-2 w-full justify-center mb-6">
                           <div onClick={() => handleAction('Call')} className="w-10 h-10 rounded-full bg-[#F8FAFC] text-[#2563EB] flex items-center justify-center shadow-sm border border-neutral-100 cursor-pointer"><Phone className="w-4 h-4" /></div>
                           <div onClick={() => handleAction('WhatsApp')} className="w-10 h-10 rounded-full bg-[#F8FAFC] text-[#2563EB] flex items-center justify-center shadow-sm border border-neutral-100 cursor-pointer"><MessageCircle className="w-4 h-4" /></div>
                           <div onClick={() => handleAction('Insta')} className="w-10 h-10 rounded-full bg-[#F8FAFC] text-[#2563EB] flex items-center justify-center shadow-sm border border-neutral-100 cursor-pointer"><Instagram className="w-4 h-4" /></div>
                           <div onClick={() => handleAction('Share')} className="w-10 h-10 rounded-full bg-[#F8FAFC] text-[#2563EB] flex items-center justify-center shadow-sm border border-neutral-100 cursor-pointer"><Share2 className="w-4 h-4" /></div>
                        </div>
                        <button onClick={() => handleAction('SaveContact')} className="w-full py-3 bg-[#0A0A0A] text-white text-xs font-bold rounded-xl mb-3">Save Contact</button>
                     </div>
                  )}
                  {activePhoneTab === 1 && (
                     <div>
                        <h4 className="font-bold text-sm mb-2 text-[#0A0A0A]">Our Story</h4>
                        <p className="text-xs text-[#64748B] leading-relaxed">{brandInfo.about}</p>
                     </div>
                  )}
                  {activePhoneTab === 2 && (
                     <div className="space-y-3">
                        {brandInfo.services.slice(0,4).map((s,i) => (
                           <div key={i} className="p-3 bg-[#F8FAFC] rounded-xl border border-neutral-100 text-xs font-bold text-[#0A0A0A] flex items-center justify-between">
                              {s} <ArrowRight className="w-3 h-3 text-[#64748B]" />
                           </div>
                        ))}
                     </div>
                  )}
                  {activePhoneTab === 3 && (
                     <div className="space-y-4">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                           <p className="text-xs font-bold">Call Us</p>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><Clock className="w-4 h-4" /></div>
                           <p className="text-xs font-bold">{brandInfo.hours}</p>
                        </div>
                     </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        );

      case 7: // Glass UI
        return (
          <motion.div
            key="glass"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 relative bg-neutral-900 flex flex-col items-center justify-center p-6 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#2563EB] rounded-full blur-[60px] opacity-40"></div>
            <div className="absolute bottom-10 left-0 w-48 h-48 bg-purple-600 rounded-full blur-[60px] opacity-30"></div>
            
            <motion.div 
               className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-6 text-white shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-10 flex flex-col items-center"
               whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-white/20 border border-white/30 mb-4 p-3 backdrop-blur-md shadow-inner">
                 <img src={brandInfo.logo} className="w-full h-full object-contain filter brightness-0 invert" alt="Logo" />
              </div>
              <h3 className="text-xl font-bold mb-1 tracking-tight">{brandInfo.name}</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/60 mb-8">{brandInfo.tagline}</p>
              
              <div className="grid grid-cols-2 gap-3 w-full mb-6">
                 <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                    <span className="text-[10px] font-medium">Services</span>
                 </div>
                 <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <span className="text-[10px] font-medium">Hours</span>
                 </div>
              </div>
              
              <div className="flex gap-2 w-full justify-center mb-6">
                 <div onClick={() => handleAction('Call')} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"><Phone className="w-4 h-4" /></div>
                 <div onClick={() => handleAction('WhatsApp')} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"><MessageCircle className="w-4 h-4" /></div>
                 <div onClick={() => handleAction('Insta')} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"><Instagram className="w-4 h-4" /></div>
                 <div onClick={() => handleAction('Share')} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"><Share2 className="w-4 h-4" /></div>
              </div>
              
              <button onClick={() => handleAction('SaveContact')} className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all rounded-xl font-bold text-sm border border-white/10 shadow-lg">Save Contact</button>
            </motion.div>
          </motion.div>
        );

      case 8: // Portfolio
        return (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 bg-[#F8FAFC] pt-12 px-4 overflow-y-auto no-scrollbar pb-8"
          >
            <div className="flex items-center justify-between mb-4 px-2">
               <div>
                  <h3 className="text-xl font-bold text-[#0A0A0A]">Showcase</h3>
                  <p className="text-xs text-[#2563EB] font-bold">{brandInfo.name}</p>
               </div>
               <div className="w-10 h-10 bg-white rounded-full shadow-sm border border-neutral-100 flex items-center justify-center p-2">
                  <img src={brandInfo.logo} className="w-full h-full object-contain" alt="Logo" />
               </div>
            </div>
            
            <div className="flex gap-2 w-full justify-between mb-6 px-2">
               <div onClick={() => handleAction('Call')} className="w-10 h-10 rounded-full bg-white text-[#2563EB] shadow-sm border border-neutral-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors"><Phone className="w-4 h-4" /></div>
               <div onClick={() => handleAction('WhatsApp')} className="w-10 h-10 rounded-full bg-white text-[#2563EB] shadow-sm border border-neutral-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors"><MessageCircle className="w-4 h-4" /></div>
               <div onClick={() => handleAction('Insta')} className="w-10 h-10 rounded-full bg-white text-[#2563EB] shadow-sm border border-neutral-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors"><Instagram className="w-4 h-4" /></div>
               <div onClick={() => handleAction('Share')} className="w-10 h-10 rounded-full bg-white text-[#2563EB] shadow-sm border border-neutral-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors"><Share2 className="w-4 h-4" /></div>
            </div>
            
            <button onClick={() => handleAction('SaveContact')} className="w-full py-3 bg-[#0A0A0A] text-white text-xs font-bold rounded-xl mb-6">Save Contact</button>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: 'Digital Cards', aspect: 'col-span-2 aspect-[2/1]', color: 'bg-blue-100' },
                { title: 'Mini Sites', aspect: 'aspect-square', color: 'bg-purple-100' },
                { title: 'NFC Tech', aspect: 'aspect-square', color: 'bg-indigo-100' },
                { title: 'Branding', aspect: 'col-span-2 aspect-video', color: 'bg-slate-200' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 0.98 }}
                  className={`rounded-2xl overflow-hidden relative cursor-pointer group ${item.aspect} ${item.color}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                     <span className="text-white font-bold text-sm tracking-wide">{item.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 9: // Corporate
        return (
          <motion.div
            key="corporate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 bg-[#050505] flex flex-col p-8 pt-16 relative overflow-hidden"
          >
            {/* Elegant Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            
            <div className="w-16 h-16 bg-white rounded-lg p-2 mb-12 shadow-2xl">
               <img src={brandInfo.logo} className="w-full h-full object-contain filter grayscale" alt="Logo" />
            </div>
            
            <h2 className="text-2xl font-serif text-white mb-2 tracking-tight">Prinkesh<br/>Devi.</h2>
            <div className="w-6 h-0.5 bg-[#2563EB] mb-8"></div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-12">Executive Profile</p>
            
            <div className="space-y-6 flex-1">
              <div className="group cursor-pointer">
                <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Position</p>
                <p className="font-serif text-white/90 group-hover:text-white transition-colors">{brandInfo.role}</p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Company</p>
                <p className="font-serif text-white/90 group-hover:text-white transition-colors">{brandInfo.name}</p>
              </div>
            </div>
            
            <div className="flex gap-3 w-full mb-8">
               <div onClick={() => handleAction('Call')} className="w-10 h-10 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"><Phone className="w-4 h-4" /></div>
               <div onClick={() => handleAction('WhatsApp')} className="w-10 h-10 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"><MessageCircle className="w-4 h-4" /></div>
               <div onClick={() => handleAction('Insta')} className="w-10 h-10 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"><Instagram className="w-4 h-4" /></div>
               <div onClick={() => handleAction('Share')} className="w-10 h-10 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"><Share2 className="w-4 h-4" /></div>
            </div>
            
            <div className="mt-auto space-y-3">
               <button onClick={() => handleAction('SaveContact')} className="w-full border border-white/20 bg-white text-black transition-colors px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold flex justify-between items-center">
                  Save Contact <Download className="w-3 h-3" />
               </button>
               <button className="w-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold flex justify-between items-center">
                  Contact Office <ArrowRight className="w-3 h-3" />
               </button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="experience" className="py-32 bg-[#0A0A0A] relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
            Experience the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Difference.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Every business is unique. Every digital identity should be too.<br/>
            Explore multiple interaction styles crafted by OneLynk.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="w-full flex overflow-x-auto no-scrollbar gap-2 pb-8 mb-8 snap-x justify-start md:justify-center">
          {styles.map((style, index) => (
            <button
              key={style}
              onClick={() => {
                setActiveStyle(index);
              }}
              className={`snap-center shrink-0 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeStyle === index 
                  ? 'bg-white text-[#0A0A0A] shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105' 
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {/* Mockup Container */}
        <div className="flex justify-center mb-24 relative">
          <motion.div 
            className="w-[320px] aspect-[9/19] bg-neutral-900 rounded-[3.5rem] p-3 shadow-2xl border border-white/10 relative z-10"
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.1)' }}
          >
            {/* Screen */}
            <div className="w-full h-full bg-white rounded-[2.75rem] overflow-hidden relative flex flex-col isolate shadow-inner">
               {/* Notch */}
               <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
                  <div className="w-32 h-6 bg-neutral-900 rounded-b-[1rem]"></div>
               </div>
               
               {renderContent()}
            </div>
            
            {/* Phone Reflections */}
            <div className="absolute inset-0 rounded-[3.5rem] border border-white/20 pointer-events-none"></div>
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"></div>
          </motion.div>
          
          {/* Ambient light behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-blue-500/20 blur-[80px] pointer-events-none z-0"></div>
        </div>

        {/* Note */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <p className="text-sm text-white/40 leading-relaxed font-medium">
            "These are interaction styles—not templates."<br/>
            Every OneLynk Digital Identity is custom-designed from scratch to reflect your business, personality, and brand.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white/5 border border-white/10 rounded-[32px] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Found an interaction style you love?</h3>
          <p className="text-white/60 mb-10 max-w-lg mx-auto relative z-10">Every OneLynk digital identity is custom-crafted to match your brand and business.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a href="#profile" className="px-8 py-4 bg-white text-[#0A0A0A] font-bold rounded-2xl hover:bg-neutral-200 transition-colors inline-block text-center">
              Let's Create Yours
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

