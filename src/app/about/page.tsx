import Navigation from '@/components/sections/navigation'
import AboutSection from '@/components/sections/about-section'
import Footer from '@/components/sections/footer'
import { Calendar, Trophy, Users, Heart, MapPin, Clock, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navigation />
      
      {/* About Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-[var(--font-display)]">
            About <span className="text-[#F5C842]">V.PAG</span>
          </h1>
          <p className="text-xl text-[#B3B3B3] max-w-3xl mx-auto leading-relaxed">
            Discover the rich heritage and passionate artistry behind Pakistan's premier cultural dance company, 
            where tradition meets excellence in every performance.
          </p>
        </div>
      </section>

      {/* Existing About Section */}
      <AboutSection />

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 bg-[#2a2a2a]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 font-[var(--font-display)]">
              Our Mission & <span className="text-[#F5C842]">Vision</span>
            </h2>
            <p className="text-lg text-[#B3B3B3] max-w-3xl mx-auto">
              Preserving and promoting Pakistani cultural heritage through authentic dance performances
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-[#1a1a1a] p-10 rounded-2xl border border-[#404040] hover:border-[#F5C842] transition-all duration-300">
              <div className="w-16 h-16 bg-[#F5C842] rounded-full flex items-center justify-center mb-8">
                <Heart className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 font-[var(--font-display)]">Our Mission</h3>
              <p className="text-lg text-[#B3B3B3] leading-relaxed mb-6">
                To preserve, promote, and share the rich cultural heritage of Pakistan through authentic dance performances, 
                educational programs, and artistic excellence that bridges generations and cultures.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F5C842] mt-1 flex-shrink-0" />
                  <span className="text-[#B3B3B3]">Preserve traditional Pakistani dance forms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F5C842] mt-1 flex-shrink-0" />
                  <span className="text-[#B3B3B3]">Educate new generations about cultural heritage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F5C842] mt-1 flex-shrink-0" />
                  <span className="text-[#B3B3B3]">Bridge cultural divides through artistic expression</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] p-10 rounded-2xl border border-[#404040] hover:border-[#F5C842] transition-all duration-300">
              <div className="w-16 h-16 bg-[#F5C842] rounded-full flex items-center justify-center mb-8">
                <Trophy className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 font-[var(--font-display)]">Our Vision</h3>
              <p className="text-lg text-[#B3B3B3] leading-relaxed mb-6">
                To be recognized globally as the leading ambassador of Pakistani cultural arts, inspiring appreciation 
                for our heritage while setting new standards for artistic excellence and cultural education.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F5C842] mt-1 flex-shrink-0" />
                  <span className="text-[#B3B3B3]">Global recognition as cultural ambassadors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F5C842] mt-1 flex-shrink-0" />
                  <span className="text-[#B3B3B3]">Setting new standards in artistic excellence</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F5C842] mt-1 flex-shrink-0" />
                  <span className="text-[#B3B3B3]">Inspiring cultural pride across communities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 font-[var(--font-display)]">
              Meet Our <span className="text-[#F5C842]">Founder</span>
            </h2>
            <p className="text-lg text-[#B3B3B3] max-w-3xl mx-auto">
              The visionary behind V.PAG's cultural mission and artistic excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#2a2a2a] rounded-2xl p-12 border border-[#404040]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-full h-80 bg-gradient-to-br from-[#F5C842] to-[#FF6B35] rounded-2xl mb-6 flex items-center justify-center">
                  <Users className="w-24 h-24 text-[#1a1a1a]" />
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-4 font-[var(--font-display)]">
                  Master Performer & Cultural Expert
                </h3>
                <p className="text-lg text-[#B3B3B3] leading-relaxed mb-6">
                  With over two decades of experience in Pakistani cultural arts, our founder has dedicated their life 
                  to preserving and promoting the rich traditions of our heritage. Their vision transformed V.PAG from 
                  a local dance group into Pakistan's premier cultural institution.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F5C842] mb-2 font-[var(--font-display)]">22+</div>
                    <div className="text-sm text-[#808080]">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F5C842] mb-2 font-[var(--font-display)]">500+</div>
                    <div className="text-sm text-[#808080]">Performances</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-[#F5C842]" />
                    <span className="text-[#B3B3B3]">National Cultural Arts Award Winner</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#F5C842]" />
                    <span className="text-[#B3B3B3]">Trained 200+ Professional Dancers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#F5C842]" />
                    <span className="text-[#B3B3B3]">International Cultural Ambassador</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-20 px-6 bg-[#2a2a2a]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 font-[var(--font-display)]">
              Our <span className="text-[#F5C842]">Journey</span>
            </h2>
            <p className="text-lg text-[#B3B3B3] max-w-3xl mx-auto">
              From humble beginnings to becoming Pakistan's premier cultural dance company
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#F5C842] rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-[#1a1a1a]" />
                  </div>
                </div>
                <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#404040] flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-bold text-[#F5C842] font-[var(--font-display)]">2001</span>
                    <div className="h-px bg-[#404040] flex-1"></div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 font-[var(--font-display)]">Foundation & Early Years</h4>
                  <p className="text-[#B3B3B3] leading-relaxed">
                    V.PAG was founded with a vision to preserve and promote Pakistani cultural heritage through authentic dance. 
                    Started with a small group of passionate artists in Lahore, focusing on traditional Sufi and folk dance forms.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#F5C842] rounded-full flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-[#1a1a1a]" />
                  </div>
                </div>
                <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#404040] flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-bold text-[#F5C842] font-[var(--font-display)]">2008</span>
                    <div className="h-px bg-[#404040] flex-1"></div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 font-[var(--font-display)]">Recognition & Awards</h4>
                  <p className="text-[#B3B3B3] leading-relaxed">
                    Received national recognition for cultural preservation efforts. Won multiple awards for outstanding 
                    contributions to Pakistani arts and began performing at major cultural festivals across the country.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#F5C842] rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-[#1a1a1a]" />
                  </div>
                </div>
                <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#404040] flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-bold text-[#F5C842] font-[var(--font-display)]">2015</span>
                    <div className="h-px bg-[#404040] flex-1"></div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 font-[var(--font-display)]">Growth & Expansion</h4>
                  <p className="text-[#B3B3B3] leading-relaxed">
                    Expanded operations to include professional dance training programs. Established partnerships with 
                    leading brands and cultural institutions, growing our team to over 50 professional artists.
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#F5C842] rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-[#1a1a1a]" />
                  </div>
                </div>
                <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#404040] flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-bold text-[#F5C842] font-[var(--font-display)]">2023</span>
                    <div className="h-px bg-[#404040] flex-1"></div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 font-[var(--font-display)]">Present Day Excellence</h4>
                  <p className="text-[#B3B3B3] leading-relaxed">
                    Today, V.PAG stands as Pakistan's premier cultural dance company with over 1,100 successful performances, 
                    international recognition, and a legacy of preserving Pakistani heritage for future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 font-[var(--font-display)]">
              Awards & <span className="text-[#F5C842]">Recognition</span>
            </h2>
            <p className="text-lg text-[#B3B3B3] max-w-3xl mx-auto">
              Our commitment to cultural excellence has been recognized by prestigious institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#2a2a2a] p-8 rounded-2xl border border-[#404040] text-center hover:border-[#F5C842] transition-all duration-300">
              <div className="w-16 h-16 bg-[#F5C842] rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 font-[var(--font-display)]">National Cultural Arts Award</h4>
              <p className="text-[#B3B3B3] mb-2">Government of Pakistan</p>
              <p className="text-sm text-[#808080]">2019</p>
            </div>

            <div className="bg-[#2a2a2a] p-8 rounded-2xl border border-[#404040] text-center hover:border-[#F5C842] transition-all duration-300">
              <div className="w-16 h-16 bg-[#F5C842] rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 font-[var(--font-display)]">Excellence in Cultural Preservation</h4>
              <p className="text-[#B3B3B3] mb-2">UNESCO Pakistan</p>
              <p className="text-sm text-[#808080]">2020</p>
            </div>

            <div className="bg-[#2a2a2a] p-8 rounded-2xl border border-[#404040] text-center hover:border-[#F5C842] transition-all duration-300">
              <div className="w-16 h-16 bg-[#F5C842] rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 font-[var(--font-display)]">Best Cultural Performance</h4>
              <p className="text-[#B3B3B3] mb-2">Pakistan Arts Council</p>
              <p className="text-sm text-[#808080]">2021</p>
            </div>

            <div className="bg-[#2a2a2a] p-8 rounded-2xl border border-[#404040] text-center hover:border-[#F5C842] transition-all duration-300">
              <div className="w-16 h-16 bg-[#F5C842] rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 font-[var(--font-display)]">Cultural Ambassador Award</h4>
              <p className="text-[#B3B3B3] mb-2">Ministry of Culture</p>
              <p className="text-sm text-[#808080]">2022</p>
            </div>

            <div className="bg-[#2a2a2a] p-8 rounded-2xl border border-[#404040] text-center hover:border-[#F5C842] transition-all duration-300">
              <div className="w-16 h-16 bg-[#F5C842] rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 font-[var(--font-display)]">Lifetime Achievement</h4>
              <p className="text-[#B3B3B3] mb-2">Pakistan Cultural Society</p>
              <p className="text-sm text-[#808080]">2023</p>
            </div>

            <div className="bg-[#2a2a2a] p-8 rounded-2xl border border-[#404040] text-center hover:border-[#F5C842] transition-all duration-300">
              <div className="w-16 h-16 bg-[#F5C842] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 font-[var(--font-display)]">Community Impact Award</h4>
              <p className="text-[#B3B3B3] mb-2">Lahore Arts Foundation</p>
              <p className="text-sm text-[#808080]">2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#F5C842] to-[#FF6B35]">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-[#1a1a1a] mb-6 font-[var(--font-display)]">
            Ready to Experience Our Heritage?
          </h2>
          <p className="text-xl text-[#1a1a1a] mb-10 max-w-3xl mx-auto opacity-90">
            Join us in celebrating and preserving Pakistani cultural traditions through the power of authentic dance performances.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-[#1a1a1a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a2a2a] transition-all duration-300 transform hover:scale-105">
              Book Performance
            </button>
            <button className="border-2 border-[#1a1a1a] text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold hover:bg-[#1a1a1a] hover:text-white transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}