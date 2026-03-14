"use client";
import { useEffect, useRef } from "react";

export function DashboardScreen({ onIncident }: { onIncident: () => void }) {
  const gaugeRef = useRef<SVGPathElement>(null);
  useEffect(() => {
    if (gaugeRef.current) {
      gaugeRef.current.style.strokeDashoffset = "251";
      const t = setTimeout(() => { if (gaugeRef.current) gaugeRef.current.style.strokeDashoffset = "33"; }, 300);
      return () => clearTimeout(t);
    }
  }, []);
  return (
    <div className="animate-fade-in">
      <p className="font-mono text-[10px] tracking-[2px] uppercase mb-[10px]" style={{color:"var(--text-secondary)"}}>Safety Readiness Score</p>
      <div className="flex flex-col items-center rounded-2xl p-6 mb-4 relative overflow-hidden" style={{background:"linear-gradient(145deg,var(--bg-panel),var(--bg-card))",border:"1px solid var(--border-bright)"}}>
        <div className="absolute top-0 left-0 right-0 h-[2px] gauge-topline" style={{background:"linear-gradient(90deg,transparent,var(--cyan),transparent)"}} />
        <p className="font-mono text-[10px] tracking-[3px] mb-4" style={{color:"var(--text-secondary)"}}>COMPLIANCE RATING · LIVE</p>
        <div className="relative w-[200px] h-[120px]">
          <svg className="w-[200px] h-[120px]" viewBox="0 0 200 120">
            <path d="M 20 110 A 80 80 0 0 1 180 110" fill="none" stroke="rgba(0,200,255,0.1)" strokeWidth="12" strokeLinecap="round"/>
            <path ref={gaugeRef} d="M 20 110 A 80 80 0 0 1 180 110" fill="none" stroke="url(#gaugeGrad)" strokeWidth="12" strokeLinecap="round" strokeDasharray="251" strokeDashoffset="251" className="gauge-arc"/>
            <defs><linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00e87a"/><stop offset="100%" stopColor="#00c8ff"/></linearGradient></defs>
            <text x="18" y="128" fontFamily="Share Tech Mono" fontSize="10" fill="rgba(200,225,255,0.4)">0</text>
            <text x="175" y="128" fontFamily="Share Tech Mono" fontSize="10" fill="rgba(200,225,255,0.4)">100</text>
          </svg>
          <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 font-display font-black text-[42px] leading-none" style={{color:"var(--cyan)",textShadow:"0 0 20px var(--cyan-glow)"}}>87</div>
        </div>
        <p className="font-mono text-[11px] tracking-[2px] mt-2" style={{color:"var(--green)"}}>● COMPLIANT</p>
        <p className="text-[12px] mt-1" style={{color:"var(--text-secondary)"}}>Last updated: 06:42 AM · Pre-Trip Complete</p>
      </div>
      <p className="font-mono text-[10px] tracking-[2px] uppercase mb-[10px]" style={{color:"var(--text-secondary)"}}>Active Operational Zone</p>
      <div className="rounded-2xl p-[14px_16px] mb-4 relative overflow-hidden" style={{background:"linear-gradient(135deg,#0d1a24,#0a1520)",border:"1px solid rgba(255,140,0,0.3)"}}>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full dot-pulse" style={{background:"var(--orange)",boxShadow:"0 0 8px var(--orange)"}} />
          <span className="font-mono text-[10px] tracking-[2px]" style={{color:"var(--orange)"}}>ENTERING ZONE · GEO-FENCED</span>
        </div>
        <div className="font-display font-bold text-[15px] mb-[6px]" style={{color:"var(--text-primary)"}}>Port of Savannah — Terminal Gate 7</div>
        <div className="flex flex-wrap gap-[6px]">
          {["⚠ HIGH PEDESTRIAN TRAFFIC","🔍 INSPECTION LVL 8","📡 V2X ACTIVE","5 MPH LIMIT"].map(tag=>(
            <span key={tag} className="font-mono text-[10px] px-2 py-[3px] rounded-[4px]" style={{background:"rgba(255,140,0,0.1)",color:"var(--orange)",border:"1px solid rgba(255,140,0,0.25)"}}>{tag}</span>
          ))}
        </div>
      </div>
      <button onClick={onIncident} className="w-full p-[18px] rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center gap-[10px] font-display font-black text-[17px] tracking-[3px] uppercase cursor-pointer incident-hatch" style={{background:"linear-gradient(135deg,#3a0808,#250505)",border:"2px solid var(--red)",color:"var(--red)",boxShadow:"0 0 20px rgba(255,60,60,0.2)"}}>
        <span className="text-[22px]">⚡</span>INITIATE INCIDENT PROTOCOL
      </button>
      <p className="font-mono text-[10px] tracking-[2px] uppercase mb-[10px]" style={{color:"var(--text-secondary)"}}>Today&apos;s Summary</p>
      <div className="grid grid-cols-3 gap-[10px]">
        {[{val:"4",color:"var(--green)",label:"CHECKS\nPASSED"},{val:"312",color:"var(--cyan)",label:"MILES\nDRIVEN"},{val:"1",color:"var(--orange)",label:"ALERTS\nACTIVE"}].map(s=>(
          <div key={s.label} className="rounded-xl p-[12px_10px] text-center" style={{background:"var(--bg-card)",border:"1px solid var(--border))"}}>
            <div className="font-display font-bold text-[22px]" style={{color:s.color}}>{s.val}</div>
            <div className="font-mono text-[9px] tracking-[1px] mt-[3px] whitespace-pre-line" style={{color:"var(--text-secondary)"}}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
