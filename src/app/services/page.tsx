"use client";

import React from 'react';
import Navigation from '@/components/sections/navigation';
import ServicesSection from '@/components/sections/services-section';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Clock, Users, Award, CheckCircle, Phone, Mail, Calendar } from 'lucide-react';

const services = [
  {
    title: "Sufi Dance Performances",
    description: "Authentic spiritual whirling performances that showcase the mystical traditions of Sufism through graceful circular movements and traditional costumes.",
    icon: "🌀",
    features: [
      "Traditional Sufi whirling ceremonies",
      "Spiritual music and chanting",
      "Authentic period costumes",
      "Solo or group performances"
    ],
    pricing: "Starting from PKR 50,000",
    duration: "30-60 minutes",
    capacity: "1-8 performers"
  },
  {
    title: "Cultural Shows",
    description: "Vibrant performances featuring regional folk dances, traditional music, and colorful costumes representing Pakistan's diverse cultural heritage.",
    icon: "🎭",
    features: [
      "Bhangra and Punjabi folk dances",
      "Balochi and Sindhi traditional dances",
      "Live traditional music ensemble",
      "Interactive cultural experience"
    ],
    pricing: "Starting from PKR 80,000",
    duration: "45-90 minutes", 
    capacity: "5-15 performers"
  },
  {
    title: "Dance Training",
    description: "Professional dance instruction in traditional Pakistani dance forms, suitable for beginners to advanced students and corporate workshops.",
    icon: "🎓",
    features: [
      "Individual and group lessons",
      "Beginner to advanced levels",
      "Corporate team building workshops",
      "Cultural dance certification programs"
    ],
    pricing: "PKR 3,000 per session",
    duration: "1-2 hours per session",
    capacity: "1-20 students"
  },
  {
    title: "Wedding Events",
    description: "Spectacular wedding performances including mehndi ceremonies, baraat celebrations, and reception entertainment with traditional flair.",
    icon: "💒",
    features: [
      "Mehndi ceremony performances",
      "Baraat procession entertainment",
      "Reception cultural shows",
      "Custom choreography for families"
    ],
    pricing: "Contact for custom quote",
    duration: "2-4 hours",
    capacity: "3-12 performers"
  }
];

const servicePackages = [
  {
    name: "Bronze Package",
    price: "PKR 35,000",
    features: [
      "Single performer",
      "30-minute performance",
      "Basic costume included",
      "Background music"
    ]
  },
  {
    name: "Silver Package", 
    price: "PKR 65,000",
    features: [
      "3-4 performers",
      "45-minute performance",
      "Premium costumes included",
      "Live musicians",
      "Sound system provided"
    ],
    popular: true
  },
  {
    name: "Gold Package",
    price: "PKR 120,000", 
    features: [
      "6-8 performers",
      "60-90 minute performance",
      "Luxury costumes & props",
      "Full music ensemble",
      "Professional lighting",
      "Photography coordination"
    ]
  }
];

const testimonials = [
  {
    name: "Ahmed Hassan",
    title: "Event Director",
    company: "Luxury Events Lahore",
    rating: 5,
    comment: "V.PAG delivered an absolutely stunning Sufi performance for our corporate event. The spiritual depth and artistic excellence were truly remarkable.",
    image: "/api/placeholder/80/80"
  },
  {
    name: "Fatima Khan", 
    title: "Wedding Planner",
    company: "Royal Celebrations",
    rating: 5,
    comment: "Their cultural show transformed our client's wedding into an unforgettable celebration. Every guest was mesmerized by the authentic performances.",
    image: "/api/placeholder/80/80"
  },
  {
    name: "Dr. Sarah Ali",
    title: "Cultural Director", 
    company: "Arts Council Pakistan",
    rating: 5,
    comment: "The training workshops exceeded our expectations. V.PAG's expertise in traditional dance forms is unmatched in the region.",
    image: "/api/placeholder/80/80"
  }
];

const bookingSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "Contact us to discuss your event requirements, preferred date, and performance style."
  },
  {
    step: 2, 
    title: "Custom Proposal",
    description: "We'll create a tailored proposal with performer details, timeline, and transparent pricing."
  },
  {
    step: 3,
    title: "Contract & Booking",
    description: "Sign the agreement and secure your date with a 50% advance payment."
  },
  {
    step: 4,
    title: "Performance Delivery", 
    description: "Our team arrives prepared with all costumes, equipment, and delivers an exceptional show."
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent-orange/10"></div>
        <div className="container relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-secondary mb-8 leading-relaxed">
              Experience the rich cultural heritage of Pakistan through our professional dance performances, 
              training programs, and event entertainment services. From intimate gatherings to grand celebrations, 
              we bring authentic artistry to every occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +92 300 1234567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Detailed Services */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Service Details</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Explore our comprehensive range of cultural dance services, each crafted to deliver 
              authentic Pakistani artistry and unforgettable experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                      <p className="text-secondary leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-8 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{service.capacity}</span>
                      </div>
                    </div>
                    
                    <div className="text-xl font-bold text-primary">{service.pricing}</div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">What's Included:</h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-supporting">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                    Get Quote for {service.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Performance Packages</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Choose from our carefully crafted packages designed to meet different event scales and budgets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <Card key={index} className={`bg-card border-border transition-all duration-300 transform hover:scale-105 ${pkg.popular ? 'ring-2 ring-primary shadow-2xl' : ''}`}>
                <CardContent className="p-8 text-center">
                  {pkg.popular && (
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-foreground mb-6">{pkg.price}</div>
                  
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-supporting">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className={`w-full ${pkg.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-card border border-primary text-primary hover:bg-primary/10'} transition-all duration-300`}>
                    Choose {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Booking Process</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Our streamlined booking process ensures a smooth experience from initial consultation to performance delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookingSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-supporting leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-primary mb-4">Ready to Book?</h3>
              <p className="text-secondary mb-6">
                Contact our team today for a free consultation and custom quote tailored to your event needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call +92 300 1234567
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Testimonials */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Client Experiences</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Hear from our satisfied clients about their experiences with our professional dance services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-secondary leading-relaxed mb-6 italic">
                    "{testimonial.comment}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full bg-muted"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      <div className="text-sm text-primary">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent-orange relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Bring Authentic Culture to Your Event
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join over 500+ satisfied clients who have experienced the magic of Pakistani cultural arts through our professional services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 transition-all duration-300 transform hover:scale-105">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Performance
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="w-5 h-5 mr-2" />
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}