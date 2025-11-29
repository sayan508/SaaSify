"use client";

import { Twitter, Github, Linkedin } from "lucide-react";

const quickLinks = [
  { name: "Home", target: "home" },
  { name: "Features", target: "features" },
  { name: "Testimonials", target: "testimonials" },
  { name: "Pricing", target: "pricing" },
];

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "GitHub", href: "#", icon: Github },
  { name: "LinkedIn", href: "#", icon: Linkedin },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function FooterSection() {
  return (
    <footer className="bg-black text-gray-200 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center font-bold text-black">
                S
              </div>
              <h2 className="text-2xl font-bold tracking-tight">SaaSify</h2>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Turning ideas into powerful digital experiences. Empowering teams to build, scale, and grow — faster.
            </p>
          </div>

          {/* Quick Links with smooth scroll */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.target)}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 
                    hover:border-orange-400 hover:text-orange-400 hover:shadow-lg transition-all"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10" />

        <p className="mt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} SaaSify • Crafted with ❤️ for innovators and builders.
        </p>
      </div>
    </footer>
  );
}
