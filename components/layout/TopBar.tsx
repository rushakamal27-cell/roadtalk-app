"use client";

interface TopBarProps {
  isDriving: boolean;
  onToggleDriving: () => void;
}

export function TopBar({ isDriving, onToggleDriving }: TopBarProps) {
  return (
    <header className="flex items-center justify-between px-[18px] py-[14px] border-b sticky top-0 z-[100] backdrop-blur-md" style={{ borderColor: "var(--border)", background: "rgba(8,12,16,0.95)" }}>
      <div className="font-display font-black text-xl tracking-[2px]" style={{ color: "var(--cyan)", textShadow: "0 0 18px var(--cyan-glow)" }}>
        SAFE<span style={{ color: "var(--text-primary)" }}>HAUL</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-mono text-[9px] tracking-[1.5px] transition-colors duration-300" style={{ color: isDriving ? "var(--green)" : "var(--text-secondary)" }}>
          {isDriving ? "ON AIR" : "DRIVE"}
        </span>
        <button onClick={onToggleDriving} className="relative w-[46px] h-[24px] rounded-xl transition-all duration-300 flex-shrink-0" style={{ background: isDriving ? "rgba(0,232,122,0.18)" : "var(--bg-card2)", border: `1.5px solid ${isDriving ? "var(--green)" : "var(--border-bright)"}`, boxShadow: isDriving ? "0 0 8px rgba(0,232,122,0.3)" : "none" }}>
          <span className="absolute top-[2px] w-[16px] h-[16px] rounded-full transition-all duration-300" style={{ left: isDriving ? "24px" : "2px", background: isDriving ? "var(--green)" : "var(--text-secondary)", boxShadow: isDriving ? "0 0 8px var(--green)" : "none" }} />
        </button>
      </div>
      <div className="flex gap-[6px] items-center">
        <div className="font-mono text-[10px] px-2 py-[3px] rounded-full" style={{ background: "var(--green-dim)", color: "var(--green)", border: "1px solid rgba(0,232,122,0.3)" }}>● GPS</div>
        <div className="font-mono text-[10px] px-2 py-[3px] rounded-full" style={{ background: "var(--cyan-dim)", color: "var(--cyan)", border: "1px solid rgba(0,200,255,0.3)" }}>V2X</div>
      </div>
    </header>
  );
}

