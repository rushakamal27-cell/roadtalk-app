"use client";

type Tab = "dash" | "inspect" | "audit";

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: "dash" as Tab, label: "HEADS-UP", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
    { id: "inspect" as Tab, label: "INSPECT", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg> },
    { id: "audit" as Tab, label: "AUDIT", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-[22px] h-[22px]"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  ];
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] flex justify-around z-[200] backdrop-blur-xl" style={{ background: "rgba(10,15,22,0.97)", borderTop: "1px solid var(--border-bright)", paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))", paddingTop: "8px" }}>
      {tabs.map((tab) => (
        <button key={tab.id} onClick={() => onTabChange(tab.id)} className="flex flex-col items-center gap-[3px] bg-transparent border-none cursor-pointer transition-colors duration-200 font-ui text-[11px] font-semibold tracking-[0.5px] px-[14px] py-[6px]" style={{ color: activeTab === tab.id ? "var(--cyan)" : "var(--text-secondary)", filter: activeTab === tab.id ? "drop-shadow(0 0 6px var(--cyan-glow))" : "none" }}>
          {tab.icon}{tab.label}
        </button>
      ))}
    </nav>
  );
}
