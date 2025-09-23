import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from 'next/link';

const features = [
  { icon: '🎪', label: 'Specializing in:', text: 'Authentic Sufi dance, classical performances & traditional folk arts' },
  { icon: '👑', label: 'Founded by:', text: 'Renowned artist Sir Muhammad Fayyaz' },
  { icon: '🌍', label: 'Global reach:', text: 'International stages & cultural preservation' },
  { icon: '🎓', label: 'Training:', text: 'World-class performers & certified instructors' }
];

const AboutSection = () => {
  return (
    <section className="section bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_0%,#000000,transparent)]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                Pakistan's Leading{" "}
                <span className="gradient-text">Cultural Arts</span>{" "}
                Institution
              </h2>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-amber-400/30 hover:bg-zinc-900/50 transition-all duration-300 group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <strong className="text-amber-400 font-semibold block mb-1">
                        {feature.label}
                      </strong>
                      <p className="text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Link
                  href="/about"
                  aria-label="Learn about V.PAG Dance Company history"
                  className="btn btn-primary text-lg px-8 py-4 h-auto"
                >
                  Our Heritage Story
                </Link>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <OptimizedImage
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/about-image-B8DwQPlU-2.jpg"
                alt="V.PAG Dance Company master performing traditional Pakistani classical Kathak dance in ornate cultural costume with precise hand gestures and expressions showcasing years of artistic training"
                width={600}
                height={400}
                className="relative w-full h-80 lg:h-[500px] object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                aspectRatio="card"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;