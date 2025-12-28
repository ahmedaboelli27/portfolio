import {
  Check,
  ChevronUp,
  Copy,
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ahmed-a-abo-ellil-7b0253275/",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/ahmed.atif.56481",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/201021752365?text=مرحبا",
  },
];

type Star = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  alphaDir: number;
};

export default function Contact() {
  const [showTop, setShowTop] = useState(false);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const email = "ahmed.aboellil27@gmail.com";

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ⭐ Stars Background (Contact Section) */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;

    // 🔧 MODIFICATIONS HERE
    const STAR_COUNT = Math.floor(120 * 1.35); // +35%
    const SIZE_MULTIPLIER = 1.25; // +25%

    const stars: Star[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height =
        canvas.parentElement?.offsetHeight || window.innerHeight;
    };

    resize();

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: (Math.random() * 1.2 + 0.5) * SIZE_MULTIPLIER, // size increased
        alpha: Math.random() * 0.8 + 0.2,
        alphaDir: Math.random() > 0.5 ? 1 : -1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;

        // ✨ Twinkle
        s.alpha += s.alphaDir * 0.006;
        if (s.alpha <= 0.2 || s.alpha >= 0.9) s.alphaDir *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
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
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(90deg, #243748, #4B749F)" }}
    >
      {/* ⭐ Stars Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always interested in hearing about new data analysis
            opportunities, collaborations, or meaningful conversations about data.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3
                           bg-white/10 backdrop-blur-md
                           p-6 rounded-xl
                           border border-white/20
                           text-gray-200
                           hover:bg-white/20
                           hover:-translate-y-1
                           hover:shadow-[0_15px_40px_rgba(0,0,0,0.45)]
                           transition-all duration-300"
              >
                <social.icon size={26} />
                <span className="font-semibold text-lg">
                  {social.name}
                </span>
              </a>
            ))}
          </div>

          {/* Email Card */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-md
                            border border-white/20
                            rounded-2xl p-8 max-w-md mx-auto
                            text-center
                            hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                            transition-all">
              <div className="flex justify-center mb-4">
                <Mail className="text-white" size={32} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                Email Address
              </h3>

              <p className="text-gray-300 text-sm mb-6 break-all">
                {email}
              </p>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2
                           px-6 py-2.5 rounded-lg
                           border border-white/20
                           text-gray-200
                           hover:text-white
                           hover:bg-white/10
                           transition-all"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy Email"}
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-10 border border-white/20 shadow-lg">
            <div className="text-center">
              <MessageCircle className="text-gray-200 mx-auto mb-5" size={48} />

              <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                Let's Start a Conversation
              </h3>

              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Whether you have a project in mind, need data analysis consultation,
                or just want to connect — I’d love to hear from you.
              </p>

              <a
                href="https://wa.me/201021752365?text=مرحبا"
                className="inline-flex items-center gap-2
                           px-10 py-4 rounded-full
                           border border-gray-300
                           text-gray-100
                           hover:bg-gray-100 hover:text-gray-900
                           transition-all duration-300
                           hover:scale-105"
              >
                <MessageCircle size={20} />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-20 pt-8 border-t border-white/20">
          <p className="text-gray-400 text-sm">
            © 2024 Ahmed Atief Abo-Ellil — Data Analyst Portfolio
          </p>
        </footer>
      </div>

      {/* Back to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50
                     bg-white/20 backdrop-blur-md
                     border border-white/30
                     text-gray-100
                     p-3 rounded-full
                     shadow-lg
                     hover:bg-white hover:text-gray-900
                     transition-all duration-300
                     hover:-translate-y-1"
        >
          <ChevronUp size={22} />
        </button>
      )}
    </section>
  );
}
