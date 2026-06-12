import React, { useState } from 'react';

// Real project images
import rr1Bhandara      from '../assets/rr1_bhandara.png';
import champeshwar      from '../assets/champeshwar.png';
import indreshwar       from '../assets/indreshwar.png';
import krishnapura      from '../assets/krishnapura_chhatri.png';
import rr2Hanuman       from '../assets/rr2_hanuman.png';
import pranPratishtha   from '../assets/pran_pratishtha.png';
import gangourGhat      from '../assets/gangour_ghat.png';
import amrutVav         from '../assets/amrut_vav.png';
import sitapurTemple    from '../assets/sitapur_temple.png';
import uttamNagar       from '../assets/uttam_nagar_vav.png';
import tribalGurukul    from '../assets/tribal_gurukul.png';

/* ═══════════════════════════════════════
   REAL PROJECT DATA — Ramdoot Restores
   ═══════════════════════════════════════ */
const REAL_PROJECTS = [
  // ── COMPLETED ──
  {
    id:       'RR1',
    img:      rr1Bhandara,
    title:    'Shree Panch Bhooteshwar Mahakal Mandir',
    subtitle: '#Mission108 — Flagship Project RR1',
    location: 'Bhandara, Maharashtra',
    type:     'Shiva Temple',
    status:   'Completed',
    year:     '2023',
    age:      '350 years old',
    donors:   '25,000+',
    budget:   '₹17 Lakhs',
    highlights: [
      'Official launch of the historic #Mission108 initiative',
      'Severely damaged during Mughal era under Aurangzeb',
      'Full debris clearance using traditional stone masonry',
      'Time capsule buried beneath the sanctum for future generations',
      'Full-time priest appointed for daily Vedic rituals',
      'Pran Pratishtha ceremony conducted',
    ],
    desc: 'The inaugural project under #Mission108 — a 350-year-old Shiva temple complex that local lore holds was severely damaged during the Mughal era. Through massive volunteer mobilization and ₹17 Lakhs raised from 25,000+ donors, this sacred site was fully revived and is now an active center of worship.',
    link: 'https://ramdootrestores.in',
  },
  {
    id:       'RR1B',
    img:      pranPratishtha,
    title:    'Bhandara Ganesha Shrine',
    subtitle: 'Community-Crowdfunded Restoration',
    location: 'Bhandara, Maharashtra',
    type:     'Temple Complex',
    status:   'Completed',
    year:     '2023',
    age:      '350 years old',
    donors:   '25,000+',
    budget:   'Included with RR1',
    highlights: [
      'Restored in parallel with Project RR1',
      'Fully cleared of overgrowth and revitalized',
      'Benefitting the local tribal ecosystem',
      'Concluded with grand Vedic Pran Pratishtha ceremony',
    ],
    desc: 'Restored alongside the main Bhandara Shiva Temple, this smaller neighboring Lord Ganesha shrine was fully cleared of decades of overgrowth. It now serves as a vibrant spiritual center for the local village devotees.',
    link: 'https://ramdootrestores.in',
  },
  {
    id:       'RR-C',
    img:      champeshwar,
    title:    'Champeshwar Mahadev Temple',
    subtitle: 'Youth-Led Urban Revival',
    location: 'Indore, Madhya Pradesh',
    type:     'Mahadev Temple',
    status:   'Completed',
    year:     '2024',
    age:      'Ancient',
    donors:   'Community',
    budget:   'Volunteer-led',
    highlights: [
      'Temple completely swallowed by wild vegetation and garbage',
      'Massive youth mobilization drive by ground Ramdoots',
      'Full structural reinforcement of ancient stone walls',
      'Transformed from a garbage dump into an active spiritual hub',
    ],
    desc: 'This ancient Mahadev temple in Indore was completely buried under vegetation and debris. A youth-led Ramdoot mobilization drive cleared, cleaned, and structurally reinforced the site, returning dignity to the sacred stones.',
    link: 'https://ramdootrestores.in',
  },
  {
    id:       'RR-I',
    img:      indreshwar,
    title:    'Indreshwar Mahadev Temple',
    subtitle: 'The Temple That Named Indore',
    location: 'Indore, Madhya Pradesh',
    type:     'Mahadev Temple',
    status:   'Completed',
    year:     '2024',
    age:      'Satya Yuga origins',
    donors:   'Community',
    budget:   'Volunteer-led',
    highlights: [
      'Temple whose name gave the city of Indore its name',
      'Hindu scriptures trace spiritual origins to the Satya Yuga',
      'Structured conservation and sanitation drives conducted',
      'Secured ongoing local care to prevent future neglect',
    ],
    desc: 'The Indreshwar Mahadev Temple holds the distinction of being the temple whose name gave the great city of Indore its very identity. Ramdoot volunteers cleaned up this highly significant site and educated the community on preserving it permanently.',
    link: 'https://ramdootrestores.in',
  },
  {
    id:       'RR-G',
    img:      gangourGhat,
    title:    'Gangour Ghat Shiva Temple',
    subtitle: 'Holkar-Era Riverbank Shrine',
    location: 'Indore, Madhya Pradesh',
    type:     'Riverbank Shrine',
    status:   'Completed',
    year:     '2024',
    age:      '100+ years old',
    donors:   'Community',
    budget:   'Volunteer-led',
    highlights: [
      'Over a century-old Holkar-era shrine',
      'Saved from years of neglect and overgrowth',
      'Freed from wastewater encroachment',
      'Fully cleaned and restored to former glory',
    ],
    desc: 'An exquisite century-old Holkar-era riverside shrine that was severely threatened by overgrowth and wastewater encroachment. Team volunteers successfully saved this historic structure, cleaning and restoring the steps and sanctum.',
    link: 'https://ramdootrestores.in',
  },
  {
    id:       'RR-K',
    img:      krishnapura,
    title:    'Krishnapura Chhatri',
    subtitle: 'Holkar Dynasty Heritage — Civic Win',
    location: 'Indore, Madhya Pradesh',
    type:     'Royal Cenotaphs',
    status:   'Completed',
    year:     '2024',
    age:      '~150 years old',
    donors:   'Community + Government',
    budget:   'Public + Govt handover',
    highlights: [
      'Late 1800s cenotaphs honouring the Holkar dynasty rulers',
      'Months of youth-led awareness drives and cleanups',
      'State took over official long-term protective maintenance',
      'A landmark systemic win for heritage advocacy',
    ],
    desc: 'The magnificent Krishnapura Chhatri — ornate cenotaphs of the Holkar Maharajas — was allowed to fall into disrepair. Through sustained civic advocacy, Ramdoot Restores pressured the local government into formally adopting the site for long-term maintenance.',
    link: 'https://ramdootrestores.in',
  },

  // ── ONGOING ──
  {
    id:       'VAV-7',
    img:      amrutVav,
    title:    'Amrut Vav Restoration',
    subtitle: 'Phase 7 Stepwell Revival',
    location: 'Vadodara, Gujarat',
    type:     'Stepwell (Vav)',
    status:   'Ongoing',
    year:     '2026',
    age:      '150 years old',
    donors:   'Funding Active',
    budget:   'Heavy Machinery needed',
    highlights: [
      'Massive multi-phase restoration of a historic 7-story stepwell',
      'Using industrial "super sucker" machines to pump out decades of toxic mud',
      'Buried centuries-old deity idol discovered deep inside the well floor',
      'Run parallel to the Ahmedabad Vav projects',
    ],
    desc: 'An incredibly intensive multi-phase operation restoring a 150-year-old, 7-story deep stepwell. The team is utilizing heavy industrial super suckers to remove decades of sludge, successfully uncovering buried ancient artifacts and deities at the bottom.',
    link: 'https://ramdootrestores.in',
  },
  {
    id:       'RR-S',
    img:      sitapurTemple,
    title:    'Sitapur Temple Revival',
    subtitle: 'Historic Keshawpur Project',
    location: 'Sitapur, Uttar Pradesh',
    type:     'Shiva Temple',
    status:   'Ongoing',
    year:     '2026',
    age:      '150 years old',
    donors:   'Funding Active',
    budget:   'In Progress',
    highlights: [
      'Ongoing structural restoration of a 150-year-old Shiva Temple',
      'Located in Keshawpur, Sitapur',
      'Repairing deep structural damage',
      'Community-led preservation effort',
    ],
    desc: 'The active and ongoing structural restoration of a rustic 150-year-old Shiva temple in Keshawpur, Sitapur. The team is working with local volunteers to repair the masonry and return daily worship to the village.',
    link: 'https://ramdootrestores.in',
  },
  {
    id:       'VAV-A',
    img:      uttamNagar,
    title:    'Uttam Nagar Vav',
    subtitle: 'Ahmedabad Stepwell Campaign',
    location: 'Maninagar, Ahmedabad',
    type:     'Trade Route Stepwell',
    status:   'Ongoing',
    year:     '2026',
    age:      'Ancient',
    donors:   'Volunteers Active',
    budget:   'Community-supported',
    highlights: [
      'Secured institutional backing from the Mayor of Ahmedabad',
      'Coordinated with Heritage & Solid Waste Management Departments',
      'Saving a historic trade-route stepwell from urban decay',
      'Massive city-wide network of local "Ahmedabadi" volunteers',
    ],
    desc: 'Launched in June 2026, this is a massive conservation drive for an ancient trade-route stepwell in Ahmedabad. The team met directly with the Mayor to secure heavy logistics support, rallying citizens to save this structure before it is lost to urban development.',
    link: 'https://ramdootrestores.in',
  },
  {
    id:       'GURU',
    img:      tribalGurukul,
    title:    'Tribal Vedic Gurukul',
    subtitle: 'Educational Infrastructure',
    location: 'Rural India',
    type:     'Ved Pathshala',
    status:   'Ongoing',
    year:     '2026',
    age:      'New Construction',
    donors:   'Fundraising Active',
    budget:   'TBD',
    highlights: [
      'Establishing a traditional educational Gurukul and Ved Pathshala',
      'Providing traditional roots, schooling, and spiritual guidance',
      'Focused specifically on empowering tribal youth',
      'Preserving ancestral spiritual sciences for future generations',
    ],
    desc: 'Beyond physical architecture, the foundation is actively raising funds to construct a traditional Ved Pathshala. This Gurukul will provide spiritual guidance, traditional schooling, and deep cultural roots specifically to tribal youth.',
    link: 'https://ramdootrestores.in',
  },

  // ── UPCOMING ──
  {
    id:       'RR2',
    img:      rr2Hanuman,
    title:    'Ancient Hanuman Ji Temple',
    subtitle: 'Project RR2 — Deep Forest Revival',
    location: 'Panch Khobla, Gujarat',
    type:     'Hanuman Temple',
    status:   'Upcoming',
    year:     '2026',
    age:      '705–800 years old',
    donors:   'Open for Contributions',
    budget:   'Fundraising in progress',
    highlights: [
      'Highly anticipated Project RR2 under #Mission108',
      '705-to-800-year-old forest shrine dedicated to Hanuman Ji',
      'Remained completely silent for over 700 years',
      'Step-by-step sacred foundational purification rituals initiated',
      'Includes secondary deities Shiva and Devi',
    ],
    desc: 'The highly anticipated Project RR2. A massive restoration targeting a 700-to-800-year-old Hanuman Ji temple hidden deep in the forests of Panch Khobla, Gujarat. The team has already begun sacred foundational purification rituals to re-awaken this completely silent, ancient structure.',
    link: 'mailto:support@ramdootrestores.in',
  },
];

const STATUS_CFG = {
  'Completed': { bg:'rgba(16,185,129,0.12)', color:'#065f46', border:'rgba(16,185,129,0.3)', dot:'#10b981', label:'Completed ✓' },
  'Ongoing':   { bg:'rgba(245,158,11,0.12)', color:'#92400e', border:'rgba(245,158,11,0.3)', dot:'#f59e0b', label:'Live / Ongoing' },
  'Upcoming':  { bg:'rgba(99,102,241,0.12)', color:'#3730a3', border:'rgba(99,102,241,0.3)', dot:'#6366f1', label:'Upcoming' },
};

export default function Projects() {
  const [filter, setFilter]  = useState('All');
  const [selected, setSelected] = useState(null);
  const filters = ['All', 'Completed', 'Ongoing', 'Upcoming'];
  const displayed = filter === 'All' ? REAL_PROJECTS : REAL_PROJECTS.filter(p => p.status === filter);

  return (
    <div className="min-h-screen" style={{background:'#fdf3e0'}}>

      {/* ── Hero ── */}
      <section className="relative h-[58vh] min-h-[380px] overflow-hidden flex items-end">
        <img src={amrutVav} alt="Ramdoot Restores — Real Projects"
          className="absolute inset-0 w-full h-full object-cover" style={{filter:'brightness(0.38)'}} />
        <div className="absolute inset-0"
          style={{background:'linear-gradient(to bottom, rgba(15,8,2,0.1), rgba(15,8,2,0.85)'}} />
        <div className="relative z-10 px-8 md:px-14 pb-12 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-[0.2em] uppercase"
            style={{background:'rgba(212,160,23,0.2)', border:'1px solid rgba(212,160,23,0.5)', color:'#f5c842'}}>
            ❋ &nbsp; #Mission108 &nbsp; ❋
          </div>
          <h1 className="text-5xl md:text-6xl font-historical font-bold text-white mb-3" style={{textShadow:'0 4px 20px rgba(0,0,0,0.8)'}}>
            Our Real Projects
          </h1>
          <p style={{color:'rgba(255,255,255,0.75)', fontSize:'1.1rem', maxWidth:'580px', lineHeight:'1.7'}}>
            Restoring 108 ancient temples, stepwells, and sacred sites across Bharat. 
            From the deep forests of Gujarat to the bustling streets of Indore.
          </p>
        </div>
      </section>

      {/* ── Mission 108 Banner ── */}
      <div style={{background:'#1a0f05', borderBottom:'1px solid rgba(212,160,23,0.25)'}}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-3xl">🛕</div>
            <div>
              <p className="font-historical font-bold text-lg" style={{color:'#d4a017'}}>#Mission108 Live</p>
              <p className="text-xs" style={{color:'rgba(245,232,200,0.55)'}}>Reviving India's forgotten cultural and spiritual heritage</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            {[['11+', 'Projects'], ['25,000+', 'Donors'], ['₹17L+', 'Raised']].map(([v,l],i)=>(
              <div key={i} className="text-center">
                <div className="text-xl font-historical font-bold" style={{color:'#d4a017'}}>{v}</div>
                <div className="text-xs tracking-wider" style={{color:'rgba(245,232,200,0.45)'}}>{l}</div>
              </div>
            ))}
            <a href="mailto:support@ramdootrestores.in" className="btn-temple text-xs px-5 py-2.5">
              Contribute Now
            </a>
          </div>
        </div>
      </div>

      {/* ── Filters ── */}
      <div style={{background:'white', borderBottom:'1px solid rgba(212,160,23,0.15)'}}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest mr-2 font-semibold" style={{color:'#c9862a'}}>Filter:</span>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className="px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200"
              style={filter===f
                ? {background:'#1a0f05', color:'#d4a017', border:'1px solid #d4a017'}
                : {border:'1px solid rgba(45,31,14,0.2)', color:'#4a3222', background:'transparent'}
              }>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── Projects Grid ── */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((p) => {
            const st = STATUS_CFG[p.status];
            return (
              <article key={p.id}
                className="group flex flex-col overflow-hidden cursor-pointer"
                style={{
                  background:'white',
                  border:'1px solid rgba(212,160,23,0.2)',
                  boxShadow:'0 4px 24px rgba(45,31,14,0.07)',
                  transition:'all 0.3s ease',
                  position:'relative'
                }}
                onClick={() => setSelected(p)}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.boxShadow='0 20px 48px rgba(45,31,14,0.18)'}}
                onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 24px rgba(45,31,14,0.07)'}}>

                {/* Top accent */}
                <div style={{height:'3px', background:'linear-gradient(90deg, #6b1a1a, #d4a017, #c9862a, #d4a017, #6b1a1a)'}} />

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img src={p.img} alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, transparent 40%, rgba(26,15,5,0.65) 100%)'}} />
                  {/* ID Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{background:'rgba(26,15,5,0.85)', color:'#d4a017', border:'1px solid rgba(212,160,23,0.4)'}}>
                      {p.id}
                    </span>
                  </div>
                  {/* Status */}
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                      style={{background:st.bg, color:st.color, border:`1px solid ${st.border}`, backdropFilter:'blur(8px)'}}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{background:st.dot}} />
                      {st.label}
                    </span>
                  </div>
                  {/* Type */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs px-2.5 py-1 rounded-full"
                      style={{background:'rgba(212,160,23,0.25)', color:'#f5c842', backdropFilter:'blur(4px)', border:'1px solid rgba(212,160,23,0.3)'}}>
                      {p.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-historical font-bold leading-tight mb-1" style={{color:'#1a0f05'}}>{p.title}</h3>
                  <p className="text-xs font-semibold mb-1" style={{color:'#c9862a'}}>{p.subtitle}</p>
                  <p className="text-xs mb-4 flex items-center gap-1" style={{color:'#6b5233'}}>📍 {p.location}</p>

                  <div style={{height:'1px', background:'linear-gradient(90deg, #d4a017, transparent)', marginBottom:'14px'}} />

                  <p className="text-sm leading-relaxed flex-grow" style={{color:'#4a3222', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient:'vertical', overflow:'hidden'}}>
                    {p.desc}
                  </p>

                  {/* Key stats row */}
                  <div className="mt-5 pt-4 grid grid-cols-3 gap-2" style={{borderTop:'1px solid rgba(212,160,23,0.12)'}}>
                    <div className="text-center">
                      <div className="text-sm font-bold font-historical" style={{color:'#d4a017', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{p.age.split(' ')[0]}</div>
                      <div className="text-xs" style={{color:'#6b5233'}}>Age</div>
                    </div>
                    <div className="text-center" style={{borderLeft:'1px solid rgba(212,160,23,0.15)', borderRight:'1px solid rgba(212,160,23,0.15)'}}>
                      <div className="text-xs font-bold" style={{color:'#d4a017', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{p.donors}</div>
                      <div className="text-xs" style={{color:'#6b5233'}}>Donors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-bold" style={{color:'#d4a017', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{p.budget}</div>
                      <div className="text-xs" style={{color:'#6b5233'}}>Budget</div>
                    </div>
                  </div>

                  <button className="mt-4 w-full py-2 text-xs font-semibold tracking-wider transition-all duration-200"
                    style={{border:'1px solid rgba(212,160,23,0.35)', color:'#c9862a', borderRadius:'2px'}}
                    onMouseEnter={e=>{e.currentTarget.style.background='rgba(212,160,23,0.08)'}}
                    onMouseLeave={e=>{e.currentTarget.style.background='transparent'}}>
                    View Full Details →
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ══ Detail Modal ══ */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{background:'rgba(10,5,2,0.85)', backdropFilter:'blur(6px)'}}
          onClick={() => setSelected(null)}>
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            style={{background:'#fdf3e0', border:'1px solid rgba(212,160,23,0.4)', boxShadow:'0 40px 100px rgba(0,0,0,0.5)'}}
            onClick={e => e.stopPropagation()}>
            {/* Top accent */}
            <div style={{height:'4px', background:'linear-gradient(90deg, #6b1a1a, #d4a017, #e8750a, #d4a017, #6b1a1a)'}} />
            {/* Image */}
            <div className="relative h-72 overflow-hidden">
              <img src={selected.img} alt={selected.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, transparent 40%, rgba(26,15,5,0.9) 100%)'}} />
              <button onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-lg"
                style={{background:'rgba(26,15,5,0.8)', color:'#d4a017', border:'1px solid rgba(212,160,23,0.4)'}}>
                ×
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{background:'rgba(212,160,23,0.25)', color:'#f5c842', border:'1px solid rgba(212,160,23,0.4)'}}>
                    {selected.id}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full"
                    style={{background: STATUS_CFG[selected.status].bg, color: STATUS_CFG[selected.status].color}}>
                    {STATUS_CFG[selected.status].label}
                  </span>
                </div>
                <h2 className="text-3xl font-historical font-bold text-white">{selected.title}</h2>
                <p className="text-xs mt-1" style={{color:'rgba(212,160,23,0.7)'}}>📍 {selected.location} &nbsp;·&nbsp; {selected.type} &nbsp;·&nbsp; {selected.age}</p>
              </div>
            </div>
            {/* Content */}
            <div className="p-8">
              <p className="text-base leading-relaxed mb-8" style={{color:'#3d2a12'}}>{selected.desc}</p>
              <h3 className="text-lg font-historical font-bold mb-4" style={{color:'#1a0f05'}}>Project Highlights</h3>
              <div style={{height:'2px', background:'linear-gradient(90deg, #d4a017, transparent)', marginBottom:'20px'}} />
              <ul className="space-y-3 mb-8">
                {selected.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{color:'#4a3222'}}>
                    <span style={{color:'#d4a017', fontSize:'10px', marginTop:'4px', flexShrink:0}}>◆</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <a href={selected.link} target="_blank" rel="noopener noreferrer"
                  className="btn-temple text-sm">
                  🙏 Learn More / Contribute
                </a>
                <a href="mailto:support@ramdootrestores.in"
                  className="text-sm font-semibold" style={{color:'#c9862a'}}>
                  ✉️ support@ramdootrestores.in
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <section className="relative overflow-hidden mx-6 mb-12">
        <img src={tribalGurukul} alt="" className="absolute inset-0 w-full h-full object-cover" style={{filter:'brightness(0.2)'}} />
        <div className="relative z-10 p-14 text-center">
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{color:'rgba(212,160,23,0.6)'}}>Join the Mission</p>
          <h2 className="text-4xl font-historical font-bold text-white mb-4">Support Our Ongoing Drives</h2>
          <p className="max-w-lg mx-auto mb-8" style={{color:'rgba(255,255,255,0.65)'}}>
            From clearing the 7-story Amrut Vav in Vadodara to building the Tribal Vedic Gurukul — your contribution helps save our heritage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:support@ramdootrestores.in" className="btn-temple inline-block">
              🤝 Volunteer with Us
            </a>
            <a href="https://ramdootrestores.in" target="_blank" rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-sm font-semibold transition-all"
              style={{border:'1.5px solid rgba(212,160,23,0.5)', color:'#d4a017', borderRadius:'2px'}}
              onMouseEnter={e=>e.currentTarget.style.background='rgba(212,160,23,0.1)'}
              onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
              View Financial Ledgers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
