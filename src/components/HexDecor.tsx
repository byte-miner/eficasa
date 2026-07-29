export function HexDecor({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="dot-grid absolute inset-0 opacity-15" />
      <div className="fluid-blob absolute -top-[20%] -left-[12%] h-[55%] w-[42%] bg-navy-deep/35" />
      <div className="fluid-blob absolute top-[8%] -right-[14%] h-[45%] w-[38%] bg-cyan/15" />
      <div className="fluid-blob absolute -bottom-[22%] left-[18%] h-[48%] w-[50%] bg-green/10" />
    </div>
  );
}
