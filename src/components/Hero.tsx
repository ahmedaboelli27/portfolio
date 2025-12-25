import { Check, ChevronDown, Copy, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: 0, y: 0, active: false });

  const [copied, setCopied] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const EMAIL = "ahmed.aboellil27@gmail.com"; // ← ضع الإيميل الحقيقي هنا

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* ========= Show Gmail after 2s (attention trick) ========= */
  useEffect(() => {
    const timer = setTimeout(() => setShowEmail(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  /* ================= Canvas Animation ================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;

    const PARTICLE_COUNT = 200;
    const MAX_DISTANCE = 200;
    const MOUSE_RADIUS = 120;

    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        r: 0.9,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1;
        if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1;

        if (mouse.current.active) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MOUSE_RADIUS) {
            p.x += dx * 0.015;
            p.y += dy * 0.015;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.65)";
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < MAX_DISTANCE) {
            ctx.strokeStyle = `rgba(255,255,255,${0.22 * (1 - dist / MAX_DISTANCE)
              })`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };

    const handleMouseLeave = () => {
      mouse.current.active = false;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(90deg, #243748, #4B749F)" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center px-4">
        {/* Profile */}
        <div className="mb-10 flex justify-center">
          <img
            src="/profile.png"
            alt="Ahmed Atief Abo-Ellil"
            className="w-40 h-40 rounded-full object-cover
                       border-4 border-gray-300
                       shadow-[0_0_35px_rgba(0,0,0,0.6)]"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Ahmed Atief Abo-Ellil
        </h1>

        <p className="text-2xl md:text-3xl text-gray-200 mb-6">
          Data Analyst
        </p>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Transforming data into actionable insights and driving business
          decisions through analytics
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full
                       border border-gray-300 text-gray-100
                       hover:bg-gray-100 hover:text-gray-900
                       transition-all duration-300"
          >
            View My Work
            <ChevronDown className="animate-bounce" />
          </button>

          {/* Gmail Button */}
          {showEmail && (
            <div className="relative group">
              {/* Tooltip */}
              <div
                className={`absolute -top-10 left-1/2 -translate-x-1/2
                            px-3 py-1 rounded-md text-sm
                            bg-black/80 text-white
                            transition-all duration-300
                            ${copied ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              >
                Copied to clipboard
              </div>

              <div
                onClick={copyEmail}
                className={`cursor-pointer inline-flex items-center gap-2
                            px-8 py-4 rounded-full
                            bg-white/10 backdrop-blur-md
                            border border-white/20
                            text-gray-100
                            hover:bg-white/20
                            transition-all duration-300
                            ${copied ? "scale-110 animate-pulse" : "hover:-translate-y-1"}`}
              >
                <Mail size={20} />
                <span className="text-sm md:text-base">
                  {copied ? "Email Copied" : "Copy Email"}
                </span>
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </div>
            </div>
          )}
        </div>

        {/* mailto */}
        <a
          href={`mailto:${EMAIL}`}
          className="mt-4 block text-sm text-gray-300 hover:text-white transition"
        >
          or send me an email directly
        </a>
      </div>
    </section>
  );
}
