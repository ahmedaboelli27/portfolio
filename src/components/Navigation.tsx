import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Workflow", id: "process" },
  { label: "Business Impact", id: "businessimpact" },
  { label: "Use Cases", id: "usecases" },
  { label: "Projects", id: "projects" },
  { label: "Courses", id: "development" },
  { label: "Contact", id: "contact" },
];

type Star = { x: number; y: number; vx: number; r: number };

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
    );

    NAV_ITEMS.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });
    const hero = document.getElementById("hero");
    if (hero) observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isScrolled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const STAR_COUNT = 40;
    const stars: Star[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 80;
    };
    resize();

    for (let i = 0; i < STAR_COUNT; i++)
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 0.9 + 0.3,
      });

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scrollDelta = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;

      for (const s of stars) {
        s.x += s.vx;
        s.y += scrollDelta * 0.04;
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [isScrolled]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? "backdrop-blur-2xl shadow-2xl rounded-b-3xl" : "bg-transparent"}`}
      style={
        isScrolled
          ? {
            background:
              "linear-gradient(90deg, rgba(27,47,63,0.9), rgba(59,95,130,0.9))",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            backdropFilter: "blur(20px) saturate(180%)",
          }
          : undefined
      }
    >
      {isScrolled && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center transition-all duration-300 hover:scale-105 z-30"
          >
            <img
              src="/logo.png"
              alt="AT GROUP Logo"
              className="h-12 sm:h-16 md:h-20 w-auto object-contain"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-base font-medium">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative flex items-center px-4 py-2 rounded-md transition-all duration-300"
                >
                  <span
                    className={`
                      absolute inset-0 rounded-md
                      ${isActive
                        ? "bg-white/15 shadow-[0_0_18px_rgba(255,255,255,0.4)]"
                        : "group-hover:bg-white/10 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                      }
                      transition-all duration-300
                    `}
                  />
                  <span
                    className={`relative z-10 text-base font-medium transition-colors duration-300
                      ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"}
                    `}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white z-30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t border-white/10 rounded-b-3xl z-20 max-h-[calc(100vh-80px)] overflow-y-auto"
          style={{
            background:
              "linear-gradient(90deg, rgba(27,47,63,0.95), rgba(59,95,130,0.95))",
            backdropFilter: "blur(18px) saturate(150%)",
          }}
        >
          <div className="px-6 py-8 space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 text-lg sm:text-xl transition-all duration-300 rounded-md
                  ${activeSection === item.id
                    ? "text-white font-semibold bg-white/15 shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                    : "text-gray-200 hover:text-white hover:bg-white/10 hover:shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}