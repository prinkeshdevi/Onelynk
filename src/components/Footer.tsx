import logo from 'public/assets/logo.png';

export function Footer() {
  return (
    <footer className="max-w-[1024px] mx-auto px-6 py-16 border-t border-neutral-100 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-sm bg-white border border-neutral-100">
               <img src={logo} alt="OneLynk Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight uppercase leading-none text-[#0A0A0A]">OneLynk</h1>
            </div>
          </div>
          <p className="text-[#64748B] text-sm leading-relaxed">
            Crafting premium digital identities for businesses that demand excellence.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-[#0A0A0A] mb-4 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-3">
            {['The Studio', 'Expertise', 'Experience', 'Contact'].map(link => (
              <li key={link}><a href="#" className="text-sm text-[#64748B] hover:text-[#2563EB] transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#0A0A0A] mb-4 uppercase tracking-widest text-xs">Contact</h4>
          <ul className="space-y-3">
            <li><a href="mailto:onelynkofficial@gmail.com" className="text-sm text-[#64748B] hover:text-[#2563EB] transition-colors">onelynkofficial@gmail.com</a></li>
            <li><a href="tel:7385010471" className="text-sm text-[#64748B] hover:text-[#2563EB] transition-colors">+91 73850 10471</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#0A0A0A] mb-4 uppercase tracking-widest text-xs">Social</h4>
          <ul className="space-y-3">
            {[
              { name: 'WhatsApp', url: '#' },
              { name: 'Instagram', url: 'https://www.instagram.com/onelynk.official/' },
              { name: 'Mail', url: 'mailto:onelynkofficial@gmail.com' }
            ].map(social => (
              <li key={social.name}><a href={social.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#64748B] hover:text-[#2563EB] transition-colors">{social.name}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-[#64748B] font-medium tracking-wide uppercase text-center md:text-left">
          © {new Date().getFullYear()} OneLynk Luxury Identity Studio • Built with precision
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-[11px] text-[#64748B] uppercase tracking-wider hover:text-[#0A0A0A]">Privacy Policy</a>
          <a href="#" className="text-[11px] text-[#64748B] uppercase tracking-wider hover:text-[#0A0A0A]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
