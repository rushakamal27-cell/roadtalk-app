"use client";

interface ToastProps { message: string; visible: boolean; }

export function Toast({ message, visible }: ToastProps) {
  return (
    <div className="fixed z-[300] left-1/2 -translate-x-1/2 font-mono text-[11px] px-5 py-[10px] rounded-[30px] pointer-events-none whitespace-nowrap transition-opacity duration-300" style={{ bottom: "90px", background: "var(--bg-card)", border: "1px solid var(--green)", color: "var(--green)", boxShadow: "0 0 20px rgba(0,232,122,0.3)", opacity: visible ? 1 : 0 }}>
      {message}
    </div>
  );
}
