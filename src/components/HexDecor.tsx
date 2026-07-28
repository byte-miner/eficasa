export function HexDecor({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 hex-pattern opacity-45" />
      <div className="dot-grid absolute inset-0 opacity-20" />
      <div className="fluid-blob absolute -top-[20%] -left-[12%] h-[55%] w-[42%] bg-navy-deep/35" />
      <div className="fluid-blob absolute top-[8%] -right-[14%] h-[45%] w-[38%] bg-cyan/15" />
      <div className="fluid-blob absolute -bottom-[22%] left-[18%] h-[48%] w-[50%] bg-green/10" />
      <div className="float-hex absolute top-[14%] right-[7%] h-24 w-24 border border-cyan/45 hex-clip" />
      <div className="float-hex-slow absolute top-[42%] right-[20%] h-14 w-14 bg-lime/25 hex-clip" />
      <div className="float-hex absolute bottom-[16%] left-[5%] h-28 w-28 border border-green/30 hex-clip" />
      <div className="float-hex-slow absolute top-[55%] left-[12%] h-10 w-10 bg-cyan/20 hex-clip" />
    </div>
  );
}
