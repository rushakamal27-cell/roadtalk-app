"use client";

function EventCard({ date, badge, badgeType, title, detail, meta, onClick }: { date:string; badge:string; badgeType:"pass"|"fail"|"warn"|"info"; title:string; detail:string; meta:string[]; onClick:()=>void }) {
  const lines = { pass:"var(--green)", fail:"var(--red)", warn:"var(--orange)", info:"var(--cyan)" };
  const badges = { pass:{bg:"var(--green-dim)",color:"var(--green)"}, fail:{bg:"var(--red-dim)",color:"var(--red)"}, warn:{bg:"var(--orange-dim)",color:"var(--orange)"}, info:{bg:"var(--cyan-dim)",color:"var(--cyan)"} };
  return (
    <div className="rounded-2xl p-[14px_16px] mb-[10px] relative overflow-hidden cursor-pointer transition-all duration-200" style={{background:"var(--bg-card)",border:"1px solid var(--border)"}} onClick={onClick}>
      <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{background:lines[badgeType]}} />
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[10px]" style={{color:"var(--text-secondary)"}}>{date}</span>
        <span className="font-mono text-[9px] px-2 py-[2px] rounded-[10px] tracking-[1px] font-bold" style={{background:badges[badgeType].bg,color:badges[badgeType].color}}>{badge}</span>
      </div>
      <div className="font-display font-bold text-[15px] mb-[6px]" style={{color:"var(--text-primary)"}}>{title}</div>
      <div className="font-mono text-[10px] leading-relaxed" style={{color:"var(--text-secondary)"}}>{detail}</div>
      <div className="flex gap-3 mt-2 flex-wrap">{meta.map(m=><span key={m} className="font-mono text-[9px]" style={{color:"var(--text-secondary)"}}>{m}</span>)}</div>
    </div>
  );
}

export function AuditScreen({ onGenerateReport, onExpandCard }: { onGenerateReport:()=>void; onExpandCard:()=>void }) {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-[14px]">
        <h2 className="font-display font-bold text-[18px]">Audit Trail</h2>
        <button onClick={onGenerateReport} className="font-ui font-bold text-[11px] px-3 py-[7px] rounded-lg tracking-[1px] cursor-pointer" style={{background:"linear-gradient(135deg,rgba(0,200,255,0.1),rgba(0,200,255,0.05))",border:"1px solid var(--cyan)",color:"var(--cyan)"}}>⬇ FMCSA REPORT</button>
      </div>
      <div className="rounded-xl p-[14px] mb-4 relative overflow-hidden" style={{background:"#050e0a",border:"1px solid rgba(0,200,255,0.2)"}}>
        <div className="font-mono text-[9px] tracking-[2px] mb-[10px]" style={{color:"var(--cyan)"}}>📍 INCIDENT LOCATION MAP · SYNCED</div>
        <div className="w-full h-[120px] relative rounded-[6px]" style={{backgroundImage:"linear-gradient(rgba(0,200,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,255,0.04) 1px,transparent 1px)",backgroundSize:"20px 20px"}}>
          <svg style={{position:"absolute",inset:0,width:"100%",height:"100%"}} viewBox="0 0 340 120">
            <polyline points="30,90 80,70 130,60 170,65 210,45 260,50 310,35" fill="none" stroke="rgba(0,200,255,0.3)" strokeWidth="2" strokeDasharray="5,3"/>
          </svg>
          {[{left:"24%",top:"58%",type:"check",label:"Pre-Trip"},{left:"50%",top:"54%",type:"incident",label:"Incident"},{left:"77%",top:"37%",type:"check",label:"Inspection"},{left:"91%",top:"29%",type:"current",label:"NOW"}].map(dot=>(
            <div key={dot.label}>
              <div className={`absolute w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 ${dot.type==="incident"?"dot-pulse":dot.type==="current"?"dot-pulse-slow":""}`} style={{left:dot.left,top:dot.top,background:dot.type==="incident"?"var(--red)":dot.type==="current"?"var(--cyan)":"var(--green)",boxShadow:dot.type==="incident"?"0 0 10px var(--red)":dot.type==="current"?"0 0 12px var(--cyan)":"0 0 8px var(--green)"}} />
              <span className="absolute font-mono text-[8px] whitespace-nowrap" style={{left:dot.left,top:dot.top,transform:"translate(8px,-50%)",color:"var(--text-secondary)"}}>{dot.label}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="font-mono text-[10px] tracking-[2px] uppercase mb-[10px]" style={{color:"var(--text-secondary)"}}>Event Log</p>
      <EventCard date="📅 MAR 10, 2026 · 06:42 AM" badge="PASSED" badgeType="pass" title="Pre-Trip Inspection" detail="Vehicle #TRK-4471 · Driver: M. Rodriguez · 18 points verified · 1 warning logged" meta={["📍 Savannah, GA","🎙 4m 12s","📷 12 photos"]} onClick={onExpandCard}/>
      <EventCard date="📅 MAR 10, 2026 · 09:18 AM" badge="INCIDENT" badgeType="fail" title="Air Brake Failure — I-16 MM 47" detail="Rear axle brake line coupling failure. FMCSA §393.45 violation logged. Protocol initiated." meta={["📍 MM 47, I-16 W","🎙 8m 33s","🛠 DOT notified"]} onClick={onExpandCard}/>
      <EventCard date="📅 MAR 10, 2026 · 11:05 AM" badge="PASSED" badgeType="pass" title="Roadside Inspection — Level II" detail="Officer Martinez · Badge #4892 · Vehicle cleared after brake line repair." meta={["📍 US-17 N Weigh Station","🎙 2m 07s","📄 Cert. #RS-2026-0310"]} onClick={onExpandCard}/>
      <EventCard date="📅 MAR 09, 2026 · 15:30 PM" badge="WARNING" badgeType="warn" title="HOS Log — 30-Min Rest Reminder" detail="Driver approaching 8-hour mark. Break taken at Pilot TA #1142." meta={["📍 Brunswick, GA","⏱ 8h 02m elapsed"]} onClick={onExpandCard}/>
      <EventCard date="📅 MAR 09, 2026 · 06:15 AM" badge="PRE-TRIP" badgeType="info" title="Pre-Trip Inspection — Jacksonville FL" detail="All 18 checkpoints passed. Zero defects. Compliance score: 100/100." meta={["📍 Jacksonville, FL","🎙 3m 45s","📷 10 photos"]} onClick={onExpandCard}/>
    </div>
  );
}
