import React from 'react';

export default function Settings() {
  return (
    <div className="min-h-screen">
      <section className="relative py-14 px-6 overflow-hidden"
        style={{background:'linear-gradient(180deg, #1a0f05, #2d1f0e)', borderBottom:'2px solid rgba(212,160,23,0.25)'}}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:`repeating-linear-gradient(90deg, rgba(212,160,23,0.04) 0px, rgba(212,160,23,0.04) 1px, transparent 1px, transparent 40px)`
        }} />
        <p className="text-xs tracking-[0.4em] uppercase mb-2" style={{color:'rgba(212,160,23,0.5)'}}>ॐ  •  Vyavastha  •  ॐ</p>
        <h1 className="text-4xl font-historical font-bold" style={{
          background:'linear-gradient(135deg, #f5c842, #d4a017)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'
        }}>
          Platform Settings
        </h1>
        <p className="mt-1" style={{color:'rgba(245,232,200,0.6)'}}>Manage your account and preferences</p>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        <div className="pillar-card p-7">
          <h2 className="text-xl font-historical font-bold mb-1" style={{color:'#2d1f0e'}}>Profile Information</h2>
          <div className="ornament-line mb-5" />
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#c9862a'}}>Full Name</label>
              <input type="text" className="input-stone" defaultValue="Navneet Sharma" />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#c9862a'}}>Email Address</label>
              <input type="email" className="input-stone" defaultValue="navneetsharmaprogrammer@gmail.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#c9862a'}}>Organization Role</label>
              <input type="text" className="input-stone" defaultValue="Developer & Platform Admin" />
            </div>
          </div>
        </div>

        <div className="pillar-card p-7">
          <h2 className="text-xl font-historical font-bold mb-1" style={{color:'#2d1f0e'}}>Notifications</h2>
          <div className="ornament-line mb-5" />
          <div className="space-y-4">
            {[
              'Email me about new restoration projects',
              'Receive weekly donation impact reports',
              'Alert me when a new heritage site is added',
              'Monthly newsletter with project updates',
            ].map((label, i) => (
              <label key={i} className="flex items-center gap-3 cursor-pointer">
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" defaultChecked={i < 2} />
                  <div className="w-10 h-6 rounded-full peer-checked:after:translate-x-4 after:absolute after:top-1 after:left-1 after:w-4 after:h-4 after:rounded-full after:transition-all after:content-['']"
                    style={{background:'rgba(201,134,42,0.2)'}}></div>
                </div>
                <span className="text-sm" style={{color:'#4a3222'}}>{label}</span>
              </label>
            ))}
          </div>
        </div>

        <button className="btn-temple">🪔 &nbsp; Save Changes</button>
      </div>
    </div>
  );
}
