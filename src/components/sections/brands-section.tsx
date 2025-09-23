import Image from 'next/image';

const brands = [
  {
    name: 'PTV - Pakistan Television Corporation',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/ptv-logo-DSCn9cVs-9.png',
    alt: 'PTV - Pakistan Television Corporation Logo',
    width: 100,
    height: 100,
    filterClass: 'grayscale contrast-125 brightness-75',
  },
  {
    name: 'Haier Pakistan',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/haier-logo-CW-lRAlL-10.png',
    alt: 'Haier Pakistan Logo',
    width: 140,
    height: 30,
    filterClass: 'brightness-0 invert',
  },
  {
    name: 'Bata Pakistan',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/bata-logo-B7hHL-md-11.png',
    alt: 'Bata Pakistan Logo',
    width: 120,
    height: 25,
    filterClass: 'brightness-0 invert opacity-75',
  },
  {
    name: 'Atlas Honda',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/868cb7af-e9c9-4037-8fcb-8f15fbc2feb7-vpagpk-lovable-app/assets/images/atlas-honda-logo-BcDcKhQk-12.png',
    alt: 'Atlas Honda Logo',
    width: 120,
    height: 40,
    filterClass: 'grayscale brightness-50 contrast-150',
  },
  {
    name: 'Alhamra Arts Council',
    logo: null,
    alt: 'Alhamra Arts Council',
  },
  {
    name: 'Shalimar Cultural Festival',
    logo: null,
    alt: 'Shalimar Cultural Festival',
  },
];

const stats = [
  { value: '500+', label: 'Corporate Events' },
  { value: '50+', label: 'Brand Collaborations' },
  { value: '22+', label: 'Years of Excellence' },
];

const BrandsSection = () => {
  return (
    <section className="section bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_100%_50%,#000000,transparent)]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Trusted by{" "}
            <span className="gradient-text">Leading Brands</span>
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Over the years, we've had the privilege of working with prestigious organizations, bringing cultural performances to diverse audiences across Pakistan and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="card group cursor-pointer h-32 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {brand.logo ? (
                <>
                  <div className="flex-grow flex items-center justify-center w-full">
                    <Image
                      src={brand.logo}
                      alt={brand.alt}
                      width={brand.width}
                      height={brand.height}
                      className={`object-contain transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:scale-110 ${brand.filterClass}`}
                    />
                  </div>
                  <p className="text-sm text-zinc-500 mt-4 group-hover:text-amber-400 transition-colors duration-300 text-center">
                    {brand.name}
                  </p>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-base font-semibold text-zinc-400 group-hover:text-amber-400 transition-colors duration-300 text-center px-4">
                    {brand.name}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${(index + 6) * 0.1}s` }}
            >
              <p className="font-display text-5xl lg:text-6xl font-bold gradient-text mb-3 leading-none">
                {stat.value}
              </p>
              <p className="text-lg text-zinc-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;