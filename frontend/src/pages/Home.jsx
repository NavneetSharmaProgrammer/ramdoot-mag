import React from 'react';
import baoliHero from '../assets/baoli_hero.png';
import templeRestoration from '../assets/temple_restoration.png';
import ramMandir from '../assets/ram_mandir.png';
import stoneCarvings from '../assets/stone_carvings.png';
import volunteers from '../assets/volunteers.png';
import lordRam from '../assets/lord_ram.png';

const STATS = [
  { value: '47+',  label: 'Sites Restored'        },
  { value: '120+', label: 'Volunteers Nationwide'  },
  { value: '100%', label: 'Revenue to Restoration' },
  { value: '12',   label: 'States Covered'         },
];

const PROJECTS_PREVIEW = [
  { img: baoliHero,         title: 'Chand Baori Revival',        type: 'Stepwell (Baoli)', state: 'Rajasthan' },
  { img: templeRestoration, title: 'Kailash-Style Mandir',       type: 'Temple Complex',   state: 'Maharashtra' },
  { img: ramMandir,         title: 'Sacred Mandir Restoration',  type: 'Ram Mandir',       state: 'Uttar Pradesh' },
  { img: stoneCarvings,     title: 'Stone Carving Conservation', type: 'Heritage Carvings', state: 'Madhya Pradesh' },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{background:'#fdf3e0'}}>

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative h-[92vh] min-h-[600px] overflow-hidden flex items-center justify-center">
        {/* Background image */}
        <img src={baoliHero} alt="Ancient Indian Stepwell (Baoli)"
          className="absolute inset-0 w-full h-full object-cover" style={{filter:'brightness(0.45)'}} />

        {/* Gradient overlay for museum look */}
        <div className="absolute inset-0" style={{
          background:'linear-gradient(to bottom, rgba(15,8,2,0.3) 0%, rgba(15,8,2,0.2) 40%, rgba(15,8,2,0.85) 100%)'
        }} />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-[0.25em] uppercase"
            style={{background:'rgba(212,160,23,0.2)', border:'1px solid rgba(212,160,23,0.5)', color:'#f5c842'}}>
            ❋ &nbsp; Heritage Revival Foundation &nbsp; ❋
          </div>

          <h1 className="font-historical text-6xl md:text-7xl font-bold leading-tight mb-6 text-white"
            style={{textShadow:'0 4px 30px rgba(0,0,0,0.8)'}}>
            Restoring the<br/>
            <span style={{
              background:'linear-gradient(135deg, #f5c842 0%, #d4a017 40%, #e8750a 70%, #f5c842 100%)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'
            }}>
              Soul of Bharat
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{color:'rgba(255,255,255,0.82)', textShadow:'0 2px 10px rgba(0,0,0,0.6)'}}>
            We revive India's forgotten stepwells, ancient mandirs, and sacred spaces —
            turning ruins back into living centers of faith, culture, and community.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.youtube.com/@Ramdootrestores" target="_blank" rel="noopener noreferrer"
              className="btn-temple flex items-center gap-2 px-8 py-3.5 text-sm tracking-wider">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch Our Work
            </a>
            <a href="mailto:support@ramdootrestores.in"
              className="flex items-center gap-2 px-8 py-3.5 text-sm tracking-wider font-semibold rounded-sm transition-all duration-200"
              style={{border:'1.5px solid rgba(255,255,255,0.6)', color:'white', backdropFilter:'blur(8px)', background:'rgba(255,255,255,0.1)'}}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,0.2)'}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.1)'}}>
              Support the Mission
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-[0.3em] uppercase" style={{color:'rgba(212,160,23,0.7)'}}>Explore</span>
          <svg className="w-5 h-5" fill="none" stroke="#d4a017" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ══════════════════ STATS BAR ══════════════════ */}
      <section style={{background:'#1a0f05', borderTop:'2px solid rgba(212,160,23,0.3)', borderBottom:'2px solid rgba(212,160,23,0.3)'}}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x" style={{divideColor:'rgba(212,160,23,0.2)'}}>
          {STATS.map((s, i) => (
            <div key={i} className="text-center py-8 px-6" style={{borderRight: i<3 ? '1px solid rgba(212,160,23,0.2)' : 'none'}}>
              <div className="text-4xl font-historical font-bold" style={{
                background:'linear-gradient(135deg, #f5c842, #d4a017)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'
              }}>{s.value}</div>
              <div className="text-xs tracking-[0.2em] uppercase mt-1" style={{color:'rgba(245,232,200,0.5)'}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════ MISSION + LORD RAM ══════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-3 font-semibold" style={{color:'#c9862a'}}>Our Sacred Purpose</p>
            <h2 className="text-5xl font-historical font-bold mb-6 leading-tight" style={{color:'#1a0f05'}}>
              Reclaiming India's<br/>Living Heritage
            </h2>
            <div style={{height:'3px', width:'80px', background:'linear-gradient(90deg, #d4a017, #e8750a)', marginBottom:'24px'}} />
            <p className="text-lg leading-relaxed mb-6" style={{color:'#3d2a12'}}>
              Inspired by the spirit of Ram — the ideal king who valued dharma above all —
              we believe restoring ancient sacred spaces is not just preservation.
              It is an act of devotion.
            </p>
            <p className="leading-relaxed mb-8" style={{color:'#4a3222'}}>
              From the perfectly geometric Chand Baori stepwell of Rajasthan to the towering
              Kailash Temple of Ellora, our ancestors built structures of unparalleled beauty and precision.
              We honour that legacy by bringing them back to life, one stone at a time.
            </p>
            <div className="flex items-center gap-4">
              <div style={{width:'40px', height:'40px', borderRadius:'50%', background:'linear-gradient(135deg, #d4a017, #c9862a)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px'}}>🙏</div>
              <div>
                <p className="font-semibold text-sm" style={{color:'#1a0f05'}}>100% Revenue to Restoration</p>
                <p className="text-xs" style={{color:'#6b5233'}}>No overhead. Every rupee goes to the sites.</p>
              </div>
            </div>
          </div>

          {/* Lord Ram Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm" style={{
              border:'2px solid rgba(212,160,23,0.4)',
              boxShadow:'0 25px 60px rgba(45,31,14,0.35), 0 0 0 1px rgba(212,160,23,0.15)'
            }}>
              <img src={lordRam} alt="Lord Ram — the divine inspiration"
                className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0" style={{
                background:'linear-gradient(to top, rgba(26,15,5,0.7) 0%, transparent 50%)'
              }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-historical text-lg font-bold" style={{color:'#f5c842'}}>Lord Ram</p>
                <p className="text-xs tracking-widest uppercase" style={{color:'rgba(245,232,200,0.7)'}}>The Divine Inspiration</p>
              </div>
            </div>
            {/* Decorative corner ornaments */}
            <div className="absolute -top-3 -left-3 w-8 h-8" style={{borderTop:'2px solid #d4a017', borderLeft:'2px solid #d4a017'}} />
            <div className="absolute -top-3 -right-3 w-8 h-8" style={{borderTop:'2px solid #d4a017', borderRight:'2px solid #d4a017'}} />
            <div className="absolute -bottom-3 -left-3 w-8 h-8" style={{borderBottom:'2px solid #d4a017', borderLeft:'2px solid #d4a017'}} />
            <div className="absolute -bottom-3 -right-3 w-8 h-8" style={{borderBottom:'2px solid #d4a017', borderRight:'2px solid #d4a017'}} />
          </div>
        </div>
      </section>

      {/* ══════════════════ FEATURED PROJECTS ══════════════════ */}
      <section className="py-24 px-6" style={{background:'#1a0f05'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-3 font-semibold" style={{color:'rgba(212,160,23,0.6)'}}>What We Restore</p>
            <h2 className="text-5xl font-historical font-bold text-white mb-4">Featured Projects</h2>
            <div style={{height:'2px', width:'60px', background:'linear-gradient(90deg, transparent, #d4a017, transparent)', margin:'0 auto'}} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROJECTS_PREVIEW.map((p, i) => (
              <div key={i} className="group relative overflow-hidden rounded-sm cursor-pointer"
                style={{border:'1px solid rgba(212,160,23,0.2)', height:'340px'}}>
                <img src={p.img} alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 transition-all duration-300"
                  style={{background:'linear-gradient(to top, rgba(26,15,5,0.95) 0%, rgba(26,15,5,0.3) 60%, transparent 100%)'}} />
                {/* Type badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs px-2.5 py-1 rounded-full font-semibold"
                    style={{background:'rgba(212,160,23,0.25)', border:'1px solid rgba(212,160,23,0.5)', color:'#f5c842', backdropFilter:'blur(4px)'}}>
                    {p.type}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-historical font-bold text-white text-lg leading-tight mb-1">{p.title}</p>
                  <p className="text-xs tracking-widest uppercase" style={{color:'rgba(212,160,23,0.7)'}}>📍 {p.state}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ VOLUNTEERS SECTION ══════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm" style={{
              border:'2px solid rgba(212,160,23,0.3)',
              boxShadow:'0 25px 60px rgba(45,31,14,0.25)'
            }}>
              <img src={volunteers} alt="Restoration volunteers at work"
                className="w-full h-[460px] object-cover" />
            </div>
            <div className="absolute -top-3 -left-3 w-8 h-8" style={{borderTop:'2px solid #d4a017', borderLeft:'2px solid #d4a017'}} />
            <div className="absolute -bottom-3 -right-3 w-8 h-8" style={{borderBottom:'2px solid #d4a017', borderRight:'2px solid #d4a017'}} />

            {/* Floating stat card */}
            <div className="absolute bottom-6 right-6 p-5 rounded-sm"
              style={{background:'rgba(26,15,5,0.95)', border:'1px solid rgba(212,160,23,0.4)', backdropFilter:'blur(10px)'}}>
              <div className="text-3xl font-historical font-bold" style={{color:'#d4a017'}}>120+</div>
              <div className="text-xs tracking-wider uppercase mt-1" style={{color:'rgba(245,232,200,0.6)'}}>Active Volunteers</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-3 font-semibold" style={{color:'#c9862a'}}>The People Behind the Work</p>
            <h2 className="text-5xl font-historical font-bold mb-6 leading-tight" style={{color:'#1a0f05'}}>
              Every Hand<br/>Makes History
            </h2>
            <div style={{height:'3px', width:'80px', background:'linear-gradient(90deg, #d4a017, #e8750a)', marginBottom:'24px'}} />
            <p className="leading-relaxed mb-6" style={{color:'#4a3222'}}>
              Our volunteers are the heart of Ramdoot Restores. From engineers and architects
              to local craftsmen who still carry centuries-old stonework traditions —
              together we form an unstoppable force for heritage revival.
            </p>
            <p className="leading-relaxed mb-8" style={{color:'#4a3222'}}>
              Join us for the next restoration drive. No experience needed — just devotion,
              and the willingness to get your hands a little dusty in service of something eternal.
            </p>
            <a href="mailto:support@ramdootrestores.in" className="btn-temple inline-block">
              🤝 &nbsp; Join as a Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════ STONE CARVINGS BANNER ══════════════════ */}
      <section className="relative h-72 overflow-hidden flex items-center justify-center">
        <img src={stoneCarvings} alt="Ancient stone carvings"
          className="absolute inset-0 w-full h-full object-cover" style={{filter:'brightness(0.3)'}} />
        <div className="absolute inset-0" style={{background:'rgba(26,15,5,0.5)'}} />
        <div className="relative z-10 text-center px-6">
          <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{color:'rgba(212,160,23,0.7)'}}>Contact & Support</p>
          <h2 className="text-4xl font-historical font-bold text-white mb-6">
            Help Us Preserve India's Story
          </h2>
          <a href="mailto:support@ramdootrestores.in" className="btn-temple inline-block">
            ✉️ &nbsp; support@ramdootrestores.in
          </a>
        </div>
      </section>

    </div>
  );
}
