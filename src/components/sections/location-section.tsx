import React from 'react';

const LocationSection = () => {
  return (
    <section className="section bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden" role="region" aria-labelledby="location-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#000000,transparent)]"></div>
      </div>
      
      <div className="container text-center relative z-10">
        <h2 
          id="location-heading" 
          className="font-display text-4xl md:text-6xl font-bold leading-tight mb-8"
        >
          Visit Our{" "}
          <span className="gradient-text">Studio Location</span>
        </h2>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
          Located in the heart of Lahore, Punjab - Come experience authentic Pakistani
          cultural dance in our state-of-the-art studio facility.
        </p>
        
        <div className="mt-12 p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 max-w-2xl mx-auto backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl">📍</span>
            <h3 className="text-xl font-semibold text-amber-400">Studio Address</h3>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Experience world-class dance training and witness authentic cultural performances
            at our premier facility in Pakistan's cultural capital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;