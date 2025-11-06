import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ResetPassword from "./ResetPassword";

function LandingPage() {
  const [email, setEmail] = useState("");

  const notify = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    alert(`Thanks! We'll notify ${email} at launch.`);
    // Here you would typically send the email to your backend or a service
    setEmail("");
  };

  const steps = [
    { title: "Search", text: "Filter by mood, location, date, and price." },
    { title: "Browse", text: "See real availability with photos and ratings." },
    { title: "Details", text: "Maps, policies, chat with hosts—no surprises." },
    { title: "Book", text: "One‑tap checkout, calendar sync, reminders." },
  ];

  const features = [
    "Smart filters & recommendations",
    "Transparent pricing & fees",
    "Secure payments",
    "Host portal & reviews",
    "Saved lists & sharing",
    "Mobile-first experience",
  ];

  const roadmap = [
    { phase: "Now", items: ["Prototype", "Core search/browse"] },
    { phase: "Beta", items: ["Payments", "Provider portal", "1 pilot city"] },
    { phase: "Launch", items: ["Reviews", "AI recs", "2nd city expansion"] },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold">
            TravelNest
          </a>
          <nav className="hidden sm:flex gap-6 text-sm text-neutral-600">
            <a href="#how" className="hover:text-black">
              How it works
            </a>
            <a href="#features" className="hover:text-black">
              Features
            </a>
            <a href="#roadmap" className="hover:text-black">
              Roadmap
            </a>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-xl bg-black text-white text-sm"
          >
            Get updates
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Find and book activities in minutes, not hours.
            </h1>
            <p className="mt-3 text-neutral-700 max-w-xl">
              A clean marketplace for local adventures and events. Simple flow:
              search → view → detail → book. Built for clarity and speed.
            </p>
            <form onSubmit={notify} className="mt-6 flex gap-3 max-w-md">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-neutral-300 px-3 py-2"
              />
              <button className="rounded-xl bg-black text-white px-4 py-2">
                Notify me
              </button>
            </form>
            <p className="mt-2 text-xs text-neutral-500">
              No spam. Just launch updates.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-white border border-neutral-200 shadow-inner p-4">
              <div className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
                User flow
              </div>
              <ol className="grid sm:grid-cols-2 gap-3 text-sm">
                {steps.map((s) => (
                  <li key={s.title} className="p-3 rounded-xl bg-neutral-100">
                    <div className="font-medium">{s.title}</div>
                    <div className="text-neutral-600">{s.text}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <div className="mt-4 grid md:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-neutral-200 bg-white p-5"
            >
              <div className="text-2xl">✨</div>
              <div className="mt-2 font-medium">{s.title}</div>
              <p className="text-sm text-neutral-700">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 rounded-2xl border border-neutral-200 bg-white p-4"
            >
              <span>✅</span>
              <span className="text-neutral-700">{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold">Roadmap</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {roadmap.map((r) => (
            <div
              key={r.phase}
              className="rounded-2xl border border-neutral-200 bg-white p-5"
            >
              <div className="text-sm text-neutral-500">Phase</div>
              <div className="font-semibold">{r.phase}</div>
              <ul className="mt-2 space-y-1 text-sm text-neutral-700">
                {r.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span>•</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="rounded-3xl bg-black text-white p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Be first to try the beta</h3>
            <p className="text-sm text-white/80">
              Join the waitlist and get early access perks.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-3 rounded-2xl bg-white text-black font-medium"
          >
            Join waitlist
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="font-medium">When is launch?</div>
            <p className="text-sm text-neutral-700">
              Beta after core features are complete, then public release in the
              next phase.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="font-medium">Which cities first?</div>
            <p className="text-sm text-neutral-700">
              We plan to start with two cities that have strong event density
              before expanding.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold">Stay in the loop</h2>
        <form onSubmit={notify} className="mt-4 max-w-md space-y-3">
          <label className="block text-sm">
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
            />
          </label>
          <button
            className={`rounded-xl px-4 py-2 text-white ${
              email.includes("@") ? "bg-black" : "bg-neutral-300"
            }`}
            disabled={!email.includes("@")}
          >
            Notify me
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-neutral-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Wander</span>
          <div className="flex gap-4">
            <a href="#how" className="hover:underline">
              How it works
            </a>
            <a href="#features" className="hover:underline">
              Features
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/resetPassword/:token" element={<ResetPassword />} />
    </Routes>
  );
}
