import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const SocialIcon = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-800 text-zinc-400 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-zinc-950 to-black border-t border-zinc-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_100%,#000000,transparent)]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 py-20">
          
          <div className="pr-8">
            <Link href="/" className="flex items-center space-x-4 mb-6 group">
              <div className="relative overflow-hidden rounded-xl bg-black/20 p-3 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/vpag-logo.png"
                  alt="VPAG - Versatile Performing Art Group"
                  width={64}
                  height={64}
                  className="w-16 h-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-display bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">VPAG</h3>
                <p className="text-xs font-normal text-zinc-500 tracking-wide">
                  Versatile Performing Art Group
                </p>
              </div>
            </Link>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Preserving Pakistani cultural heritage through authentic dance performances, training programs, and artistic excellence for over 22 years.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-display">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-zinc-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Home</Link></li>
              <li><Link href="/about" className="text-zinc-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">About Us</Link></li>
              <li><Link href="/services" className="text-zinc-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Our Services</Link></li>
              <li><Link href="/gallery" className="text-zinc-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-display">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-zinc-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Sufi Dance Performances</Link></li>
              <li><Link href="/services" className="text-zinc-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Cultural Shows</Link></li>
              <li><Link href="/services" className="text-zinc-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Wedding Events</Link></li>
              <li><Link href="/services" className="text-zinc-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Dance Training</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-display">Get in Touch</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Lahore, Punjab, Pakistan</span>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:+923009402878" className="text-zinc-400 hover:text-blue-400 transition-colors duration-300">+92 300 9402878</a>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:info@vpag.pk" className="text-zinc-400 hover:text-blue-400 transition-colors duration-300">info@vpag.pk</a>
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-white mb-4 font-display">Find Us</h4>
            <div className="flex space-x-3 mb-8">
              <SocialIcon href="#" icon={Facebook} label="Facebook"/>
              <SocialIcon href="#" icon={Instagram} label="Instagram"/>
              <SocialIcon href="#" icon={Youtube} label="Youtube"/>
              <SocialIcon href="#" icon={Twitter} label="Twitter"/>
            </div>
            
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Book Performance
            </Link>
          </div>
        </div>

        <div className="py-8 border-t border-zinc-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-center sm:text-left">
            © 2025 V.PAG - Versatile Performing Art Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-zinc-500 hover:text-blue-400 transition-colors duration-300 text-sm">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-zinc-500 hover:text-blue-400 transition-colors duration-300 text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}