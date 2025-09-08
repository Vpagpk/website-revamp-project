import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="section bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_50%,#ffffff,transparent)]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Experience Authentic Pakistani Culture
          </h2>
          <p className="text-xl md:text-2xl text-black/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join 1,100+ satisfied clients. Book your cultural experience today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="bg-black text-white hover:bg-zinc-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-black/20 inline-flex items-center justify-center min-w-[200px]"
            >
              Get Custom Quote
            </Link>
            <Link
              href="/gallery"
              className="bg-white/10 backdrop-blur-sm text-black hover:bg-white/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-black/20 hover:border-black/40 inline-flex items-center justify-center min-w-[200px]"
            >
              Watch Performances
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;