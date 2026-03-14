"use client";

const checkItems = [
  { icon: "🛞", name: "Tires — Front Right", detail: "Tread: 6/32\" · Pressure: 105 PSI · Temp: Normal", status: "PASS" as const },
  { icon: "🔴", name: "Brake Line — Rear Axle", detail: "Air leak detected at coupling joint", status: "FAIL" as const },
  { icon: "💡", name: "Rear Light Cluster", detail: "Left brake light dim — 62% luminance", status: "WARN" as const },
  { icon: "🪟", name: "Windshield & Mirrors", detail: "No cracks · Visibility 100%", status: "PASS" as const },
  { icon: "⚙️", name: "Engine Bay", detail: "Oil: OK · Coolant: OK · Belts: OK", status: "PASS" as const },
];

const statusStyles = {
  PASS: { bg: "var(--green-dim)", color: "var(--green)", border: "rgba(0,232,122,0.3)" },
  FAIL: { bg: "var(--red-dim)", color: "var(--red)", border: "rgba(255,60,60,0.3)" },
  WARN: { bg: "rgba(255,214,0,0.12)", color: "var(--yellow)", border: "rgba(255,214,0,0.3)" },
};

export function InspectScreen() {
  return (
    <div className="animate-fade-in">
      <p className="font-mono text-[10px] tracking-[2px] uppercase mb-[10px]" style={{ color: "var(--text-secondary)" }}>Computer Vision · AR Inspection</p>
      <div className="rounded-2xl overflow-hidden relative h-[280px] mb-4" style={{ background: "#000", border: "1px solid var(--border-bright)" }}>
        <div className="w-full h-full flex items-center justify-center relative" style={{ background: "linear-gradient(180deg, #0a1a10 0%, #050e08 100%)" }}>
          <span className="text-[90px]" style={{ opacity: 0.18 }}>🚛</span>
          <div className="absolute inset-0">
            <div className="reticle-tl" /><div className="reticle-tr" /><div className="reticle-bl" /><div className="reticle-br" />
            <div className="ar-scan-line" />
            <div className="absolute top-3 left-1/2 -translate-x-1/2 font-mono text-[9px] px-[10px] py-[3px] rounded-full whitespace-nowrap" style={{ color: "var(--green)", background: "rgba(0,0,0,0.7)", border: "1px solid rgba(0,232,122,0.3)" }}>● CV-SCAN ACTIVE — FRAME 0847</div>
            <div className="bbox-anim absolute" style={{ left:"12%",top:"55%",width:"22%",height:"28%",border:"2px solid var(--green)",borderRadius:"4px",boxShadow:"0 0 10px rgba(0,232,122,0.3)"}}>
              <span className="absolute -top-[22px] -left-[1px] font-mono text-[9px] px-[6px] py-[2px] rounded-[3px]" style={{background:"var(--green)",color:"#000"}}>TIRE FR</span>
            </div>
            <div className="bbox-blink absolute" style={{ left:"65%",top:"52%",width:"24%",height:"30%",border:"2px solid var(--red)",borderRadius:"4px",boxShadow:"0 0 10px rgba(255,60,60,0.35)"}}>
              <span className="absolute -top-[22px] -left-[1px] font-mono text-[9px] px-[6px] py-[2px] rounded-[3px]" style={{background:"var(--red)",color:"#fff"}}>BRAKE LINE</span>
            </div>
            <div className="bbox-anim absolute" style={{ left:"38%",top:"30%",width:"26%",height:"22%",border:"2px solid var(--yellow)",borderRadius:"4px"}}>
              <span className="absolute -top-[22px] -left-[1px] font-mono text-[9px] px-[6px] py-[2px] rounded-[3px]" style={{background:"var(--yellow)",color:"#000"}}>LIGHT CLUSTER</span>
            </div>
            <div className="absolute font-mono text-[9px] p-[5px_8px] rounded-[4px] leading-relaxed" style={{left:"8%",top:"22%",background:"rgba(0,20,10,0.85)",border:"1px solid rgba(0,232,122,0.4)",color:"var(--green)"}}>
              <div>TREAD: 6/32" ✓</div><div>PRESSURE: 105 PSI ✓</div>
            </div>
            <div className="absolute font-mono text-[9px] p-[5px_8px] rounded-[4px] leading-relaxed" style={{right:"6%",bottom:"28%",background:"rgba(20,0,0,0.85)",border:"1px solid rgba(255,60,60,0.4)",color:"var(--red)"}}>
              <div>AIR LEAK DETECTED</div><div>NON-COMPLIANT ✗</div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-mono text-[10px] tracking-[2px] uppercase mb-[10px]" style={{ color: "var(--text-secondary)" }}>Pre-Trip Inspection Checklist</p>
      <div className="flex flex-col gap-2">
        {checkItems.map((item) => {
          const s = statusStyles[item.status];
          return (
            <div key={item.name} className="flex items-center gap-3 rounded-xl p-[12px_14px]" style={{background:"var(--bg-card)",border:"1px solid var(--border)"}}>
              <span className="text-[18px] flex-shrink-0">{item.icon}</span>
              <div className="flex-1">
                <div className="text-[14px] font-semibold" style={{color:"var(--text-primary)"}}>{item.name}</div>
                <div className="font-mono text-[10px] mt-[2px]" style={{color:"var(--text-secondary)"}}>{item.detail}</div>
              </div>
              <div className={`font-mono text-[10px] px-2 py-[3px] rounded-xl font-bold tracking-[1px] ${item.status==="FAIL"?"status-blink":""}`} style={{background:s.bg,color:s.color,border:`1px solid ${s.border}`}}>{item.status}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
