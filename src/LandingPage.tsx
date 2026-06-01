import { useState } from "react";
import RevLogo from "./assets/revlogo1.png"
import Snippet from "./assets/revsnip.png"
import AnalyticIcon from "./assets/analytics.png"
import GlobeIcon from "./assets/globe.png"
import ShieldIcon from "./assets/shield.png"
import SolanaIcon from "./assets/solana.png"
import CircleIcon from "./assets/circle.png"
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How does global incorporation work through revnet?",
      answer: "We translate complex legal pipelines into automated platform actions. By providing basic operational metadata through your dashboard, our background process hooks into supported jurisdictions to establish corporate entities without manual physical paperwork."
    },
    {
      question: "Is real-time data tracking completely synchronized?",
      answer: "Yes. Every invoice created, payment settled, or ledger modification processed streams live directly into your platform state. Your dashboard curves and balance summaries re-render instantly to mirror active transactions."
    },
    {
      question: "Do I need previous infrastructure management expertise?",
      answer: "Not at all. We engineered the entire environment to completely abstract low-level structural complexities. If you can navigate a clean web interface, you possess more than enough familiarity to run operations seamlessly."
    },
    {
      question: "How does the integrated compliance ledger operate?",
      answer: "The framework continuously parses incoming revenue loops against localized tax rules and automated bookkeeping templates. By running these background checks continuously, we surface accounting flags before they scale into regulatory bottlenecks."
    },
    {
      question: "What asset classes and settlement corridors are supported?",
      answer: "We prioritize seamless bridge layers between major onchain stablecoin rails and standard fiat banking networks, allowing borderless founders to direct their digital revenues into offchain necessities like real estate or global payroll."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F0F10] text-[#E5E5E5] font-sans selection:bg-[#10B981]/30 selection:text-white">
      
      {/* --- NAVIGATION BAR --- */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src={RevLogo} className="w-8 h-8 rounded-sm mt-1" alt="revnet logo"/>
          <div>
            <span className="font-bold text-3xl text-white">rev</span>
            <span className="font-thin text-3xl text-zinc-400">net</span> 
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">How It Works</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Login
          </button>
          <button 
            onClick={() => navigate('/dashboard')}
            className="text-xs font-bold bg-[#10B981] hover:bg-[#059669] text-white px-5 py-3 rounded-full transition-colors tracking-wider uppercase flex items-center gap-2 shadow-[0_4px_12px_rgba(16,185,129,0.15)]"
          >
            <span>→</span> Get Started
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="max-w-7xl mx-auto px-8 pt-8 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start lg:col-span-6">
          <p className="text-zinc-500 text-xs font-semibold tracking-widest uppercase mb-6">
            For modern digital businesses
          </p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-white">
            Business infrastructure for the next generation of commerce.
          </h1>
          <p className="text-base text-zinc-400 max-w-xl mb-8 leading-relaxed">
            Incorporate, bank, get paid, and stay compliant — all from one platform built for founders who work without borders. Starting with seamless integrations and real-time analytics.
          </p>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/dashboard')}
              className="text-xs font-bold bg-[#10B981] hover:bg-[#059669] text-white pl-3 pr-7 py-3 rounded-full transition-colors flex items-center gap-3 tracking-wider uppercase shadow-[0_4px_14px_rgba(16,185,129,0.25)]"
            >
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-normal">→</span>
              Get Started
            </button>
            <button className="text-xs font-bold tracking-wider uppercase text-[#10B981] border border-[#10B981]/20 hover:border-[#10B981]/40 bg-[#10B981]/5 px-7 py-3.5 rounded-full transition-colors">
              Book a Demo
            </button>
          </div>

          {/* BRAND LOGOS */}
          <div className="mt-10 flex flex-col items-start gap-3">
            <p className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase select-none">
              Trusted By
            </p>
            <div className="flex flex-wrap gap-8 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-row gap-1.5 items-center">
                <img src={SolanaIcon} className="w-5 h-5" alt="Solana"/>
                <span className="text-lg font-bold tracking-tighter hover:text-white transition-colors cursor-default">Solana</span>
              </div>
              <div className="flex flex-row gap-1.5 items-center">
                <img src={CircleIcon} className="w-5 h-5" alt="Circle"/>
                <span className="text-lg font-bold tracking-tighter hover:text-white transition-colors cursor-default">Circle</span>
              </div>
              <span className="text-lg font-bold tracking-tighter hover:text-white transition-colors cursor-default">Stripe</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div 
          onClick={() => navigate('/dashboard')} 
          className="w-full lg:col-span-6 lg:pl-4 saturate-0 hover:saturate-100 transition-all ease-in-out duration-500 cursor-pointer"
        >
          <div className="relative group rounded-xl border-4 border-zinc-800/80 bg-[#0B0B0C] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] transition-all duration-500 hover:border-zinc-700 aspect-[2934/1594]">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#10B981]/10 to-transparent opacity-30 blur-xl transition-all group-hover:opacity-40 pointer-events-none z-0" />
            <img src={Snippet} alt="Dashboard Preview" className="relative z-10 w-full h-full object-cover object-top" />
          </div>
        </div>

      </main>

      {/* --- THE REVENUE NETWORK SECTION --- */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-zinc-900/60 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <p className="text-zinc-500 text-xs font-semibold tracking-widest uppercase mb-4">The Platform</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.15]">
            The Revenue Network. <br />
            Built for borderless teams.
          </h2>
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6 text-base text-zinc-400 leading-relaxed lg:pt-8">
          <p>
            Traditional registration architectures and banking rails isolate your company's physical operations from its digital velocity. RevNet collapses these legacy barriers, functioning as an integrated revenue network built from scratch for software-driven global commerce.
          </p>
          <p>
            Instead of routing transaction states through disconnected tools, our protocol links corporate setups, automated accounting frameworks, and ledger visibility fields straight into a single source of truth. Every milestone updates dynamically inside an interactive operational center.
          </p>
          <p className="text-white font-medium">
            Legacy frameworks isolate data velocity. Fragmented tool chains produce administrative deadlocks. <span className="text-[#10B981] font-semibold">revnet</span> synchronizes your network capabilities, unifying corporate scaling into a unified dashboard framework.
          </p>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-zinc-900/60">
        <div className="max-w-3xl mb-20">
          <p className="text-[#10B981] text-xs font-bold tracking-widest uppercase mb-4">Platform Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Everything you need to run your business onchain.</h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Eliminate structural friction. Stop switching between fragmented tools for accounting, corporate banking, and legal operations. Manage it all from a single automated interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group rounded-xl border border-zinc-800/60 bg-[#131315] p-8 transition-all duration-300 hover:border-zinc-700">
            <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center mb-6">
              <img className="w-6 h-6" src={GlobeIcon} alt="Global"/>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Global Incorporation</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Form your legal entity seamlessly from anywhere in the world. Tailored explicitly for borderless founders operating remote-first frameworks.</p>
          </div>
          {/* Card 2 */}
          <div className="group rounded-xl border border-zinc-800/60 bg-[#131315] p-8 transition-all duration-300 hover:border-zinc-700">
            <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center mb-6">
              <img className="w-6 h-6" src={AnalyticIcon} alt="Analytics"/>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Real-time Financial Analytics</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Track multi-currency revenue streams instantly. Monitor incoming orders, cancellations, and net profit velocity directly through live tracking cards.</p>
          </div>
          {/* Card 3 */}
          <div className="group rounded-xl border border-zinc-800/60 bg-[#131315] p-8 transition-all duration-300 hover:border-zinc-700">
            <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center mb-6">
              <img className="w-6 h-6" src={ShieldIcon} alt="Compliance"/>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Automated Compliance</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Generate localized invoices, track digital bookkeeping entries, and manage continuous regulatory thresholds automatically behind the scenes.</p>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-zinc-900/60">
        <div className="max-w-4xl mb-20">
          <p className="text-[#10B981] text-xs font-bold tracking-widest uppercase mb-4">About revnet</p>
          <h2 className="text-3xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-8">
            We are building programmatic operating systems for borderless founders.
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Our team believes that starting and running a software-driven company shouldn't require navigating endless localized bureaucracy. We write code that automates the friction points of company management, transforming complex legal setups and financial tracking layers into intuitive dashboard actions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-6 border-t border-zinc-900/40">
          <div>
            <span className="text-xs font-bold text-zinc-500 tracking-widest uppercase block mb-3">01 / Engineering Priority</span>
            <h4 className="text-lg font-semibold text-white mb-2">Automate by Default</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">If an operational business milestone can be programmatically initiated, it should be. We substitute hours of paperwork with single-click dashboard configurations.</p>
          </div>
          <div>
            <span className="text-xs font-bold text-zinc-500 tracking-widest uppercase block mb-3">02 / Global Access</span>
            <h4 className="text-lg font-semibold text-white mb-2">Radical Inclusion</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">Your geographic coordinates should never dictate your commercial ceiling. We provide identical high-tier infrastructure assets to operators worldwide.</p>
          </div>
          <div>
            <span className="text-xs font-bold text-zinc-500 tracking-widest uppercase block mb-3">03 / Absolute Clarity</span>
            <h4 className="text-lg font-semibold text-white mb-2">Unified Visibility</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">No obscured data metrics or hidden platform costs. We surface clean, real-time analytics indicators so founders understand their precise position instantly.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-zinc-900/60 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <p className="text-zinc-500 text-xs font-semibold tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">Frequently asked <br />questions</h2>
        </div>

        <div className="lg:col-span-7 border-t border-zinc-800/80 lg:mt-8">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} onClick={() => toggleFaq(index)} className="border-b border-zinc-800/80 py-6 cursor-pointer group flex flex-col justify-center">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-medium text-[#E5E5E5] group-hover:text-white transition-colors">{item.question}</span>
                  <span className={`text-xl font-light text-zinc-500 group-hover:text-[#10B981] transition-transform duration-300 ease-in-out select-none ${isOpen ? "rotate-45 text-[#10B981]" : ""}`}>+</span>
                </div>
                <div className={`grid transition-all duration-300 ease-in-out text-sm text-zinc-400 ${isOpen ? "grid-rows-[1fr] mt-4 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden leading-relaxed max-w-2xl">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="max-w-7xl mx-auto px-8 pt-24 pb-12 border-t border-zinc-900 mt-12 text-sm text-zinc-400">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-16">
          
          {/* Brand */}
          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <img src={RevLogo} className="w-6 h-6 rounded-sm mt-0.5" alt="revnet logo" />
              <div className="text-xl">
                <span className="font-bold text-white">rev</span>
                <span className="font-thin text-zinc-400">net</span> 
              </div>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-zinc-500">
              The global incorporation and accounting platform for borderless internet enterprise.
            </p>
          </div>

          {/* Navigation Link Columns */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-[10px] font-semibold tracking-widest text-zinc-600 uppercase">Navigation</span>
            <div className="flex flex-col gap-3 text-xs">
              <a href="#" className="hover:text-white transition-colors">Features</a>
              <a href="#" className="hover:text-white transition-colors">How It Works</a>
              <a href="#" className="hover:text-white transition-colors">Pricing</a>
              <a href="#" className="hover:text-white transition-colors">FAQ</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
            </div>
          </div>

          {/* Legal Information & Social Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-[10px] font-semibold tracking-widest text-zinc-600 uppercase">Legal</span>
            <div className="flex flex-col gap-3 text-xs mb-2">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-zinc-500 pt-2">
              {/* X */}
              <a href="#" className="hover:text-white transition-colors" aria-label="X">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Instagram (TypeScript friendly height parameter mapped) */}
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* Telegram */}
              <a href="#" className="hover:text-white transition-colors" aria-label="Telegram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M21.418 4.938L19 20.03c-.24 1.5-1.2.18-1.2.18l-5.65-4.18-2.73 2.63c-.3.3-.55.55-1.05.55l.4-5.63 10.26-9.28c.45-.4-.1-.63-.7-.23L5.66 14.15l-5.46-1.7c-1.18-.38-1.21-1.18.25-1.75l21.31-8.22c.98-.38 1.84.22 1.66 1.6z"/></svg>
              </a>
              {/* Discord */}
              <a href="#" className="hover:text-white transition-colors" aria-label="Discord">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.075 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.298 12.298 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 h-1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-600">
          <p>© 2026 revnet. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}