import { Profile } from './components/Profile';
import { About } from './components/About';
import { FeaturedIdentity } from './components/FeaturedIdentity';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { Demo } from './components/Demo';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Footer } from './components/Footer';
import logo from './assets/logo.png';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-sans selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
      <header className="absolute top-0 inset-x-0 p-8 flex justify-between items-center z-50 max-w-[1024px] mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-lg shadow-blue-500/20 bg-neutral-900">
             <img src={logo} alt="OneLynk Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight uppercase leading-none">OneLynk</h1>
            <span className="text-[10px] tracking-[0.2em] text-[#64748B] font-semibold uppercase">Connect • Grow • Succeed.</span>
          </div>
        </div>
      </header>

      <main>
        <Profile />
        <About />
        <FeaturedIdentity />
        <Process />
        <Services />
        <Demo />
        <WhyChooseUs />
      </main>

      <Footer />
    </div>
  );
}
