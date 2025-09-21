"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/sections/navigation";
import PerformancesSection from "@/components/sections/performances-section";
import Footer from "@/components/sections/footer";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Play, Filter, Star, Award, Users, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Performances', count: 24 },
  { id: 'sufi', name: 'Sufi Dance', count: 8 },
  { id: 'cultural', name: 'Cultural Shows', count: 6 },
  { id: 'wedding', name: 'Wedding Events', count: 5 },
  { id: 'corporate', name: 'Corporate Events', count: 3 },
  { id: 'festivals', name: 'Festivals', count: 2 }
];

const photoGallery = [
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
    src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=400&fit=crop",
    category: "wedding",
    title: "Wedding Celebration Dance",
    description: "Joyful dance for wedding ceremonies"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
    category: "corporate",
    title: "Corporate Event Performance",
    description: "Professional cultural showcase"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=500&h=400&fit=crop",
    category: "festivals",
    title: "Festival Performance",
    description: "Grand cultural festival showcase"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&h=400&fit=crop",
    category: "sufi",
    title: "Sufi Music & Dance",
    description: "Traditional music with dance"
  }
];

const videoGallery = [
  {
    id: 1,
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/maxresdefault-5.jpg",
    title: "Sufi Whirling Masterpiece",
    category: "sufi",
    duration: "8:45",
    views: "125K"
  },
  {
    id: 2,
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/maxresdefault-4.jpg",
    title: "Cultural Dance Festival",
    category: "cultural",
    duration: "12:30",
    views: "89K"
  },
  {
    id: 3,
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/maxresdefault-8.jpg",
    title: "Wedding Dance Celebration",
    category: "wedding",
    duration: "15:20",
    views: "67K"
  },
  {
    id: 4,
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/maxresdefault-3.jpg",
    title: "Behind the Scenes",
    category: "corporate",
    duration: "6:15",
    views: "45K"
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

  const filteredPhotos = activeCategory === 'all' 
    ? photoGallery 
    : photoGallery.filter(photo => photo.category === activeCategory);

  const filteredVideos = activeCategory === 'all'
    ? videoGallery
    : videoGallery.filter(video => video.category === activeCategory);

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
                24 Performance Videos
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
          <div className="flex flex-wrap justify-center gap-4">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo) => (
              <Card key={photo.id} className="group cursor-pointer overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300">
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
          </div>
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
            {filteredVideos.map((video) => (
              <Card key={video.id} className="group cursor-pointer border-border/50 hover:border-primary/50 transition-all duration-300">
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
              <Card key={item.id} className="group cursor-pointer border-border/50 hover:border-primary/50 transition-all duration-300">
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
    </div>
  );
}