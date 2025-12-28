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

type Star = {
  x: number;
  y: number;
  vx: number;
  r: number;
};

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lastScrollY = useRef(0);

  /* ================= Scroll state ================= */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= Active section highlight ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    NAV_ITEMS.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    const hero = document.getElementById("hero");
    if (hero) observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  /* ================= Stars background ================= */
  useEffect(() => {
    if (!isScrolled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    const STAR_COUNT = 40;
    const stars: Star[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 80;
    };

    resize();

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 0.9 + 0.3,
      });
    }

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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled
          ? "backdrop-blur-md shadow-lg rounded-b-[2.5rem]"
          : "bg-transparent"
        }`}
      style={
        isScrolled
          ? { background: "linear-gradient(90deg, #1b2f3f, #3b5f82)" }
          : undefined
      }
    >
      {isScrolled && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center transition-all duration-300
            hover:scale-105 hover:drop-shadow-[0_0_14px_rgba(75,116,159,0.7)]"
          >
            <img
              src="/AT-GROUP.png"
              alt="AT GROUP Logo"
              className="h-28 w-auto object-contain"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-base font-medium">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative transition-colors
                  ${isActive
                      ? "text-white after:w-full"
                      : "text-gray-300 hover:text-white after:w-0"
                    }
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                  after:bg-white after:transition-all after:duration-300`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t border-white/10 rounded-b-[2.5rem]"
          style={{ background: "linear-gradient(90deg, #1b2f3f, #3b5f82)" }}
        >
          <div className="px-6 py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 text-lg transition-colors
                ${activeSection === item.id
                    ? "text-white font-semibold"
                    : "text-gray-200 hover:text-white"
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
