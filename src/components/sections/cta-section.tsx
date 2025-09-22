import Link from "next/link";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="section bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_50%,#ffffff,transparent)]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Experience Authentic Pakistani Culture
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join 1,100+ satisfied clients. Book your cultural experience today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              asChild
              variant="inverted"
              size="xl"
              layout="wide"
            >
              <Link href="/contact">
                Get Custom Quote
              </Link>
            </Button>
            <Button
              asChild
              variant="glass"
              size="xl"
              layout="wide"
            >
              <Link href="/gallery">
                Watch Performances
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;