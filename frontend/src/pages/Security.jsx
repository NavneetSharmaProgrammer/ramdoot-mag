import React from 'react';

export default function Security() {
  return (
    <div className="min-h-screen">
      <section className="relative py-14 px-6 overflow-hidden"
        style={{background:'linear-gradient(180deg, #1a0f05, #2d1f0e)', borderBottom:'2px solid rgba(212,160,23,0.25)'}}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:`repeating-linear-gradient(90deg, rgba(212,160,23,0.04) 0px, rgba(212,160,23,0.04) 1px, transparent 1px, transparent 40px)`
        }} />
        <p className="text-xs tracking-[0.4em] uppercase mb-2" style={{color:'rgba(212,160,23,0.5)'}}>ॐ  •  Suraksha  •  ॐ</p>
        <h1 className="text-4xl font-historical font-bold" style={{
          background:'linear-gradient(135deg, #f5c842, #d4a017)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'
        }}>
          Security & Privacy
        </h1>
        <p className="mt-1" style={{color:'rgba(245,232,200,0.6)'}}>Manage your account security and active sessions</p>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">

        <div className="pillar-card p-7">
          <h2 className="text-xl font-historical font-bold mb-1" style={{color:'#2d1f0e'}}>Update Password</h2>
          <div className="ornament-line mb-5" />
          <div className="space-y-4 max-w-md">
            {['Current Password', 'New Password', 'Confirm New Password'].map((label, i) => (
              <div key={i}>
                <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{color:'#c9862a'}}>{label}</label>
                <input type="password" className="input-stone" placeholder="••••••••" />
              </div>
            ))}
            <button className="btn-temple mt-2">🔐 &nbsp; Update Password</button>
          </div>
        </div>

        <div className="pillar-card p-7">
          <h2 className="text-xl font-historical font-bold mb-1" style={{color:'#2d1f0e'}}>Active Sessions</h2>
          <div className="ornament-line mb-5" />
          <div className="space-y-3">
            {[
              { device: 'Windows PC — Chrome', location: 'Mumbai, India', time: 'Active Now', current: true },
              { device: 'iPhone 14 — Safari',  location: 'Delhi, India',  time: '2 hours ago',   current: false },
              { device: 'MacBook — Firefox',   location: 'Pune, India',   time: 'Yesterday',     current: false },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-sm"
                style={{
                  background: s.current ? 'rgba(212,160,23,0.1)' : 'rgba(45,31,14,0.04)',
                  border: `1px solid ${s.current ? 'rgba(212,160,23,0.3)' : 'rgba(45,31,14,0.08)'}`,
                }}>
                <div>
                  <p className="font-semibold text-sm" style={{color:'#2d1f0e'}}>{s.device}</p>
                  <p className="text-xs mt-0.5" style={{color:'#6b5233'}}>{s.location} &bull; {s.time}</p>
                </div>
                <div className="flex items-center gap-3">
                  {s.current && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{background:'rgba(212,160,23,0.2)', color:'#c9862a'}}>
                      This device
                    </span>
                  )}
                  {!s.current && (
                    <button className="text-xs font-semibold hover:opacity-80 transition-opacity" style={{color:'#c0392b'}}>
                      Log Out
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
