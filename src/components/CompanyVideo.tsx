"use client";

import { useRef, useState } from "react";

type CompanyVideoProps = {
  src: string;
};

export function CompanyVideo({ src }: CompanyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  }

  return (
    <div className="relative mx-auto w-full overflow-hidden bg-navy shadow-[0_20px_50px_rgba(45,52,136,0.22)]">
      {/* Brand gradient frame (arte-style) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] border-2 border-transparent"
        style={{
          borderImage:
            "linear-gradient(135deg, var(--cyan), var(--lime), var(--green)) 1",
        }}
      />
      <video
        ref={videoRef}
        className="h-full w-full object-contain bg-navy"
        playsInline
        preload="metadata"
        controls={playing}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
        Su navegador no admite la reproducción de video.
      </video>

      {!playing && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Reproducir video"
          className="absolute top-1/2 left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-cyan/80 bg-navy/70 text-cyan shadow-[0_8px_28px_rgba(0,0,0,0.35)] transition hover:scale-105 hover:bg-navy/85 hover:text-white"
        >
          <span className="ml-1 text-2xl leading-none" aria-hidden>
            ▶
          </span>
        </button>
      )}
    </div>
  );
}
