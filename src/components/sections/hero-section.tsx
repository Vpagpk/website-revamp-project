import Link from "next/link";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";

const HeroSection = () => {
  const stats = [
    { value: "22+", label: "Years Excellence" },
    { value: "1.1k+", label: "Happy Clients" },
    { value: "1k+", label: "Performances" },
  ];

  return (
    <section className="relative flex items-center overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/hero-background-CT38UIQE-1.jpg"
          alt="Professional Sufi whirling dancer in traditional white costume performing spiritual dance with flowing movements against dark backdrop - V.PAG Dance Company authentic Pakistani cultural performance"
          fill
          className="object-cover object-center"
          priority
          aspectRatio="hero"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/85 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 container py-24 pt-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8">
              Premier{" "}
              <span className="gradient-text">
                Cultural Dance
              </span>{" "}
              Company
            </h1>
          </div>
          
          <div className="animate-slide-up text-lg md:text-xl lg:text-2xl text-secondary mb-8 md:mb-12 space-y-3 md:space-y-4 leading-relaxed max-w-3xl mx-auto px-4 md:px-0">
            <p className="flex items-center justify-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent">✨</span>
              Authentic Sufi whirling &amp; traditional folk dances
            </p>
            <p className="flex items-center justify-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent">🏆</span>
              Award-winning artists preserving cultural heritage
            </p>
            <p className="flex items-center justify-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent">🎭</span>
              22+ years of breathtaking performances
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-20 px-4 md:px-0">
            <Button
              asChild
              variant="gradient"
              size="hero"
            >
              <Link href="/services">
                Book Sufi Performance
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="hero"
            >
              <Link href="/gallery">
                View Dance Gallery
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card glass-effect text-center p-8 group hover:glow-effect"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-3 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <p className="text-base text-muted font-medium tracking-wide transition-colors duration-300 group-hover:text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;