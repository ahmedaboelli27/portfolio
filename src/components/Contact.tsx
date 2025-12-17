import { Facebook, Github, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ahmed-a-abo-ellil-7b0253275/',
    color: 'hover:bg-blue-700',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/ahmed.atif.56481',
    color: 'hover:bg-blue-600',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/201021752365',
    color: 'hover:bg-green-600',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/ahmed_atief27/',
    color: 'hover:bg-pink-600',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/ahmedaboelli27',
    color: 'hover:bg-gray-800',
  }


];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always interested in hearing about new data analysis opportunities,
            collaborations, or just having a conversation about data.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm p-6 rounded-lg ${social.color} transition-all duration-300 hover:scale-105 border border-white/20`}
              >
                <social.icon className="text-white" size={28} />
                <span className="text-white font-semibold text-lg">{social.name}</span>
              </a>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="text-center">
              <Mail className="text-blue-400 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-semibold text-white mb-4">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-300 mb-6">
                Whether you have a project in mind, need data analysis consultation,
                or just want to connect, I'd love to hear from you.
              </p>
              <a
                href="https://wa.me/201021752365?text=ازيك%20يا%20هندسة%20بعد%20اذنك%20عاوزك%20فى%20شغل"

                className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="mr-2" size={20} />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-gray-400">
            © 2024 Ahmed Atief Abo-Ellil. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
