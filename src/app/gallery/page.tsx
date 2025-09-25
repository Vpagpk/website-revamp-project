"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/sections/navigation";
import PerformancesSection from "@/components/sections/performances-section";
import Footer from "@/components/sections/footer";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Play, Filter, Star, Award, Users, Calendar, MapPin, Phone, Mail, X } from 'lucide-react';
import Masonry from 'react-masonry-css';
import { Input } from "@/components/ui/input";
import { useInView } from 'react-intersection-observer';

interface Photo {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
}

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  category: string;
  duration: string;
  views: string;
}

const categories = [
  { id: 'all', name: 'All Performances', count: 34 },
  { id: 'sufi', name: 'Sufi Dance', count: 4 },
  { id: 'cultural', name: 'Cultural Shows', count: 16 },
  { id: 'wedding', name: 'Wedding Events', count: 4 },
  { id: 'corporate', name: 'Corporate Events', count: 2 },
  { id: 'festivals', name: 'Festivals', count: 8 }
];

const photoGallery: Photo[] = [
  {
    id: 1,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/hero-background-CT38UIQE-1.jpg",
    category: "sufi",
    title: "Traditional Sufi Whirling",
    description: "Mesmerizing spiritual dance performance"
  },
  {
    id: 2,
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/about-image-B8DwQPlU-2.jpg",
    category: "cultural",
    title: "Cultural Dance Ensemble",
    description: "Colorful traditional Pakistani folk dance"
  },
  {
    id: 3,
    src: "/IMAGE45_1758783316691.webp",
    category: "cultural",
    title: "Majestic Palace Performance",
    description: "Grand traditional dance in historic palace venue"
  },
  {
    id: 7,
    src: "/IMAGE40_1758783316683.webp",
    category: "cultural",
    title: "Grand Palace Performance",
    description: "Multi-tiered traditional dance showcase in historic venue"
  },
  {
    id: 8,
    src: "/IMAGE41_1758783316684.webp",
    category: "cultural",
    title: "Sunset Beach Performance",
    description: "Traditional drummers and dancers at golden hour"
  },
  {
    id: 9,
    src: "/IMAGE42_1758783316687.webp",
    category: "festivals",
    title: "Stadium Folk Festival",
    description: "Colorful folk dance performance at sports venue"
  },
  {
    id: 10,
    src: "/IMAGE43_1758783316688.webp",
    category: "corporate",
    title: "TV Studio Production",
    description: "Professional filming with mountain backdrop"
  },
  {
    id: 11,
    src: "/IMAGE44_1758783316690.webp",
    category: "festivals",
    title: "Red Fort Heritage Dance",
    description: "Traditional performance at iconic Mughal fortress"
  },
  {
    id: 12,
    src: "/IMAGE46_1758783316692.webp",
    category: "sufi",
    title: "Sacred Sword Dance",
    description: "Mystical white-robed performers with traditional swords"
  },
  {
    id: 13,
    src: "/IMAGE47_1758783316693.webp",
    category: "sufi",
    title: "Courtyard Whirling Ceremony",
    description: "Spiritual whirling dance in historic palace courtyard"
  },
  {
    id: 14,
    src: "/IMAGE48_1758783316694.webp",
    category: "cultural",
    title: "Royal Palace Sword Dance",
    description: "Elegant traditional sword performance in ornate palace hall"
  },
  {
    id: 15,
    src: "/IMAGE49_1758783316694.webp",
    category: "sufi",
    title: "Sacred Circle Dance",
    description: "Traditional circle formation in majestic palace courtyard"
  },
  {
    id: 16,
    src: "/IMAGE30_1758783316695.webp",
    category: "cultural",
    title: "Ancient Egyptian Revival",
    description: "Pharaonic-inspired dance performance on grand stage"
  },
  {
    id: 17,
    src: "/IMAGE31_1758783316695.webp",
    category: "festivals",
    title: "Fort Folk Celebration",
    description: "Vibrant folk dance at historic Lahore Fort"
  },
  {
    id: 18,
    src: "/IMAGE32_1758783316696.webp",
    category: "cultural",
    title: "Energetic Bhangra Performance",
    description: "High-energy Punjabi folk dance with traditional moves"
  },
  {
    id: 19,
    src: "/IMAGE33_1758783316696.webp",
    category: "corporate",
    title: "Live Television Performance",
    description: "Professional broadcast production with full crew"
  },
  {
    id: 20,
    src: "/IMAGE34_1758783316697.webp",
    category: "cultural",
    title: "Fortress Courtyard Dance",
    description: "Traditional performance in historic fort setting"
  },
  {
    id: 21,
    src: "/IMAGE35_1758783316698.webp",
    category: "cultural",
    title: "Ornate Traditional Dance",
    description: "Elaborate costumes and intricate choreography"
  },
  {
    id: 22,
    src: "/IMAGE36_1758783316698.webp",
    category: "festivals",
    title: "Festive Celebration Dance",
    description: "Joyful performance with colorful traditional attire"
  },
  {
    id: 23,
    src: "/IMAGE37_1758783316699.webp",
    category: "cultural",
    title: "Museum Cultural Showcase",
    description: "Heritage performance in traditional carpet setting"
  },
  {
    id: 24,
    src: "/IMAGE38_1758783316699.webp",
    category: "cultural",
    title: "Historic Fort Sword Dance",
    description: "Traditional warriors' dance in ancient fort courtyard"
  },
  {
    id: 25,
    src: "/IMAGE39_1758783316700.webp",
    category: "festivals",
    title: "Sacred Fire Ceremony",
    description: "Traditional celebration with fire ritual in historic mosque"
  },
  {
    id: 26,
    src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=400&fit=crop",
    category: "wedding",
    title: "Wedding Celebration Dance",
    description: "Joyful dance for wedding ceremonies"
  },
  {
    id: 27,
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "wedding",
    title: "Mehndi Ceremony Dance",
    description: "Traditional pre-wedding celebration"
  },
  {
    id: 28,
    src: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=500&h=400&fit=crop",
    category: "wedding",
    title: "Reception Entertainment",
    description: "Grand wedding reception performance"
  },
  {
    id: 29,
    src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&h=400&fit=crop",
    category: "wedding",
    title: "Baraat Celebration",
    description: "Groom's procession dance performance"
  },
  {
    id: 30,
    src: "/IMAGE50_1758785926741.webp",
    category: "cultural",
    title: "Classical Red & Gold Performance",
    description: "Elegant traditional dance with exquisite red and gold costume"
  },
  {
    id: 31,
    src: "/IMAGE51_1758785926742.webp",
    category: "cultural",
    title: "Majestic Palace Sword Dance",
    description: "Traditional sword performance in ornate palace setting"
  },
  {
    id: 32,
    src: "/IMAGE52_1758785926744.webp",
    category: "cultural",
    title: "Mountain Heritage Performance",
    description: "Spectacular sword dance with Himalayan mountain backdrop"
  },
  {
    id: 33,
    src: "/IMAGE53_1758785926745.webp",
    category: "cultural",
    title: "Sunset Palace Dance",
    description: "Traditional performance in warm golden palace ambiance"
  },
  {
    id: 34,
    src: "/IMAGE54_1758785926745.webp",
    category: "cultural",
    title: "Emerald Mystical Dance",
    description: "Mesmerizing performance in flowing green traditional attire"
  },
  {
    id: 35,
    src: "/IMAGE55_1758785926746.webp",
    category: "festivals",
    title: "Grand Palace Festival",
    description: "Vibrant outdoor festival performance with colorful turbans"
  },
  {
    id: 36,
    src: "/IMAGE56_1758785926748.webp",
    category: "festivals",
    title: "Grand Theater Spectacle",
    description: "Large-scale performance with multiple dancers on grand stage"
  },
  {
    id: 37,
    src: "/IMAGE96_1758785926749.webp",
    category: "festivals",
    title: "Triumphant Cultural Celebration",
    description: "Joyful festival performance with raised arms and golden turbans"
  }
];

const videoGallery: Video[] = [
  {
    id: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    title: "Sufi Whirling Masterpiece",
    category: "sufi",
    duration: "3:32",
    views: "1.5B"
  },
  {
    id: "3tmd-ClpJxA",
    thumbnail: "https://img.youtube.com/vi/3tmd-ClpJxA/maxresdefault.jpg",
    title: "Cultural Dance Festival",
    category: "cultural",
    duration: "4:09",
    views: "2.1M"
  },
  {
    id: "l-gQLqv9f4o",
    thumbnail: "https://img.youtube.com/vi/l-gQLqv9f4o/maxresdefault.jpg",
    title: "Wedding Dance Celebration",
    category: "wedding",
    duration: "2:54",
    views: "11M"
  },
  {
    id: "u6VTj7LhCtE",
    thumbnail: "https://img.youtube.com/vi/u6VTj7LhCtE/maxresdefault.jpg",
    title: "Behind the Scenes",
    category: "corporate",
    duration: "5:58",
    views: "3.2M"
  }
];

const behindTheScenes = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    title: "Rehearsal Sessions",
    description: "Intensive practice and preparation"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    title: "Costume Preparation",
    description: "Authentic traditional attire"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400&h=300&fit=crop",
    title: "Stage Setup",
    description: "Creating the perfect atmosphere"
  }
];

const achievements = [
  { icon: Award, number: "50+", label: "Awards Won" },
  { icon: Users, number: "1.1K+", label: "Performances" },
  { icon: Star, number: "500+", label: "Happy Clients" },
  { icon: Calendar, number: "22+", label: "Years Experience" }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [visiblePhotos, setVisiblePhotos] = useState(6);
  const [visibleVideos, setVisibleVideos] = useState(4);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setVisiblePhotos((prev) => prev + 6);
      setVisibleVideos((prev) => prev + 4);
    }
  }, [inView]);

  const filteredPhotos = (activeCategory === 'all' 
    ? photoGallery 
    : photoGallery.filter(photo => photo.category === activeCategory)
  ).filter(photo => photo.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const filteredVideos = (activeCategory === 'all'
    ? videoGallery
    : videoGallery.filter(video => video.category === activeCategory)
  ).filter(video => video.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Gallery Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-background via-background to-accent/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-orange bg-clip-text text-transparent">
              Performance Gallery
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Explore our captivating collection of cultural dance performances, behind-the-scenes moments, 
              and the artistry that defines V.PAG's legacy in Pakistani cultural arts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2 text-primary border-primary">
                <Play className="w-4 h-4 mr-2" />
                34 Performance Photos
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-primary border-primary">
                <Filter className="w-4 h-4 mr-2" />
                6 Categories
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="transition-all duration-300 hover:scale-105"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
          <div className="max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search gallery..."
              className="w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Existing Performances Section */}
      <PerformancesSection />

      {/* Photo Gallery */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Photo Gallery</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Captured moments of grace, tradition, and artistic excellence from our most memorable performances.
            </p>
          </div>
          
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-8"
            columnClassName="pl-8 bg-clip-padding"
          >
            {filteredPhotos.slice(0, visiblePhotos).map((photo) => (
              <Card 
                key={photo.id} 
                className="group cursor-pointer overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 mb-8"
                onClick={() => setSelectedImage(photo)}
              >
                <div className="relative overflow-hidden">
                  <OptimizedImage
                    src={photo.src}
                    alt={photo.title}
                    width={500}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    aspectRatio="card"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {categories.find(cat => cat.id === photo.category)?.name}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-text-secondary">{photo.description}</p>
                </CardContent>
              </Card>
            ))}
          </Masonry>
          {visiblePhotos < filteredPhotos.length && <div ref={ref} />}
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Video Gallery</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Experience the movement, rhythm, and soul of our performances through our curated video collection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredVideos.slice(0, visibleVideos).map((video) => (
              <Card 
                key={video.id} 
                className="group cursor-pointer border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <OptimizedImage
                    src={video.thumbnail}
                    alt={video.title}
                    width={500}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    aspectRatio="card"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {categories.find(cat => cat.id === video.category)?.name}
                  </Badge>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-text-secondary">{video.views} views</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {visibleVideos < filteredVideos.length && <div ref={ref} />}
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Behind the Scenes</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Discover the dedication, preparation, and artistry that goes into creating our magical performances.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {behindTheScenes.map((item) => (
              <Card key={item.id} className="group cursor-pointer border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <OptimizedImage
                    src={item.src}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    aspectRatio="card"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-text-secondary">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Highlights & Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Performance Highlights</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our journey of excellence in preserving and showcasing Pakistani cultural heritage through dance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="text-center p-8 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    {achievement.number}
                  </div>
                  <p className="text-text-secondary font-medium">{achievement.label}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent-orange/10 to-primary/10">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-accent-orange p-12 text-center border-0">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              Ready to Experience Our Artistry?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Book V.PAG for your next event and bring the magic of authentic Pakistani cultural dance to your celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Performance
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center text-primary-foreground/90">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Lahore, Punjab</span>
              </div>
              <div className="flex items-center text-primary-foreground/90">
                <Phone className="w-5 h-5 mr-2" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center text-primary-foreground/90">
                <Mail className="w-5 h-5 mr-2" />
                <span>info@vpag.pk</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in-0"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <OptimizedImage
              src={selectedImage.src}
              alt={selectedImage.title}
              fill={true}
              className="rounded-lg object-contain"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 text-white bg-primary rounded-full p-2 hover:bg-primary/80 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in-0"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-4 -right-4 text-white bg-primary rounded-full p-2 hover:bg-primary/80 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}