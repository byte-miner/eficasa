import Image from "next/image";

type HexagonFrameProps = {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
};

const sizes = {
  sm: "h-36 w-36 md:h-40 md:w-40",
  md: "h-48 w-48 md:h-56 md:w-56",
  lg: "h-56 w-56 md:h-72 md:w-72",
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
      style={{ filter: "drop-shadow(0 16px 28px rgba(0,0,0,0.28))" }}
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
