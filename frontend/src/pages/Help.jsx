import React from 'react';

const FAQS = [
  { q: "How can I volunteer for a restoration?", a: "We welcome passionate souls! Email support@ramdootrestores.in with your city and availability. We'll connect you with the nearest active restoration drive." },
  { q: "Where does my donation go?", a: "100% of all donations and YouTube revenue goes directly to purchasing materials, paying local craftsmen for stonework, and funding community awareness programs." },
  { q: "Can I report a neglected heritage site?", a: "Absolutely. Send us photos, the GPS location or address, and any historical details you know. Our team will assess feasibility and prioritize accordingly." },
  { q: "How are you connected to Ram Mandir?", a: "We are inspired by the spirit behind the Ram Mandir movement — reclaiming, restoring, and celebrating India's sacred spaces. We work on temples and sites across the country." },
  { q: "What types of sites do you restore?", a: "We specialize in ancient stepwells (baoli/vav), temple complexes (mandirs), sacred kunds, chhatris, and other heritage structures that have been neglected or damaged." },
];

export default function Help() {
  return (
    <div className="min-h-screen">
      <section className="relative py-16 px-6 text-center overflow-hidden"
        style={{background:'linear-gradient(180deg, #1a0f05, #2d1f0e)', borderBottom:'2px solid rgba(212,160,23,0.25)'}}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:`repeating-linear-gradient(90deg, rgba(212,160,23,0.04) 0px, rgba(212,160,23,0.04) 1px, transparent 1px, transparent 40px),
          repeating-linear-gradient(0deg, rgba(212,160,23,0.04) 0px, rgba(212,160,23,0.04) 1px, transparent 1px, transparent 40px)`
        }} />
        <p className="text-xs tracking-[0.4em] uppercase mb-2" style={{color:'rgba(212,160,23,0.5)'}}>ॐ  •  Jnana & Sahayata  •  ॐ</p>
        <h1 className="text-5xl font-historical font-bold mb-4" style={{
          background:'linear-gradient(135deg, #f5c842, #d4a017, #e8750a)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'
        }}>
          Help & Knowledge Base
        </h1>
        <p className="max-w-xl mx-auto" style={{color:'rgba(245,232,200,0.75)'}}>
          Answers to the most common questions about volunteering, donations, and our restoration process.
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-4">
        {FAQS.map((faq, i) => (
          <div key={i} className="pillar-card p-6">
            <h3 className="text-lg font-historical font-bold mb-2 flex items-start gap-2" style={{color:'#2d1f0e'}}>
              <span style={{color:'#d4a017', fontSize:'14px', marginTop:'3px'}}>◆</span>
              {faq.q}
            </h3>
            <div className="ornament-line mb-3" />
            <p className="text-sm leading-relaxed pl-5" style={{color:'#4a3222'}}>{faq.a}</p>
          </div>
        ))}
      </div>

      <section className="mx-6 mb-12 rounded-sm overflow-hidden"
        style={{background:'linear-gradient(135deg, #1a0f05, #2d1f0e)', border:'1px solid rgba(212,160,23,0.3)'}}>
        <div className="p-10 text-center">
          <div className="text-4xl mb-4">🙏</div>
          <h2 className="text-3xl font-historical font-bold mb-3" style={{color:'#d4a017'}}>Still Have Questions?</h2>
          <p className="mb-6" style={{color:'rgba(245,232,200,0.7)'}}>
            Our team responds to every email within 24 hours.
          </p>
          <a href="mailto:support@ramdootrestores.in" className="btn-temple inline-block">
            ✉️ &nbsp; Write to Us
          </a>
        </div>
      </section>
    </div>
  );
}
