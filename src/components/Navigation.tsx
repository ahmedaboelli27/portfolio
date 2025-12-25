import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Workflow", id: "process" },
  { label: "Business Impact", id: "businessimpact" },
  { label: "Use Cases", id: "usecases" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50
      transition-all duration-300
      ${isScrolled ? "backdrop-blur-md shadow-lg rounded-b-2xl" : "bg-transparent"}`}
      style={
        isScrolled
          ? { background: "linear-gradient(90deg, #243748, #4B749F)" }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center transition-all duration-300
            hover:scale-105 hover:drop-shadow-[0_0_14px_rgba(75,116,159,0.7)]"
            aria-label="AT Group Logo"
          >
            <img
              src="/AT-GROUP.png"
              alt="AT GROUP Logo"
              className="h-28 w-auto object-contain"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-base font-medium">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gray-300 hover:text-white transition-colors
                after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
                after:bg-white after:transition-all after:duration-300
                hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t border-white/10 rounded-b-2xl"
          style={{ background: "linear-gradient(90deg, #243748, #4B749F)" }}
        >
          <div className="px-6 py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-lg
                text-gray-200 hover:text-white
                transition-colors"
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
