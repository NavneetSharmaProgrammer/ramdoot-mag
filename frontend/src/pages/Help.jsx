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
    <div className="min-h-screen pb-12" style={{ background: '#fdf3e0' }}>
      
      {/* Hero Section */}
      <section className="relative py-16 px-6 text-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #1a0f05, #2d1f0e)', borderBottom: '2px solid rgba(212,160,23,0.25)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `repeating-linear-gradient(90deg, rgba(212,160,23,0.04) 0px, rgba(212,160,23,0.04) 1px, transparent 1px, transparent 40px),
          repeating-linear-gradient(0deg, rgba(212,160,23,0.04) 0px, rgba(212,160,23,0.04) 1px, transparent 1px, transparent 40px)`
        }} />
        <p className="text-xs tracking-[0.4em] uppercase mb-2" style={{ color: 'rgba(212,160,23,0.5)' }}>ॐ  •  Jnana & Vigyana  •  ॐ</p>
        <h1 className="text-5xl font-historical font-bold mb-4" style={{
          background: 'linear-gradient(135deg, #f5c842, #d4a017, #e8750a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
        }}>
          Help & Preservation Science
        </h1>
        <p className="max-w-xl mx-auto" style={{ color: 'rgba(245,232,200,0.75)' }}>
          Answers to common questions and technical insights into how we preserve India's physical and digital heritage.
        </p>
      </section>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid lg:grid-cols-12 gap-12">
        
        {/* Left Column: General FAQs */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-2xl font-historical font-bold tracking-wide" style={{ color: '#1a0f05' }}>
            General FAQ
          </h2>
          <div style={{ height: '2px', width: '60px', background: '#d4a017', marginBottom: '20px' }} />
          
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="pillar-card p-6">
                <h3 className="text-sm font-historical font-bold mb-2 flex items-start gap-2" style={{ color: '#2d1f0e' }}>
                  <span style={{ color: '#d4a017', fontSize: '12px', marginTop: '2px' }}>◆</span>
                  {faq.q}
                </h3>
                <p className="text-xs leading-relaxed pl-4" style={{ color: '#4a3222' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Preservation Science */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl font-historical font-bold tracking-wide" style={{ color: '#1a0f05' }}>
            3D Preservation & Model Guidelines
          </h2>
          <div style={{ height: '2px', width: '60px', background: '#d4a017', marginBottom: '20px' }} />

          <div className="p-6 rounded-sm" style={{ background: '#white', border: '1px solid rgba(212,160,23,0.25)', boxShadow: '0 4px 12px rgba(45,31,14,0.05)' }}>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#3d2a12' }}>
              For digital heritage preservation, the best 3D models are those with <strong>high mesh topology</strong>, <strong>metric accuracy</strong>, and <strong>accurate texture mapping</strong>. Leading sources include Sketchfab's <em>Indian-Heritage Tag</em> for downloadable assets and Sketchfab's <em>Doron_altaratz Collection</em> for photogrammetric models.
            </p>

            <h3 className="text-base font-historical font-bold mb-4" style={{ color: '#1a0f05' }}>
              Best Model Types & Categories
            </h3>
            
            <div className="space-y-6">
              {/* Category 1 */}
              <div className="pl-4 border-l-2" style={{ borderColor: '#d4a017' }}>
                <h4 className="text-sm font-bold" style={{ color: '#b45309' }}>
                  1. Architectural & Spatial Replicas (Point Clouds & Meshes)
                </h4>
                <p className="text-xs mt-1" style={{ color: '#4a3222' }}>
                  <strong style={{ color: '#1c1917' }}>Significance:</strong> Large-scale models of ancient structures like stepwells, temples, and palaces.
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#4a3222' }}>
                  <strong style={{ color: '#1c1917' }}>Why it works for restoration:</strong> These models capture real-world coordinates and decay, allowing architects to assess structural integrity without physical intervention.
                </p>
                <p className="text-xs mt-1 italic text-amber-800">
                  Examples: Scans of the Dada Harir Stepwell in Ahmedabad or the iconic Stone Chariot in Hampi.
                </p>
              </div>

              {/* Category 2 */}
              <div className="pl-4 border-l-2" style={{ borderColor: '#d4a017' }}>
                <h4 className="text-sm font-bold" style={{ color: '#b45309' }}>
                  2. High-Poly Artifacts & Sculptures
                </h4>
                <p className="text-xs mt-1" style={{ color: '#4a3222' }}>
                  <strong style={{ color: '#1c1917' }}>Significance:</strong> Detailed 3D digital replicas of statues, idols, and inscriptions.
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#4a3222' }}>
                  <strong style={{ color: '#1c1917' }}>Why it works for restoration:</strong> Ideal for museums and conservators, allowing them to digitally reconstruct missing or broken pieces (e.g., chipped stone, eroded faces) using shape analysis and 3D symmetry detection.
                </p>
                <p className="text-xs mt-1 italic text-amber-800">
                  Examples: Scans of deities like Shiva Nataraja or intricate stone carvings.
                </p>
              </div>

              {/* Category 3 */}
              <div className="pl-4 border-l-2" style={{ borderColor: '#d4a017' }}>
                <h4 className="text-sm font-bold" style={{ color: '#b45309' }}>
                  3. Real-Time Low-Poly Asset Packs
                </h4>
                <p className="text-xs mt-1" style={{ color: '#4a3222' }}>
                  <strong style={{ color: '#1c1917' }}>Significance:</strong> Game-engine-ready models of monuments such as the Golden Temple, Mahabodhi Temple, and Charminar.
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#4a3222' }}>
                  <strong style={{ color: '#1c1917' }}>Why it works for restoration:</strong> These are better suited for VR/AR virtual tours, educational platforms, and historical simulations rather than physical restoration.
                </p>
              </div>
            </div>

            {/* How it is done */}
            <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(212,160,23,0.2)' }}>
              <h3 className="text-base font-historical font-bold mb-3" style={{ color: '#1a0f05' }}>
                How Heritage Preservation Is Done
              </h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: '#4a3222' }}>
                Academic institutions and researchers use a hybrid workflow combining multiple scanning methodologies and photogrammetry algorithms to create highly accurate digital preservation models:
              </p>
              <ul className="space-y-2.5 pl-4 text-xs" style={{ color: '#4a3222' }}>
                <li className="list-disc">
                  <strong>Terrestrial Laser Scanners (TLS):</strong> Stationary laser scanners project millions of points to build a high-precision spatial grid of massive structures (e.g., temples and large stepwells).
                </li>
                <li className="list-disc">
                  <strong>Small & Handheld Laser Scanners:</strong> Used close-up to capture the millimeter-scale details of carvings, deities, and delicate scripts.
                </li>
                <li className="list-disc">
                  <strong>Photogrammetry Algorithms:</strong> Processes hundreds of high-resolution digital photographs taken from multiple angles, matching common pixels to stitch together realistic colors, textures, and surface details.
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>

      {/* Footer Support Card */}
      <section className="max-w-6xl mx-auto mx-6 rounded-sm overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0f05, #2d1f0e)', border: '1px solid rgba(212,160,23,0.3)' }}>
        <div className="p-10 text-center">
          <div className="text-4xl mb-4">🛕</div>
          <h2 className="text-3xl font-historical font-bold mb-3" style={{ color: '#d4a017' }}>Preserve & Restore Together</h2>
          <p className="mb-6 max-w-lg mx-auto text-sm" style={{ color: 'rgba(245,232,200,0.7)' }}>
            Have access to 3D scans of local monuments or want to help scan historical ruins in your area? Contact our team.
          </p>
          <a href="mailto:support@ramdootrestores.in" className="btn-temple inline-block">
            ✉️ &nbsp; Contact Heritage Science Team
          </a>
        </div>
      </section>

    </div>
  );
}
