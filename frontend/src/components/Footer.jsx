import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #2d1f0e 0%, #1a0f05 100%)',
      borderTop: '2px solid rgba(212,160,23,0.3)',
      marginTop: 'auto',
    }}>
      {/* Gold ornament top */}
      <div style={{height:'3px', background:'linear-gradient(90deg, transparent, #d4a017, #e8750a, #d4a017, transparent)'}} />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="shimmer-gold text-2xl font-historical font-bold tracking-widest mb-1">RAMDOOT</div>
            <div className="text-xs tracking-[0.3em] uppercase mb-4" style={{color:'rgba(212,160,23,0.45)'}}>Restores Foundation</div>
            <p className="text-sm leading-relaxed" style={{color:'rgba(245,232,200,0.55)'}}>
              Reviving India's ancient stepwells, temples, and sacred spaces —
              one stone at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{color:'rgba(212,160,23,0.6)'}}>Sacred Links</h3>
            <div className="space-y-2">
              {[
                { label: 'Our Projects', href: '#' },
                { label: 'Contact Support', href: 'mailto:support@ramdootrestores.in' },
                { label: 'Volunteer', href: 'mailto:support@ramdootrestores.in' },
                { label: 'Report a Site', href: 'mailto:support@ramdootrestores.in' },
              ].map((l, i) => (
                <a key={i} href={l.href}
                  className="block text-sm transition-colors hover:opacity-100"
                  style={{color:'rgba(212,160,23,0.55)'}}
                  onMouseEnter={e => e.currentTarget.style.color='#d4a017'}
                  onMouseLeave={e => e.currentTarget.style.color='rgba(212,160,23,0.55)'}>
                  ◆ &nbsp;{l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{color:'rgba(212,160,23,0.6)'}}>Find Us</h3>
            <a href="mailto:support@ramdootrestores.in"
              className="text-sm mb-4 block hover:opacity-100 transition-opacity"
              style={{color:'rgba(212,160,23,0.65)'}}>
              ✉️ &nbsp;support@ramdootrestores.in
            </a>
            <div className="flex gap-3 mt-3">
              <a href="https://www.youtube.com/@Ramdootrestores" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{background:'rgba(220,38,38,0.2)', border:'1px solid rgba(220,38,38,0.3)'}}>
                <svg className="w-4 h-4" fill="#ef4444" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/ramdootrestores/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{background:'rgba(219,39,119,0.2)', border:'1px solid rgba(219,39,119,0.3)'}}>
                <svg className="w-4 h-4" fill="#ec4899" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{borderTop:'1px solid rgba(212,160,23,0.15)', paddingTop:'20px'}}
          className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{color:'rgba(212,160,23,0.35)'}}>
            © 2026 Ramdoot Restores Foundation. All rights reserved. 🇮🇳
          </p>
          <p className="text-xs italic" style={{color:'rgba(212,160,23,0.4)'}}>
            Crafted with 🙏 by{' '}
            <span className="font-semibold" style={{color:'rgba(212,160,23,0.65)'}}>Navneet Sharma</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
