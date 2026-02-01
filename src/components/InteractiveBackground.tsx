import { useEffect, useRef } from "react";

type TrailPoint = {
  x: number;
  y: number;
  alpha: number;
};

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const trail = useRef<TrailPoint[]>([]);

  // target = real mouse
  const target = useRef({ x: 0, y: 0 });

  // current = smoothed position
  const current = useRef({ x: 0, y: 0 });

  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    /* ================= CONFIG ================= */
    const CORE_RADIUS = 45;
    const CORE_ALPHA = 0.45;

    const TRAIL_RADIUS = 22;
    const TRAIL_ALPHA = 0.20;

    const FADE_SPEED = 0.012;    // ⬅ تلاشي هادئ
    const MAX_TRAIL = 90;        // ⬅ ذيل أطول

    const SMOOTHING = 0.14;      // 🔥 كلما قلّ = سلاسة أعلى

    /* ================= DRAW LOOP ================= */
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 🧈 smooth movement (lerp)
      current.current.x += (target.current.x - current.current.x) * SMOOTHING;
      current.current.y += (target.current.y - current.current.y) * SMOOTHING;

      /* ---- trail ---- */
      trail.current.forEach(p => {
        p.alpha -= FADE_SPEED;
        if (p.alpha <= 0) return;

        const g = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          TRAIL_RADIUS
        );

        g.addColorStop(0, `rgba(160,210,255,${p.alpha})`);
        g.addColorStop(0.6, `rgba(160,210,255,${p.alpha * 0.8})`);
        g.addColorStop(1, "rgba(160,210,255,0)");

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, TRAIL_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      });

      trail.current = trail.current.filter(p => p.alpha > 0);

      /* ---- core glow (stable) ---- */
      const core = ctx.createRadialGradient(
        current.current.x,
        current.current.y,
        0,
        current.current.x,
        current.current.y,
        CORE_RADIUS
      );

      core.addColorStop(0, `rgba(180,220,255,${CORE_ALPHA})`);
      core.addColorStop(0.5, `rgba(180,220,255,${CORE_ALPHA * 0.45})`);
      core.addColorStop(1, "rgba(180,220,255,0)");

      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(
        current.current.x,
        current.current.y,
        CORE_RADIUS,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // add trail point gently
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      const speed = Math.hypot(dx, dy);

      if (speed > 0.2) {
        trail.current.push({
          x: current.current.x,
          y: current.current.y,
          alpha: TRAIL_ALPHA,
        });

        if (trail.current.length > MAX_TRAIL) {
          trail.current.shift();
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
    />
  );
}
