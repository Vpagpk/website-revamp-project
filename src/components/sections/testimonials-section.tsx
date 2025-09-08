import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import Link from 'next/link';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  imageSrc: string;
};

const testimonialsData: Testimonial[] = [
  {
    quote: "V.PAG's performance at our client's wedding was absolutely mesmerizing. The Sufi dance performance brought tears to everyone's eyes. Their professionalism and artistry are unmatched. We've been working with them for over 3 years now.",
    name: "Ahmed Hassan",
    role: "Wedding Planner",
    company: "Elite Events Lahore",
    imageSrc: "https://i.pravatar.cc/48?u=ahmed-hassan",
  },
  {
    quote: "Working with V.PAG for our Punjab Culture Day event was incredible. Muhammad Fayyaz and his team delivered a performance that truly captured the essence of our cultural heritage. The audience was captivated from start to finish.",
    name: "Fatima Khan",
    role: "Cultural Director",
    company: "Alhamra Arts Council",
    imageSrc: "https://i.pravatar.cc/48?u=fatima-khan",
  },
  {
    quote: "V.PAG has performed at multiple corporate events for us. Their ability to adapt their performances to different audiences while maintaining cultural authenticity is remarkable. Highly recommended for any cultural event.",
    name: "Malik Usman",
    role: "Corporate Event Manager",
    company: "Atlas Honda",
    imageSrc: "https://i.pravatar.cc/48?u=malik-usman",
  },
  {
    quote: "Learning Kathak from V.PAG has been a transformative experience. The instructors are not just teachers but true artists who inspire you to connect with the art form on a deeper level. The training is professional yet nurturing.",
    name: "Sarah Ali",
    role: "Dance Student",
    company: "V.PAG Academy",
    imageSrc: "https://i.pravatar.cc/48?u=sarah-ali",
  },
  {
    quote: "V.PAG's contribution to our annual cultural festival has been invaluable. Their performances are not just entertainment but cultural education that helps preserve our traditions for future generations.",
    name: "Dr. Rashid Mahmood",
    role: "Festival Organizer",
    company: "Shalimar Cultural Festival",
    imageSrc: "https://i.pravatar.cc/48?u=dr-rashid-mahmood",
  },
  {
    quote: "Having V.PAG perform at my mehndi was a dream come true. The dancers were so graceful and the performance was perfectly choreographed. All our guests were talking about it for months afterward!",
    name: "Amna Sheikh",
    role: "Bride",
    company: "Personal Client",
    imageSrc: "https://i.pravatar.cc/48?u=amna-sheikh",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_0%,#fbbf24,transparent)]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            What People{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Over 22 years of excellence, thousands of happy clients, and countless memorable performances. Here's what our clients say about working with V.PAG Dance Company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={testimonial.name} 
              className="card group hover:glow-effect animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-amber-400/30 mb-4 transition-colors duration-300 group-hover:text-amber-400/50" />
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative">
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover border-2 border-zinc-700 group-hover:border-amber-400/50 transition-colors duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base group-hover:text-amber-400 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href="/contact"
            className="btn btn-primary text-lg px-8 py-4 h-auto"
          >
            Book Your Performance
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;