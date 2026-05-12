import { Check, ChevronUp, Copy, Mail, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/share/18pnUer272/",
    color: "#1877F2",
    target: "_blank", // فتح في نافذة جديدة
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/ahmedatifaboellil",
    color: "#C13584",
    target: "_blank",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/ahmedaboellil27",
    color: "#0A66C2",
    target: "_blank",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/201023641533?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85",
    color: "#25D366",
    target: "_blank",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    href: "https://www.tiktok.com/@ahmed.abo_ellil27?is_from_webapp=1&sender_device=pc",
    color: "#000000",
    target: "_blank",
  },
];

type Star = { x: number; y: number; vx: number; vy: number; r: number; alpha: number; alphaDir: number };

export default function Contact() {
  const [showTop, setShowTop] = useState(false);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const email = "ahmed.aboellil27@gmail.com";

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationId = 0;
    const STAR_COUNT = Math.floor(120 * 1.7);
    const stars: Star[] = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };
    resize();
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 2.5 + 1,
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

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: "rgba(0,0,0,0.4)" }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
      <div className="absolute inset-0 bg-black/45 z-[1]" />

      <div className="relative z-10 py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always interested in hearing about new data analysis opportunities, collaborations, or meaningful conversations about data.
          </p>
        </div>

        {/* Social Icons Row */}
        <SocialRow>
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <SocialButton key={index} href={social.href} color={social.color} className="border border-sky-950">
                <Icon size={45} />
                <span className="tooltip">{social.name}</span>
              </SocialButton>
            );
          })}
        </SocialRow>

        {/* Email Card */}
        <div className="mb-16">
          <div className="mx-auto max-w-md rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md transition-all hover:shadow-lg">
            <div className="mb-4 flex justify-center">
              <Mail className="text-white" size={32} />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Email Address</h3>
            <p className="mb-6 break-all text-sm text-gray-300">{email}</p>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-2.5 text-gray-200 transition-all hover:bg-white/10 hover:text-white"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy Email"}
            </button>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="rounded-xl border border-white/20 bg-white/10 p-10 shadow-lg backdrop-blur-md">
          <div className="text-center">
            <MessageCircle className="mx-auto mb-5 text-gray-200" size={48} />
            <h3 className="mb-4 text-2xl font-semibold text-gray-100">Let's Start a Conversation</h3>
            <p className="mx-auto mb-8 max-w-xl text-gray-300">
              Whether you have a project in mind, need data analysis consultation, or just want to connect — I’d love to hear from you.
            </p>
            <a
              href="https://wa.me/201021752365?text=مرحبا"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-10 py-4 text-gray-100 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:text-gray-900"
            >
              <MessageCircle size={20} />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-20 border-t border-white/20 pt-8 text-center">
        <p className="text-sm text-gray-400">© 2024 Ahmed Atief Abo-Ellil — Data Analyst Portfolio</p>
      </footer>

      {showTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full border border-white/30 bg-white/20 p-3 text-gray-100 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-gray-900"
        >
          <ChevronUp size={22} />
        </button>
      )}
    </section>
  );
}

// Styled Components
const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
`;

const SocialButton = styled.a<{ color: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 144px;  /* أكبر بنسبة 20% عن السابق */
  height: 144px; 
  border-radius: 20%;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s ease;
  overflow: visible;
  box-shadow: 0 6px 20px rgba(0,0,0,0.5);

  svg {
    fill: #fff;
    width: 45px;
    height: 45px;
    transition: all 0.5s ease;
  }

  .tooltip {
    position: absolute;
    bottom: -40%; /* أقرب 30% للأيقونة */
    opacity: 0;
    color: #fff;
    font-size: 21px; /* أكبر 25% */
    font-weight: 600;
    white-space: nowrap;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-20px);
    box-shadow: 0 14px 35px rgba(0,0,0,0.6); /* ظل أقوى */
    svg {
      transform: scale(1.5); /* تصغير الأيقونة إلى 65% */
      fill: ${(props) => props.color};
    }
    .tooltip {
      opacity: 1;
    }
  }
`;