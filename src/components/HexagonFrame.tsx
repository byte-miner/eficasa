import Image from "next/image";

type HexagonFrameProps = {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
};

const sizes = {
  sm: "h-40 w-40 md:h-44 md:w-44",
  md: "h-48 w-48 md:h-56 md:w-56",
  lg: "h-56 w-56 md:h-64 md:w-64",
};

export function HexagonFrame({
  src,
  alt,
  className = "",
  size = "md",
  priority = false,
}: HexagonFrameProps) {
  return (
    <div
      className={`relative ${sizes[size]} ${className}`}
      style={{
        filter:
          "drop-shadow(0 12px 24px rgba(0,0,0,0.3)) drop-shadow(0 0 14px rgba(91,200,224,0.35))",
      }}
    >
      <div
        className="hex-clip absolute inset-0 p-[2.5px]"
        style={{
          background:
            "linear-gradient(135deg, var(--cyan) 0%, var(--lime) 55%, var(--green) 100%)",
        }}
      >
        <div className="hex-clip relative h-full w-full overflow-hidden bg-navy-deep">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 220px, 300px"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
