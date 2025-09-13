"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter, ChevronDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
  inquiryType: "booking" | "general";
}

const faqs = [
  {
    question: "How far in advance should I book a performance?",
    answer: "We recommend booking at least 2-3 weeks in advance for regular performances and 1-2 months for large events or weddings. This ensures availability and proper preparation time for our artists."
  },
  {
    question: "What types of events do you perform at?",
    answer: "We perform at corporate events, weddings, cultural festivals, private parties, educational institutions, and international cultural exchanges. Our performances are suitable for both indoor and outdoor venues."
  },
  {
    question: "Do you provide costumes and music equipment?",
    answer: "Yes, we provide all traditional costumes, props, and professional sound equipment. Our team comes fully prepared with authentic cultural attire and high-quality audio systems."
  },
  {
    question: "Can you customize performances for specific themes?",
    answer: "Absolutely! We can tailor our performances to match your event theme, duration requirements, and cultural preferences. We work closely with clients to create memorable experiences."
  },
  {
    question: "How do I get a quote?",
    answer: "We provide custom quotes after a short consultation to understand your event details (performance type, duration, number of artists, and location). Please contact us and we'll tailor a proposal for you."
  },
  {
    question: "Do you offer dance training classes?",
    answer: "Yes, we offer professional dance training for all skill levels. Our classes include Sufi whirling, folk dance, and contemporary cultural fusion. Both group and private lessons are available."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
    inquiryType: "booking"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter a message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Thank you! Your inquiry has been sent. We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        message: "",
        inquiryType: "booking"
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
              Ready to bring authentic Pakistani culture to your event? Contact our team for bookings, 
              inquiries, or to learn more about our dance training programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <div className="bg-background rounded-2xl p-8 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-3xl font-display font-semibold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll respond within 24 hours.
                </p>
              </div>

              {/* Form Type Selector */}
              <div className="mb-6">
                <div className="flex rounded-lg bg-card p-1">
                  <button
                    onClick={() => handleInputChange("inquiryType", "booking")}
                    className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                      formData.inquiryType === "booking"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Book Performance
                  </button>
                  <button
                    onClick={() => handleInputChange("inquiryType", "general")}
                    className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                      formData.inquiryType === "general"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    General Inquiry
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+92 300 1234567"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className="h-12"
                  />
                </div>

                {formData.inquiryType === "booking" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-2">Event Type</label>
                      <Select value={formData.eventType} onValueChange={(value) => handleInputChange("eventType", value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding Ceremony</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="festival">Cultural Festival</SelectItem>
                          <SelectItem value="private">Private Party</SelectItem>
                          <SelectItem value="educational">Educational Institution</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Event Date</label>
                      <Input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange("eventDate", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder={formData.inquiryType === "booking" 
                      ? "Please describe your event, expected number of guests, venue details, and any specific requirements..."
                      : "How can we help you? Please provide details about your inquiry..."
                    }
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-r from-primary to-accent-orange hover:from-secondary hover:to-primary transition-all duration-300"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-background border border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-display font-semibold mb-6 text-primary">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Office Address</h4>
                        <p className="text-muted-foreground">
                          123 Cultural Arts Street<br />
                          Model Town, Lahore<br />
                          Punjab 54000, Pakistan
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Phone Numbers</h4>
                        <p className="text-muted-foreground">
                          +92 42 1234 5678<br />
                          +92 300 1234 567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Email Addresses</h4>
                        <p className="text-muted-foreground">
                          info@vpag.pk<br />
                          bookings@vpag.pk
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Business Hours</h4>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Youtube className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-semibold mb-6">Visit Our Studio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our state-of-the-art dance studio is located in the heart of Lahore's cultural district. 
              Experience authentic Pakistani dance in a traditional setting designed for both performances and training.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6 text-primary">Studio Location Details</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    V.PAG Cultural Dance Academy<br />
                    123 Cultural Arts Street, Model Town<br />
                    Lahore, Punjab 54000, Pakistan
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Nearby Landmarks</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• 5 minutes from Liberty Market</li>
                    <li>• Near Model Town Park</li>
                    <li>• Close to Gulberg Main Boulevard</li>
                    <li>• Adjacent to Cultural Center</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Transportation</h4>
                  <p className="text-muted-foreground">
                    Easily accessible by car, taxi, or public transport. Ample parking available on-site. 
                    Metro bus station within 10 minutes walking distance.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Studio Features</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Professional dance floors</li>
                    <li>• Sound system and lighting</li>
                    <li>• Costume fitting rooms</li>
                    <li>• Air-conditioned environment</li>
                    <li>• Spectator seating area</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Interactive Map</h4>
                <p className="text-muted-foreground mb-4">
                  Get detailed directions to our studio location
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View on Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-semibold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services, booking process, and dance programs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-background border border-border">
                <CardContent className="p-0">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 text-left hover:bg-card/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-lg pr-4">{faq.question}</h4>
                      <ChevronDown className={`w-5 h-5 text-primary transition-transform ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">Still have questions?</p>
            <Button className="bg-primary hover:bg-secondary text-primary-foreground">
              Contact Us Directly
            </Button>
          </div>
        </div>
      </section>

      {/* Immediate Booking CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent-orange">
        <div className="container text-center">
          <h2 className="text-4xl font-display font-bold text-primary-foreground mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            For urgent bookings or time-sensitive inquiries, call us directly. 
            Our team is available during business hours for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +92 42 1234 5678
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary"
            >
              WhatsApp: +92 300 1234 567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}