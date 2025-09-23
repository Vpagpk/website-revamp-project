"use client";

import Image from "next/image";
import { Play } from "lucide-react";

const performancesData = [
  {
    videoId: "nDAXiJ848a8",
    thumbnail: "https://img.youtube.com/vi/nDAXiJ848a8/maxresdefault.jpg",
    category: "Sufi Performance",
    title: "🕊️ YA HAYYU YA QAYYUM – A Soulful Sufi Kalam 🎶✨",
    description: "Experience the spiritual depth of Sufi poetry through mesmerizing dance and music.",
  },
  {
    videoId: "U4jowB_3U1s",
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/maxresdefault-3.jpg",
    category: "Cultural Festival",
    title: "Punjab Culture Day 2025 - V.PAG Performance",
    description: "Celebrating the vibrant cultural heritage of Punjab through traditional dance.",
  },
  {
    videoId: "XMdLb1-TEtg",
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/maxresdefault-8.jpg",
    category: "Classical Dance",
    title: "Classical Kathak Performance",
    description: "Elegant classical dance showcasing traditional storytelling through movement.",
  },
  {
    videoId: "azZZRqTmoQc",
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/maxresdefault-4.jpg",
    category: "Folk Dance",
    title: "Folk Dance Spectacular",
    description: "High-energy folk dance celebrating regional traditions and customs.",
  },
  {
    videoId: "m_ViCP12qnw",
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/maxresdefault-5.jpg",
    category: "Wedding Events",
    title: "Wedding Performance Highlights",
    description: "Creating magical moments for special celebrations through dance.",
  },
  {
    videoId: "placeholder-training",
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/maxresdefault-3.jpg",
    category: "Training",
    title: "Behind the Scenes - V.PAG Training",
    description: "A glimpse into our rigorous training programs and artistic development.",
  },
];

const PerformancesSection = () => {
  return (
    <section className="section bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_0%,#000000,transparent)]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Live{" "}
            <span className="gradient-text">Performances</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Watch our most captivating performances and experience the magic of V.PAG Dance Company through these memorable moments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {performancesData.map((perf, index) => (
            <div 
              key={perf.videoId} 
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a href={`https://www.youtube.com/watch?v=${perf.videoId}`} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-amber-400/30 transition-all duration-500 group-hover:scale-105">
                  <Image
                    src={perf.thumbnail}
                    alt={perf.title}
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:from-black/80 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-amber-400/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-400 transition-all duration-300 shadow-xl">
                      <Play className="w-7 h-7 text-black ml-1 fill-black" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-amber-400/90 backdrop-blur-sm text-black text-xs font-semibold rounded-full border border-amber-400/50">
                      {perf.category}
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors duration-300 mb-3 line-clamp-2 text-lg leading-tight">
                    {perf.title}
                  </h3>
                  <p className="text-zinc-400 line-clamp-2 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    {perf.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
            Want to see more? Visit our YouTube channel for the complete collection.
          </p>
          <a
            href="#"
            aria-label="Visit Our YouTube Channel"
            className="btn btn-secondary text-lg px-8 py-4 h-auto border-amber-400/30 hover:border-amber-400 hover:bg-amber-400/10"
          >
            Visit Our YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default PerformancesSection;