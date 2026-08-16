import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RevLogo from "./assets/revlogo1.png";
import Snippet from "./assets/revsnip.png";
import AnalyticIcon from "./assets/analytics.png";
import GlobeIcon from "./assets/globe.png";
import ShieldIcon from "./assets/shield.png";
import WalletIcon from "./assets/wallet.png";
import OrdersIcon from "./assets/orders.png";
import InvoiceIcon from "./assets/invoice.png";
import { useScrollReveal } from "./useScrollReveal";
import { useSmoothScroll } from "./useSmoothScroll";

const steps: { number: string; title: string; body: string }[] = [
  {
    number: "01",
    title: "Connect where money arrives",
    body: "Point revnet at the places revenue already lands — your payment processor, your invoicing, your onchain wallets. Every charge, refund, and settlement flows into one ledger instead of four dashboards.",
  },
  {
    number: "02",
    title: "Watch the numbers settle",
    body: "Revenue, profit, orders, and cancellations update as transactions clear. Switch between seven days and twelve months and every card, curve, and row re-reads against the window you picked.",
  },
  {
    number: "03",
    title: "Act before the month closes",
    body: "Spot the week revenue dipped, the customer who keeps refunding, the run of pending orders that never confirmed — while there is still time to do something about it.",
  },
];

const features: { icon: string; title: string; body: string }[] = [
  {
    icon: WalletIcon,
    title: "Revenue at a glance",
    body: "Four headline figures — revenue, net profit, orders, cancelled — each with its movement against the previous period, so you know the direction before you read the number.",
  },
  {
    icon: AnalyticIcon,
    title: "Trends you can actually read",
    body: "A clean revenue curve across your chosen window. No stacked axes or competing series — just the shape of the money over time, and where it broke from the pattern.",
  },
  {
    icon: OrdersIcon,
    title: "Order-level detail",
    body: "Every order with its customer, status, date, and amount, filterable down to confirmed, pending, cancelled, or refunded. The headline figure is always one click from the rows behind it.",
  },
  {
    icon: InvoiceIcon,
    title: "Live activity",
    body: "A running feed of orders as they land. Revenue stops being a number you check monthly and becomes something you can watch move.",
  },
  {
    icon: GlobeIcon,
    title: "Multi-currency, one total",
    body: "Sell in several currencies and settle in several rails without keeping the conversion maths in your head. Everything reconciles into a single figure you can trust.",
  },
  {
    icon: ShieldIcon,
    title: "Books that keep themselves",
    body: "Invoices, bookkeeping entries, and tax thresholds tracked as revenue comes in, so the numbers you watch all year are the same ones you file at the end of it.",
  },
];

const outcomes: { stat: string; label: string; body: string }[] = [
  {
    stat: "One",
    label: "source of truth",
    body: "Processor, invoicing, and wallets reconciled into a single revenue figure instead of three that never quite agree.",
  },
  {
    stat: "Live",
    label: "not monthly",
    body: "Figures move as transactions clear, so a bad week surfaces in days rather than in next month's close.",
  },
  {
    stat: "4",
    label: "timeframes",
    body: "Seven days, thirty days, ninety days, or twelve months — the same view at whatever altitude the question needs.",
  },
];

const faqItems: { question: string; answer: string }[] = [
  {
    question: "What exactly does revnet track?",
    answer: "Money in and money out of your business. Gross revenue, net profit, order volume, and cancellations — each broken down by timeframe and traceable to the individual orders behind it.",
  },
  {
    question: "How current are the figures?",
    answer: "They move as transactions settle. When an order confirms, refunds, or cancels, the stat cards, revenue curve, and orders table re-read against the change rather than waiting for an overnight batch.",
  },
  {
    question: "Do I need an accountant to set this up?",
    answer: "No. revnet is built for founders who read their own numbers. Connect your revenue sources and the dashboard is populated — there is no chart of accounts to design first.",
  },
  {
    question: "What if I sell in more than one currency?",
    answer: "Each stream is tracked in the currency it settled in and rolled into one reporting total, so a multi-currency business reads as clearly as a single-market one.",
  },
  {
    question: "Can I see what is behind a number?",
    answer: "Always. Every headline figure resolves down to the orders that produced it — customer, status, date, and amount — so nothing on the dashboard is a figure you have to take on faith.",
  },
];

export default function ProductPage() {
  const navigate = useNavigate();

  useSmoothScroll();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [heroRef, heroRevealed] = useScrollReveal();
  const [whatRef, whatRevealed] = useScrollReveal();
  const [howRef, howRevealed] = useScrollReveal();
  const [featuresRef, featuresRevealed] = useScrollReveal();
  const [outcomesRef, outcomesRevealed] = useScrollReveal();
  const [faqRef, faqRevealed] = useScrollReveal();
  const [ctaRef, ctaRevealed] = useScrollReveal();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "revnet — know exactly where your revenue stands";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0F0F10] text-[#E5E5E5] font-sans selection:bg-[#10B981]/30 selection:text-white overflow-x-hidden">

      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto animate-fade-in">
        <Link to="/" className="flex items-center gap-2" aria-label="revnet home">
          <img src={RevLogo} className="w-6 h-6 rounded-sm mt-0.5" alt="" />
          <div>
            <span className="font-bold text-3xl text-white">rev</span>
            <span className="font-thin text-3xl text-zinc-400">net</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#what" className="hover:text-white transition-colors duration-200">What it does</a>
          <a href="#how" className="hover:text-white transition-colors duration-200">How it works</a>
          <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
          <a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
          >
            Login
          </button>
        </div>
      </nav>

      <header
        ref={heroRef}
        className={`max-w-7xl mx-auto px-8 pt-8 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-1000 ease-out ${
          heroRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col items-start lg:col-span-6">
          <p className="text-zinc-500 text-xs font-semibold tracking-widest uppercase mb-6">
            Revenue tracking for founders
          </p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-white">
            Know exactly where your revenue stands.
          </h1>
          <p className="text-base text-zinc-400 max-w-xl mb-8 leading-relaxed">
            <span className="text-white font-medium">revnet</span> pulls every sale, refund, and settlement into
            one live view — what you earned, what you kept, and what it is doing this week compared to last.
            No spreadsheet reconciliation, no waiting for the month to close.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="text-xs font-bold bg-[#10B981] hover:bg-[#059669] text-white pl-3 pr-7 py-3 rounded-full transition-all duration-300 scale-100 hover:scale-[1.03] active:scale-[0.98] flex items-center gap-3 tracking-wider uppercase shadow-[0_4px_14px_rgba(16,185,129,0.25)]"
            >
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-normal">→</span>
              See your revenue
            </button>
            <a
              href="#how"
              className="text-xs font-bold tracking-wider uppercase text-[#10B981] border border-[#10B981]/20 hover:border-[#10B981]/40 bg-[#10B981]/5 px-7 py-3.5 rounded-full transition-colors duration-200"
            >
              How it works
            </a>
          </div>

          <div className="mt-10 flex flex-col items-start gap-3">
            <p className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase select-none">
              Tracks
            </p>
            <div className="flex flex-wrap gap-8 items-center text-lg font-bold tracking-tighter text-zinc-300">
              <span>Revenue</span>
              <span>Profit</span>
              <span>Orders</span>
              <span>Refunds</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          aria-label="Open the revnet dashboard"
          className="block w-full lg:col-span-6 lg:pl-4 saturate-0 hover:saturate-100 transition-all ease-in-out duration-700 cursor-pointer"
        >
          <div className="relative group rounded-xl border-4 border-zinc-800/80 bg-[#0B0B0C] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] transition-all duration-500 hover:border-zinc-700 hover:scale-[1.01] hover:shadow-[0_30px_70px_rgba(16,185,129,0.1)] aspect-[1400/760]">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#10B981]/10 to-transparent opacity-30 blur-xl pointer-events-none z-0" />
            <img
              src={Snippet}
              alt="The revnet dashboard: revenue, profit, order, and cancellation figures above a revenue curve"
              width={1400}
              height={760}
              fetchPriority="high"
              className="relative z-10 w-full h-full object-cover object-top"
            />
          </div>
        </button>
      </header>

      <section
        id="what"
        ref={whatRef}
        className={`max-w-7xl mx-auto px-8 py-24 border-t border-zinc-900/60 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-mt-24 transition-all duration-1000 ease-out ${
          whatRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="lg:col-span-5">
          <p className="text-zinc-500 text-xs font-semibold tracking-widest uppercase mb-4">What it does</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.15]">
            One number, <br />
            and everything behind it.
          </h2>
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6 text-base text-zinc-400 leading-relaxed lg:pt-8">
          <p>
            Most founders find out how the business did weeks after it did it — once the processor report,
            the invoices, and the bank statement have been argued into agreement in a spreadsheet. By then the
            month is gone and the number is history.
          </p>
          <p>
            revnet tracks revenue as it happens. Sales, refunds, cancellations, and settlements land in one
            ledger the moment they clear, and the dashboard reads straight off it: what came in, what you kept
            after costs, how many orders it took, and how much of it fell out the other side.
          </p>
          <p className="text-white font-medium">
            Every figure stays traceable. Tap a headline number and you get the orders that made it —{" "}
            <span className="text-[#10B981] font-semibold">no black boxes, no reconciliation homework</span>.
          </p>
        </div>
      </section>

      <section
        id="how"
        ref={howRef}
        className={`max-w-7xl mx-auto px-8 py-24 border-t border-zinc-900/60 scroll-mt-24 transition-all duration-1000 ease-out ${
          howRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-3xl mb-20">
          <p className="text-[#10B981] text-xs font-bold tracking-widest uppercase mb-4">How it works</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            From first sale to full picture.
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Three steps, and none of them involve exporting a CSV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-6 border-t border-zinc-900/40">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-xs font-bold text-zinc-500 tracking-widest uppercase block mb-3">
                {step.number} / Step
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="features"
        ref={featuresRef}
        className={`max-w-7xl mx-auto px-8 py-24 border-t border-zinc-900/60 scroll-mt-24 transition-all duration-1000 ease-out ${
          featuresRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-3xl mb-20">
          <p className="text-[#10B981] text-xs font-bold tracking-widest uppercase mb-4">What you get</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Built around the questions you actually ask.
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            How much did we make? Did we keep any of it? What changed this week, and which orders caused it?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-zinc-800/60 bg-[#131315] p-8 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <img className="w-6 h-6" src={feature.icon} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={outcomesRef}
        className={`max-w-7xl mx-auto px-8 py-24 border-t border-zinc-900/60 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start transition-all duration-1000 ease-out ${
          outcomesRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="lg:col-span-5">
          <p className="text-zinc-500 text-xs font-semibold tracking-widest uppercase mb-4">Why it matters</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Stop guessing <br />between closes.
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed mt-6 max-w-md">
            A revenue number you only see monthly is a number you can only react to monthly. revnet shortens the
            distance between what happened and when you find out.
          </p>
        </div>

        <div className="lg:col-span-7 border-t border-zinc-800/80 lg:mt-8">
          {outcomes.map((outcome) => (
            <div key={outcome.label} className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-6 border-b border-zinc-800/80">
              <div className="sm:col-span-4">
                <span className="block text-2xl font-medium tracking-tight text-white">{outcome.stat}</span>
                <span className="block text-[10px] font-semibold tracking-widest text-zinc-600 uppercase mt-1">
                  {outcome.label}
                </span>
              </div>
              <p className="sm:col-span-8 text-sm text-zinc-400 leading-relaxed max-w-2xl">{outcome.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="faq"
        ref={faqRef}
        className={`max-w-7xl mx-auto px-8 py-24 border-t border-zinc-900/60 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-mt-24 transition-all duration-1000 ease-out ${
          faqRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="lg:col-span-5">
          <p className="text-zinc-500 text-xs font-semibold tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            Frequently asked <br />questions
          </h2>
        </div>

        <div className="lg:col-span-7 border-t border-zinc-800/80 lg:mt-8">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-zinc-800/80">
                <h3>
                  <button
                    type="button"
                    id={`product-faq-trigger-${index}`}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`product-faq-panel-${index}`}
                    className="group flex w-full items-center justify-between gap-4 py-6 text-left cursor-pointer"
                  >
                    <span className="text-base font-medium text-[#E5E5E5] group-hover:text-white transition-colors duration-200">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`text-xl font-light text-zinc-500 group-hover:text-[#10B981] transition-transform duration-300 ease-in-out select-none ${
                        isOpen ? "rotate-45 text-[#10B981]" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`product-faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`product-faq-trigger-${index}`}
                  className={`grid transition-all duration-300 ease-in-out text-sm text-zinc-400 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden leading-relaxed max-w-2xl">
                    <p className="pb-6">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        ref={ctaRef}
        className={`max-w-7xl mx-auto px-8 py-24 border-t border-zinc-900/60 transition-all duration-1000 ease-out ${
          ctaRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="rounded-xl border border-zinc-800/60 bg-[#131315] px-8 py-16 md:px-16 md:py-20 flex flex-col items-start gap-6">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.15] max-w-3xl">
            See what your revenue is doing right now.
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed max-w-xl">
            Open the dashboard and walk through a live revenue view — stat cards, the revenue curve, and the
            orders behind every figure.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="text-xs font-bold bg-[#10B981] hover:bg-[#059669] text-white pl-3 pr-7 py-3 rounded-full transition-all duration-300 scale-100 hover:scale-[1.03] active:scale-[0.98] flex items-center gap-3 tracking-wider uppercase shadow-[0_4px_14px_rgba(16,185,129,0.25)]"
          >
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-normal">→</span>
            Open the dashboard
          </button>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-8 pt-24 pb-12 border-t border-zinc-900 mt-12 text-sm text-zinc-400">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-16">

          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <Link to="/" className="flex items-center gap-2" aria-label="revnet home">
              <img src={RevLogo} className="w-6 h-6 rounded-sm mt-0.5" alt="" />
              <div className="text-xl">
                <span className="font-bold text-white">rev</span>
                <span className="font-thin text-zinc-400">net</span>
              </div>
            </Link>
            <p className="max-w-xs text-xs leading-relaxed text-zinc-500">
              Revenue tracking for founders who want to know where they stand today, not at the end of the month.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-[10px] font-semibold tracking-widest text-zinc-600 uppercase">Product</span>
            <div className="flex flex-col gap-3 text-xs">
              <a href="#what" className="hover:text-white transition-colors duration-200">What it does</a>
              <a href="#how" className="hover:text-white transition-colors duration-200">How it works</a>
              <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
              <a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-[10px] font-semibold tracking-widest text-zinc-600 uppercase">revnet</span>
            <div className="flex flex-col gap-3 text-xs">
              <Link to="/" className="hover:text-white transition-colors duration-200">Home</Link>
              <Link to="/dashboard" className="hover:text-white transition-colors duration-200">Dashboard</Link>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-600">
          <p>© 2026 revnet. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
