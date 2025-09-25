import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import PerformancesSection from '@/components/sections/performances-section';
import ServicesSection from '@/components/sections/services-section';
import BrandsSection from '@/components/sections/brands-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import FaqSection from '@/components/sections/faq-section';
import LocationSection from '@/components/sections/location-section';
import CtaSection from '@/components/sections/cta-section';
import Footer from '@/components/sections/footer';
import { BackToTop } from '@/components/ui/back-to-top';
import { ScrollProgress } from '@/components/ui/scroll-progress';

export default function HomePage() {
  return (
    <main id="content" className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      
      {/* Enhanced accessibility link with premium styling */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only fixed left-4 top-4 z-[100] rounded-xl border border-blue-400/30 bg-gradient-to-r from-zinc-900/90 to-zinc-800/90 px-4 py-3 text-blue-400 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
      >
        Skip to main content
      </a>
      
      {/* Premium header with glass morphism effect */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/50">
        <Navigation />
      </div>
      
      {/* Enhanced hero section with premium background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,0,0,0.1),transparent_60%)]" />
        <HeroSection />
      </div>
      
      {/* Premium content sections with enhanced styling */}
      <div className="relative flex flex-col space-y-24 md:space-y-32">
        {/* About & Services Premium Section */}
        <section className="relative space-y-24 md:space-y-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent" />
          <div className="relative">
            <AboutSection />
            <div className="border-t border-zinc-800/30 pt-24 md:pt-32">
              <ServicesSection />
            </div>
          </div>
        </section>
        
        {/* Portfolio & Testimonials Premium Section */}
        <section className="relative space-y-24 md:space-y-32">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-transparent to-zinc-900/30" />
          <div className="relative">
            <PerformancesSection />
            <div className="border-t border-zinc-800/30 pt-24 md:pt-32">
              <TestimonialsSection />
            </div>
          </div>
        </section>
        
        {/* Trust & Support Premium Section */}
        <section className="relative space-y-24 md:space-y-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/40 to-transparent" />
          <div className="relative">
            <BrandsSection />
            <div className="border-t border-zinc-800/30 pt-24 md:pt-32">
              <FaqSection />
            </div>
          </div>
        </section>
        
        {/* Contact Premium Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent" />
          <LocationSection />
        </div>
      </div>
      
      {/* Premium CTA section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <CtaSection />
      </div>
      
      {/* Premium footer */}
      <div className="relative border-t border-zinc-800/50">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
        <Footer />
      </div>
      
      <BackToTop />
    </main>
  );
}