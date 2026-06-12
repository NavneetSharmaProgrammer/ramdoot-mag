import React from 'react';

export default function Support() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative py-16 px-6 text-center overflow-hidden"
        style={{background:'linear-gradient(180deg, #1a0f05, #2d1f0e)', borderBottom:'2px solid rgba(212,160,23,0.25)'}}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:`repeating-linear-gradient(90deg, rgba(212,160,23,0.04) 0px, rgba(212,160,23,0.04) 1px, transparent 1px, transparent 40px),
          repeating-linear-gradient(0deg, rgba(212,160,23,0.04) 0px, rgba(212,160,23,0.04) 1px, transparent 1px, transparent 40px)`
        }} />
        <p className="text-xs tracking-[0.4em] uppercase mb-2" style={{color:'rgba(212,160,23,0.5)'}}>ॐ  •  Seva & Sampark  •  ॐ</p>
        <h1 className="text-5xl font-historical font-bold mb-4" style={{
          background:'linear-gradient(135deg, #f5c842, #d4a017, #e8750a)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'
        }}>
          Connect With Us
        </h1>
        <p className="max-w-xl mx-auto" style={{color:'rgba(245,232,200,0.75)'}}>
          Whether you wish to volunteer, donate, report a heritage site, or simply ask a question —
          we are here to serve the sacred mission together.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-6">

        {/* Primary Contact */}
        <div className="pillar-card p-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 pulse-glow"
            style={{background:'linear-gradient(135deg, #d4a017, #c9862a)'}}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#1a0f05" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-historical font-bold mb-2" style={{color:'#2d1f0e'}}>Email Support</h2>
          <p className="text-sm mb-5" style={{color:'#4a3222'}}>
            For all inquiries — restoration, donations, volunteering, partnerships.
          </p>
          <div className="ornament-line w-full mb-5" />
          <a href="mailto:support@ramdootrestores.in"
            className="text-lg font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
            style={{color:'#c9862a'}}>
            support@ramdootrestores.in
          </a>
        </div>

        {/* Social Links */}
        <div className="pillar-card p-8 flex flex-col">
          <h2 className="text-2xl font-historical font-bold mb-5" style={{color:'#2d1f0e'}}>Follow Our Journey</h2>
          <div className="ornament-line mb-5" />
          <div className="space-y-4 flex-grow">
            <a href="https://www.youtube.com/@Ramdootrestores" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{background:'rgba(220,38,38,0.07)', border:'1px solid rgba(220,38,38,0.2)'}}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background:'#dc2626'}}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-sm" style={{color:'#2d1f0e'}}>YouTube</p>
                <p className="text-xs" style={{color:'#4a3222'}}>@Ramdootrestores</p>
              </div>
            </a>
            <a href="https://www.instagram.com/ramdootrestores/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{background:'rgba(219,39,119,0.07)', border:'1px solid rgba(219,39,119,0.2)'}}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{background:'linear-gradient(135deg, #f97316, #ec4899, #8b5cf6)'}}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-sm" style={{color:'#2d1f0e'}}>Instagram</p>
                <p className="text-xs" style={{color:'#4a3222'}}>team.ramdootrestores</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
