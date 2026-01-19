import { Globe, Lightbulb, Award, BookOpen, FlaskConical, Users2 } from 'lucide-react';

export function AboutIGEM() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              What is iGEM?
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              The International Genetically Engineered Machine (iGEM) competition is the world's
              premier synthetic biology event, bringing together students from around the globe
              to solve real-world problems using biological engineering.
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
              {[
                { value: "350+", label: "Teams Annually" },
                { value: "6,000+", label: "Participants" },
                { value: "45+", label: "Countries" },
                { value: "20+", label: "Years Running" },
              ].map((stat) => (
                <div key={stat.label} className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-blue-700 mb-2">{stat.value}</div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              ))}
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
            {[
              { icon: Lightbulb, title: "1. Ideation", text: "Brainstorm real-world problems grounded in synthetic biology." },
              { icon: BookOpen, title: "2. Design", text: "Design genetic circuits using standardized biological parts." },
              { icon: FlaskConical, title: "3. Build & Test", text: "Construct and validate systems through experimentation." },
              { icon: Globe, title: "4. Human Practices", text: "Ensure ethical, safe, and socially responsible work." },
              { icon: Users2, title: "5. Present", text: "Share results through wikis, posters, and presentations." },
              { icon: Award, title: "6. Compete", text: "Earn medals and awards for innovation and impact." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
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
            {[
              { title: "BioBricks & Registry", text: "Standardized biological parts shared globally." },
              { title: "Wiki Documentation", text: "Open documentation of methods, results, and reflections." },
              { title: "Medals & Awards", text: "Recognition for excellence and innovation." },
              { title: "Collaboration", text: "A global, cooperative scientific community." },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-blue-700 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
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
              humanity's greatest challenges.
            </p>
            <p className="text-lg text-blue-200 leading-relaxed">
              iGEM participants are learning to responsibly design technologies that could reshape our future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
