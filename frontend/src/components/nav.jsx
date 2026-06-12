import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Drawer from "@/components/ui/drawer";
import { NAV_ITEMS } from "@/config/constants";

const iconMap = {
	home:                 HomeIcon,
	projects:            TempleIcon,
	support:             LotusIcon,
	users:               UsersIcon,
	magazine:            MagazineIcon,
	subscriptions:       SubscriptionsIcon,
	'influencer-campaigns': MegaphoneIcon,
	publications:        BookIcon,
	payments:            PaymentsIcon,
	security:            ShieldIcon,
	settings:            SettingsIcon,
	help:                HelpIcon,
};

export default function Nav({ activePage, onNavigate }) {
	const [open, setOpen] = useState(false);

	function SidebarContent({ onClose } = {}) {
		return (
			<div className="sidebar-stone w-72 h-full flex flex-col justify-between">
				{/* Logo area */}
				<div>
					<div className="px-6 pt-8 pb-4">
						{/* Temple gate top ornament */}
						<div className="flex justify-center mb-4">
							<div className="w-12 h-12 rounded-full pulse-glow flex items-center justify-center"
								style={{background: 'conic-gradient(from 0deg, #d4a017, #e8750a, #c9862a, #d4a017, #e8750a, #c9862a, #d4a017)', padding: '2px'}}>
								<div className="w-full h-full rounded-full flex items-center justify-center" style={{background:'#1a0f05'}}>
									<svg viewBox="0 0 24 24" className="w-7 h-7" fill="#d4a017">
										<path d="M12 2 L14.5 8 L21 8 L15.5 12.5 L17.5 19 L12 15 L6.5 19 L8.5 12.5 L3 8 L9.5 8 Z"/>
									</svg>
								</div>
							</div>
						</div>
						<div className="text-center">
							<div className="shimmer-gold text-2xl font-historical font-bold tracking-widest">RAMDOOT</div>
							<div className="text-xs tracking-[0.25em] uppercase mt-0.5" style={{color:'rgba(212,160,23,0.55)'}}>Restores</div>
						</div>
						<div className="ornament-line mt-4"></div>
					</div>

					<nav className="px-3 space-y-1" aria-label="Sidebar">
						{NAV_ITEMS.main.map((item) => {
							const isActive = item.key === activePage;
							const Icon = iconMap[item.key];
							return (
								<button
									key={item.key}
									onClick={() => { onNavigate(item.key); if (onClose) onClose(); }}
									className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm text-left transition-all duration-200 focus:outline-none ${isActive ? 'nav-btn-active' : 'nav-btn-inactive'}`}
									aria-current={isActive ? "page" : undefined}
								>
									<span className="w-4 h-4 shrink-0">
										{Icon && <Icon aria-hidden />}
									</span>
									<span className="flex-1 tracking-wide">{item.label}</span>
									{isActive && <span style={{color:'#1a0f05', fontSize:'10px'}}>◆</span>}
								</button>
							);
						})}
					</nav>
				</div>

				<div className="px-3 pb-6">
					<div className="ornament-line mb-3"></div>
					<nav className="space-y-1 mb-4" aria-label="Footer navigation">
						{NAV_ITEMS.footer.map((item) => {
							const Icon = iconMap[item.key];
							const isActive = item.key === activePage;
							return (
								<button
									key={item.key}
									onClick={() => { onNavigate(item.key); if (onClose) onClose(); }}
									className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm text-left transition-all duration-200 focus:outline-none ${isActive ? 'nav-btn-active' : 'nav-btn-inactive'}`}
								>
									<span className="w-4 h-4 shrink-0">
										{Icon && <Icon aria-hidden />}
									</span>
									<span className="flex-1 tracking-wide">{item.label}</span>
								</button>
							);
						})}
					</nav>

					{/* User profile */}
					<div style={{borderTop:'1px solid rgba(212,160,23,0.2)', paddingTop:'12px'}}>
						<button className="w-full flex items-center gap-3 p-2 rounded-sm transition-colors focus:outline-none"
							style={{background:'rgba(212,160,23,0.06)'}}
							onMouseEnter={e => e.currentTarget.style.background='rgba(212,160,23,0.12)'}
							onMouseLeave={e => e.currentTarget.style.background='rgba(212,160,23,0.06)'}
						>
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback style={{background:'#d4a017', color:'#1a0f05', fontWeight:700}}>NS</AvatarFallback>
							</Avatar>
							<div className="flex-1 text-left">
								<div className="text-sm font-medium" style={{color:'#d4a017'}}>Navneet Sharma</div>
								<div className="text-xs" style={{color:'rgba(212,160,23,0.5)'}}>Developer</div>
							</div>
							<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#d4a01788" strokeWidth={2} aria-hidden>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<>
			{/* Mobile header */}
			<div className="md:hidden flex items-center justify-between px-4 py-3 border-b"
				style={{background:'#1a0f05', borderColor:'rgba(212,160,23,0.3)'}}>
				<button onClick={() => setOpen(true)} aria-label="Open menu"
					className="p-2 rounded-sm" style={{color:'#d4a017'}}>
					<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
				<div className="shimmer-gold text-xl font-historical font-bold tracking-widest">RAMDOOT</div>
				<div style={{width:40}} />
			</div>

			{/* Desktop sidebar */}
			<aside className="hidden md:flex shrink-0" aria-label="Primary Navigation">
				<SidebarContent />
			</aside>

			{/* Mobile drawer */}
			<Drawer open={open} onClose={() => setOpen(false)} title="Menu">
				<SidebarContent onClose={() => setOpen(false)} />
			</Drawer>
		</>
	);
}

/* ═══ Icons ═══ */
function HomeIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
			<path d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5z" />
		</svg>
	);
}
function TempleIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
			<path d="M3 21h18M6 21V10M18 21V10M12 3l-9 7h18l-9-7zM9 21V14h6v7" />
		</svg>
	);
}
function LotusIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
			<path d="M12 22c0 0-8-5-8-11a8 8 0 0 1 16 0c0 6-8 11-8 11z" />
			<path d="M12 22c0 0 8-5 8-11" />
		</svg>
	);
}
function UsersIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
			<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
		</svg>
	);
}
function SubscriptionsIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
			<rect x="3" y="4" width="18" height="16" rx="2" />
			<path d="M3 10h18M7 15h4" />
		</svg>
	);
}
function MegaphoneIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
			<path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
		</svg>
	);
}
function BookIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
			<path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
			<path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
		</svg>
	);
}
function PaymentsIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
			<rect x="1" y="4" width="22" height="16" rx="2" />
			<path d="M1 10h22" />
		</svg>
	);
}
function ShieldIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
			<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
		</svg>
	);
}
function SettingsIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
			<circle cx="12" cy="12" r="3" />
			<path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.7 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68V4a2 2 0 014 0v.09A1.65 1.65 0 0014 5.6a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
		</svg>
	);
}
function HelpIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
			<circle cx="12" cy="12" r="10" />
			<path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
			<line x1="12" y1="17" x2="12.01" y2="17" />
		</svg>
	);
}
function MagazineIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
			<rect x="4" y="3" width="16" height="18" rx="2" />
			<path d="M8 7h8M8 11h8M8 15h4" />
		</svg>
	);
}
