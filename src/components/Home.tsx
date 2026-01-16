import { ArrowRight, Dna, Users, Trophy, Target } from 'lucide-react';

type Page = 'home' | 'about' | 'team' | 'projects' | 'achievements' | 'sponsorship';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1614308459036-779d0dfe51ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHJlc2VhcmNofGVufDF8fHx8MTc2ODU2OTYxMnww&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-blue-600/30 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              Columbia University
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Engineering Biology for a Better Tomorrow
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
              We're Columbia's premier synthetic biology team, competing in the International Genetically Engineered Machine (iGEM) competition to solve real-world problems through innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('sponsorship')}
                className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Become a Sponsor
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-4 bg-blue-600/30 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-blue-600/50 transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Columbia iGEM, we harness the power of synthetic biology to address pressing global challenges. 
              Our multidisciplinary team of students designs, builds, and tests innovative biological solutions while 
              advancing scientific knowledge and fostering collaboration across disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Dna className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cutting-Edge Research</h3>
              <p className="text-gray-600">
                Pioneering synthetic biology projects that push the boundaries of what's possible.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diverse Team</h3>
              <p className="text-gray-600">
                Students from biology, engineering, business, and design working together.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Award-Winning</h3>
              <p className="text-gray-600">
                Recognized internationally for excellence in synthetic biology innovation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Impact</h3>
              <p className="text-gray-600">
                Solutions designed to address genuine environmental and healthcare challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Sponsor Columbia iGEM?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Your support empowers the next generation of scientists and innovators. Partner with us to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Support Groundbreaking Research</h4>
                    <p className="text-gray-600">Fund projects that could transform healthcare, sustainability, and biotechnology.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Connect with Top Talent</h4>
                    <p className="text-gray-600">Engage with brilliant students from one of the world's leading universities.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Gain Visibility</h4>
                    <p className="text-gray-600">Your brand showcased at international competitions and academic conferences.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Drive Innovation</h4>
                    <p className="text-gray-600">Help advance synthetic biology and contribute to scientific progress.</p>
                  </div>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('sponsorship')}
                className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2 group"
              >
                View Sponsorship Packages
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzY4NTA3Mzc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore Our Work</h2>
            <p className="text-xl text-blue-100">Discover what makes Columbia iGEM exceptional</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <button
              onClick={() => onNavigate('team')}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all border border-white/20 text-left group"
            >
              <Users className="w-10 h-10 mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Meet Our Team</h3>
              <p className="text-blue-100 mb-4">Get to know the talented students driving our research.</p>
              <span className="text-blue-300 flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            <button
              onClick={() => onNavigate('projects')}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all border border-white/20 text-left group"
            >
              <Dna className="w-10 h-10 mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Our Projects</h3>
              <p className="text-blue-100 mb-4">Explore our innovative research directions and proposals.</p>
              <span className="text-blue-300 flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            <button
              onClick={() => onNavigate('achievements')}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all border border-white/20 text-left group"
            >
              <Trophy className="w-10 h-10 mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Our Achievements</h3>
              <p className="text-blue-100 mb-4">View our award-winning projects and competition successes.</p>
              <span className="text-blue-300 flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
