"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqData = [
  {
    id: "item-1",
    question: "What types of dance performances does V.PAG offer?",
    answer:
      "We specialize in a wide range of authentic Pakistani cultural dances, including Sufi whirling (Sema), Kathak, Bhangra, Luddi, and various regional folk dances. Each performance is a vibrant showcase of tradition and artistry, tailored to your event.",
  },
  {
    id: "item-2",
    question: "How far in advance should I book a performance?",
    answer:
      "We recommend booking at least 4-6 weeks in advance, especially for large events or during peak seasons (like wedding season or cultural festivals). However, we can sometimes accommodate last-minute requests depending on artist availability, so feel free to inquire.",
  },
  {
    id: "item-3",
    question: "Do you provide performances outside of Lahore?",
    answer:
      "Yes, our group performs across Pakistan and is available for international events. For performances outside of Lahore, travel, and accommodation costs will be factored into the final quote. We have experience managing logistics for national and global tours.",
  },
  {
    id: "item-4",
    question: "Can you customize performances for specific themes or events?",
    answer:
      "Absolutely. Customization is one of our key strengths. We work closely with clients to tailor performances to specific themes, durations, and audience profiles for weddings, corporate events, cultural festivals, and private parties.",
  },
  {
    id: "item-5",
    question: "What is included in your training programs?",
    answer:
      "Our training programs cover everything from foundational techniques to advanced choreography in various dance forms like Kathak and Sufi whirling. Programs include group classes, one-on-one coaching, cultural context lessons, and performance opportunities.",
  },
  {
    id: "item-6",
    question: "How many performers are typically included in a show?",
    answer:
      "The number of performers varies based on the type of dance and the scale of your event. A performance can range from a solo artist for an intimate gathering to a full troupe of 10-15 dancers for a grand stage show. We'll recommend the optimal number for maximum impact.",
  },
  {
    id: "item-7",
    question: "What are your performance fees?",
    answer:
      "Performance fees depend on several factors, including the type of dance, number of performers, duration, and location. Please contact us with your event details for a customized quote. We offer packages to suit various budgets.",
  },
  {
    id: "item-8",
    question: "Do you provide costumes and music for performances?",
    answer:
      "Yes, all our performances are all-inclusive. We provide authentic, high-quality costumes and professional music arrangements (either live or recorded) to ensure a complete and immersive cultural experience.",
  },
  {
    id: "item-9",
    question: "Can you perform for both indoor and outdoor venues?",
    answer:
      "Yes, we are experienced in performing in a variety of settings, both indoors and outdoors. We will need details about the venue and stage/performance area to ensure safety and the best possible presentation.",
  },
  {
    id: "item-10",
    question: "What makes V.PAG different from other dance companies?",
    answer:
      "Our commitment to authenticity, artistic excellence, and education sets us apart. Founded by a renowned artist and with over 22 years of experience, we focus on preserving cultural heritage while delivering professional, breathtaking performances.",
  },
  {
    id: "item-11",
    question: "Do you offer workshops for corporate team building?",
    answer:
      "Yes, we offer engaging and interactive dance workshops designed for corporate team-building events. These sessions are a unique way to boost creativity, collaboration, and cultural appreciation within your team. They can be customized to fit your company's goals.",
  },
  {
    id: "item-12",
    question: "How do I get started with dance training at V.PAG?",
    answer:
      "Getting started is easy! Visit our 'Dance Training' page for information on current classes and schedules, or contact us directly to discuss your interests. We welcome students of all levels, from complete beginners to experienced dancers.",
  },
];

const FaqSection = () => {
  return (
    <section className="section bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_50%,#fbbf24,transparent)]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-zinc-400 leading-relaxed">
            Have questions about our performances, training programs, or booking process? Find answers to the most common questions about working with V.PAG Dance Company.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Accordion type="single" collapsible className="w-full grid md:grid-cols-2 gap-6">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="card border-zinc-800 hover:border-amber-400/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="w-full text-left font-semibold text-white hover:no-underline text-base p-6 hover:text-amber-400 transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-zinc-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-20">
          <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
            Still have questions? We're here to help!
          </p>
          <Link
            href="/contact"
            className="btn btn-primary text-lg px-8 py-4 h-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;