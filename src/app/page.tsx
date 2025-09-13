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

export default function HomePage() {
  return (
    <main id="content" className="min-h-screen">
      {/* Skip to content link for accessibility */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only fixed left-3 top-3 z-[100] rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-white"
      >
        Skip to main content
      </a>
      <Navigation />
      <HeroSection />
      {/* Consistent vertical rhythm across sections */}
      <div className="flex flex-col space-y-24 md:space-y-32">
        <AboutSection />
        <PerformancesSection />
        <ServicesSection />
        <BrandsSection />
        <TestimonialsSection />
        <FaqSection />
        <LocationSection />
      </div>
      <CtaSection />
      <Footer />
      <BackToTop />
    </main>
  );
}