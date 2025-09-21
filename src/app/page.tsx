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
    <main id="content" className="min-h-screen">
      <ScrollProgress />
      {/* Skip to content link for accessibility */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only fixed left-3 top-3 z-[100] rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-white"
      >
        Skip to main content
      </a>
      <Navigation />
      <HeroSection />
      
      {/* Restructured content sections - Combined related sections for better UX */}
      <div className="flex flex-col space-y-16 md:space-y-24">
        {/* About & Services Combined Section */}
        <section className="space-y-16 md:space-y-20">
          <AboutSection />
          <div className="border-t border-zinc-800 pt-16 md:pt-20">
            <ServicesSection />
          </div>
        </section>
        
        {/* Portfolio & Testimonials Combined Section */}
        <section className="space-y-16 md:space-y-20">
          <PerformancesSection />
          <div className="border-t border-zinc-800 pt-16 md:pt-20">
            <TestimonialsSection />
          </div>
        </section>
        
        {/* Trust & Support Combined Section */}
        <section className="space-y-16 md:space-y-20">
          <BrandsSection />
          <div className="border-t border-zinc-800 pt-16 md:pt-20">
            <FaqSection />
          </div>
        </section>
        
        {/* Contact Section */}
        <LocationSection />
      </div>
      
      <CtaSection />
      <Footer />
      <BackToTop />
    </main>
  );
}