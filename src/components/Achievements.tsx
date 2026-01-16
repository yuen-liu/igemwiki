import { Trophy, Award, ExternalLink, Calendar, Medal } from 'lucide-react';

interface Achievement {
  year: number;
  projectName: string;
  projectDescription: string;
  medal: 'Gold' | 'Silver' | 'Bronze';
  specialAwards: string[];
  highlights: string[];
  wikiUrl?: string;
  imageUrl?: string;
}

// Example past achievements - easily extensible for each year
const achievements: Achievement[] = [
  {
    year: 2025,
    projectName: "[Project Name]",
    projectDescription: "Brief description of the project, its goals, and the biological systems developed to address a specific challenge.",
    medal: "Gold",
    specialAwards: [
      "[Award Category]",
      "[Award Category]",
      "[Award Category]",
    ],
    highlights: [
      "Key achievement or metric demonstrating project success",
      "Important partnership or collaboration during the project",
      "Publication or dissemination of research findings",
      "Real-world deployment or pilot testing of the solution",
    ],
    wikiUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1592413710694-d7837cbdacc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkbmElMjBzeW50aGV0aWMlMjBiaW9sb2d5fGVufDF8fHx8MTc2ODU4MjQ0NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    year: 2024,
    projectName: "[Project Name]",
    projectDescription: "Brief description of the project, its goals, and the biological systems developed to address a specific challenge.",
    medal: "Gold",
    specialAwards: [
      "[Award Category]",
      "[Award Category]",
    ],
    highlights: [
      "Key achievement or metric demonstrating project success",
      "Important partnership or collaboration during the project",
      "Development of protocols or methodologies",
      "Community engagement or educational outreach",
    ],
    wikiUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1614308459036-779d0dfe51ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHJlc2VhcmNofGVufDF8fHx8MTc2ODU2OTYxMnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    year: 2023,
    projectName: "[Project Name]",
    projectDescription: "Brief description of the project, its goals, and the biological systems developed to address a specific challenge.",
    medal: "Silver",
    specialAwards: [
      "[Award Category]",
    ],
    highlights: [
      "Key achievement or metric demonstrating project success",
      "Performance improvement or optimization achieved",
      "Field testing or validation in real-world settings",
      "Design innovations for accessibility or scalability",
    ],
    wikiUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1614308457932-e16d85c5d053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3Njb3BlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3Njg1ODI0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const stats = [
  { label: "Years Competing", value: "X+" },
  { label: "Gold Medals", value: "X" },
  { label: "Special Awards", value: "X" },
  { label: "Projects Completed", value: "X" },
];

export function Achievements() {
  const getMedalColor = (medal: string) => {
    switch (medal) {
      case 'Gold':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Silver':
        return 'bg-gray-100 text-gray-700 border-gray-300';
      case 'Bronze':
        return 'bg-orange-100 text-orange-700 border-orange-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Our Achievements
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              A legacy of excellence in synthetic biology research, with award-winning projects 
              that have made real-world impact and advanced the field.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline of Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Competition History</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each year, our team tackles new challenges and pushes the boundaries of synthetic biology.
            </p>
          </div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={achievement.imageUrl}
                      alt={achievement.projectName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-md">
                        <Calendar className="w-4 h-4 text-gray-600" />
                        <span className="font-semibold text-gray-900">{achievement.year}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className={`px-4 py-2 rounded-lg font-semibold border-2 ${getMedalColor(achievement.medal)}`}>
                        <div className="flex items-center gap-2">
                          <Medal className="w-5 h-5" />
                          {achievement.medal} Medal
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {achievement.projectName}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {achievement.projectDescription}
                    </p>

                    {/* Special Awards */}
                    {achievement.specialAwards.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-blue-600" />
                          Special Awards
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {achievement.specialAwards.map((award, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                            >
                              {award}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-blue-600" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {achievement.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Wiki Link */}
                    {achievement.wikiUrl && (
                      <a 
                        href={achievement.wikiUrl}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        View Full Wiki
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real-World Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our projects don't end at the competition—many have led to continued research, 
              publications, and real-world applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">X</div>
              <div className="font-semibold text-gray-900 mb-2">Peer-Reviewed Publications</div>
              <p className="text-gray-600 text-sm">
                Research from our projects published in scientific journals
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">X</div>
              <div className="font-semibold text-gray-900 mb-2">Community Partnerships</div>
              <p className="text-gray-600 text-sm">
                Collaborations with organizations to deploy our solutions
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">X+</div>
              <div className="font-semibold text-gray-900 mb-2">BioBricks Contributed</div>
              <p className="text-gray-600 text-sm">
                Novel genetic parts added to the iGEM Registry for future teams
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Help Us Achieve More</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            With your support, we can continue to develop innovative solutions and compete at 
            the highest level of synthetic biology research.
          </p>
          <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Support Our 2026 Team
          </button>
        </div>
      </section>
    </div>
  );
}