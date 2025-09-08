import Link from 'next/link';
import { Torus, Music2, GraduationCap, Heart } from 'lucide-react';
import React from 'react';

const serviceData = [
  {
    icon: Torus,
    title: "Sufi Dance",
    description: "Authentic whirling ceremonies",
  },
  {
    icon: Music2,
    title: "Cultural Shows",
    description: "Folk & classical performances",
  },
  {
    icon: GraduationCap,
    title: "Dance Training",
    description: "Kathak & cultural classes",
  },
  {
    icon: Heart,
    title: "Wedding Events",
    description: "Bespoke celebrations",
  },
];

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="card group cursor-pointer">
    <div className="mb-6">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 border border-amber-400/30 text-amber-400 transition-all duration-300 group-hover:scale-110 group-hover:border-amber-400/50 group-hover:bg-gradient-to-br group-hover:from-amber-400/30 group-hover:to-orange-500/30">
        <Icon className="w-8 h-8" />
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-amber-400 transition-colors duration-300">{title}</h3>
    <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">{description}</p>
  </div>
);

export default function ServicesSection() {
  return (
    <section className="section bg-gradient-to-b from-zinc-900/50 to-black/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#fbbf24,transparent)]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Professional{" "}
            <span className="gradient-text">Dance Services</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive cultural dance services across Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            aria-label="Explore All Services"
            className="btn btn-secondary text-lg px-8 py-4 h-auto border-amber-400/30 hover:border-amber-400 hover:bg-amber-400/10"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}