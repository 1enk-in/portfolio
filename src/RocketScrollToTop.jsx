import React, { useRef, useState } from "react";
import { MdRocketLaunch } from "react-icons/md";
import confetti from "canvas-confetti";
import "./RocketScrollToTop.css";

export default function Footer() {
  const [clicked, setClicked] = useState(false);
  const [floaties, setFloaties] = useState([]);
  const heartRef = useRef(null);
  const popRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const triggerConfetti = () => {
    if (!heartRef.current) return;
    const rect = heartRef.current.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 60,
      spread: 70,
      startVelocity: 40,
      scalar: 0.9,
      origin: { x, y },
    });
  };

  const spawnFloatingHearts = (count = 7) => {
    const items = Array.from({ length: count }).map((_, i) => ({
      id: Date.now() + i,
      dx: (Math.random() * 120 - 60).toFixed(0), // -60..60 px
      dur: Math.floor(Math.random() * 700) + 1100, // 1100..1800 ms
      scale: (Math.random() * 0.6 + 0.7).toFixed(2), // 0.7..1.3
      rotate: (Math.random() * 60 - 30).toFixed(0), // -30..30 deg
    }));

    setFloaties((prev) => [...prev, ...items]);

    // Auto-remove each after its duration
    items.forEach((it) => {
      setTimeout(() => {
        setFloaties((prev) => prev.filter((f) => f.id !== it.id));
      }, it.dur + 50);
    });
  };

  const handleHeartClick = () => {
    setClicked(true);
    triggerConfetti();
    spawnFloatingHearts();

    // play sound
    try {
      popRef.current?.currentTime && (popRef.current.currentTime = 0);
      popRef.current?.play?.();
    } catch {}

    setTimeout(() => setClicked(false), 800);
  };

  return (
    <footer className="footer">
      {/* sound */}
      <audio ref={popRef} src="/heart-pop.mp3" preload="auto" />

      <p className="footer-text">
        Made with{" "}
        <span className="heart-wrap">
          <span
            ref={heartRef}
            className={`heart ${clicked ? "pulse glow" : ""}`}
            onClick={handleHeartClick}
            role="button"
            aria-label="Made with love"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleHeartClick()}
          >
            ❤️
          </span>

          {/* floating hearts */}
          {floaties.map((f) => (
            <span
              key={f.id}
              className="float-heart"
              style={{
                "--dx": `${f.dx}px`,
                "--dur": `${f.dur}ms`,
                "--scale": f.scale,
                "--rot": `${f.rotate}deg`,
              }}
            >
              ♥
            </span>
          ))}
        </span>{" "}
        by <strong>Naved Khan</strong>
      </p>

      <button
        className="footer-rocket"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <MdRocketLaunch size={28} />
        <span className="tooltip">Beam me up, Scotty!</span>
      </button>
    </footer>
  );
}
