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

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="py-24">
        <AboutSection />
      </div>
      <PerformancesSection />
      <ServicesSection />
      <div className="py-24">
        <BrandsSection />
      </div>
      <TestimonialsSection />
      <FaqSection />
      <div className="py-24">
        <LocationSection />
      </div>
      <CtaSection />
      <Footer />
    </main>
  );
}