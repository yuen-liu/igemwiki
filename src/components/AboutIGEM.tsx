import { Globe, Lightbulb, Award, BookOpen, FlaskConical, Users2 } from 'lucide-react';

export function AboutIGEM() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              What is iGEM?
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              The International Genetically Engineered Machine (iGEM) competition is the world's premier 
              synthetic biology event, bringing together students from around the globe to solve real-world 
              problems using biological engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Global Movement in Synthetic Biology
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2003 at MIT, iGEM has grown into the largest synthetic biology competition 
                  in the world, with over 6,000 participants from 350+ teams across 45+ countries annually.
                </p>
                <p>
                  Teams spend months designing and implementing innovative biological systems, from 
                  environmental sensors to novel therapeutics, while learning to navigate the ethical, 
                  safety, and societal implications of their work.
                </p>
                <p>
                  The competition culminates in the annual Grand Jamboree, where teams present their 
                  projects to judges, peers, and industry leaders, competing for medals and special awards.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">350+</div>
                <div className="text-gray-700">Teams Annually</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">6,000+</div>
                <div className="text-gray-700">Participants</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">45+</div>
                <div className="text-gray-700">Countries</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-700">Years Running</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How iGEM Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From ideation to implementation, teams follow a structured process to bring their 
              synthetic biology projects to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Ideation</h3>
              <p className="text-gray-600">
                Teams brainstorm project ideas addressing real-world challenges in health, 
                environment, or industry, grounded in synthetic biology principles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Design</h3>
              <p className="text-gray-600">
                Using BioBricks (standardized DNA parts), teams design genetic circuits and 
                biological systems to achieve their project goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Build & Test</h3>
              <p className="text-gray-600">
                Teams construct their designs in the lab, conducting experiments to validate 
                functionality and optimize performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Human Practices</h3>
              <p className="text-gray-600">
                Engage with stakeholders, experts, and communities to ensure projects are 
                ethical, safe, and beneficial to society.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Present</h3>
              <p className="text-gray-600">
                Teams create wikis, posters, and presentations to share their work at the 
                Grand Jamboree with the global iGEM community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Compete</h3>
              <p className="text-gray-600">
                Projects are judged on innovation, impact, and execution, with teams earning 
                bronze, silver, gold medals, and special awards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Key Competition Components
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">BioBricks & Registry</h3>
              <p className="text-gray-600">
                Teams use standardized biological parts (BioBricks) from the Registry of Standard 
                Biological Parts, and contribute their own novel parts back to the community for 
                future teams to use.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Wiki Documentation</h3>
              <p className="text-gray-600">
                Every team creates a comprehensive wiki documenting their project journey, 
                experimental protocols, results, and reflections—serving as both a project record 
                and a knowledge-sharing resource.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Medals & Awards</h3>
              <p className="text-gray-600">
                Teams achieve bronze, silver, or gold medals by meeting specific criteria. Special 
                awards recognize excellence in categories like best model, best hardware, and best 
                educational outreach.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                iGEM emphasizes collaboration over pure competition. Teams work together, share 
                resources, and build a supportive global community advancing synthetic biology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Synthetic Biology */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Synthetic Biology Matters</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Synthetic biology combines engineering principles with biological systems to solve 
              some of humanity's greatest challenges—from developing sustainable biofuels and 
              biodegradable plastics to creating novel diagnostics and therapeutics for disease.
            </p>
            <p className="text-lg text-blue-200 leading-relaxed">
              iGEM participants are at the forefront of this revolution, learning to responsibly 
              design, build, and deploy biological technologies that could reshape our future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
