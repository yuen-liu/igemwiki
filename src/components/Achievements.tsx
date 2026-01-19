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

const achievements: Achievement[] = [
  {
    year: 2018,
    projectName: "Portable STI Diagnostic",
    projectDescription: "Portable test for chlamydia and gonorrhea.",
    medal: "Bronze",
    specialAwards: [],
    highlights: [],
    wikiUrl: "https://2018.igem.org/Team:ColumbiaNYC/Project",
    imageUrl: "https://static.igem.org/mediawiki/2018/8/8b/HQ_page_logo.jpg",
  },
  {
    year: 2017,
    projectName: "SilenshR",
    projectDescription:
      "Utilized recombinant E. coli to precisely infiltrate hypoxic tumor centers, releasing shRNA therapies that stop cancerous growth without harming healthy cells.",
    medal: "Silver",
    specialAwards: [],
    highlights: [],
    wikiUrl: "https://2017.igem.org/Team:ColumbiaNYC",
    imageUrl:
      "https://static.igem.org/mediawiki/2017/thumb/5/57/COLUMBIA2017_SLIDE7.png/800px-COLUMBIA2017_SLIDE7.png",
  },
  {
    year: 2016,
    projectName: "Mos(QUIT)o",
    projectDescription:
      "Engineered Pseudomanas putida to produce rhamnolipids, an effective repellent to disease-carrying mosquitoes.",
    medal: "Gold",
    specialAwards: [],
    highlights: [],
    wikiUrl: "https://2016.igem.org/Team:ColumbiaU_NYC",
    imageUrl: "https://static.igem.org/mediawiki/2016/c/c5/Mosquito.mp4",
  },
  {
    year: 2015,
    projectName: "Probiotic GLP-1 Delivery",
    projectDescription:
      "Engineered probiotic consortia for the non-invasive delivery of GLP-1, improving insulin release in patients with Type 2 Diabetes.",
    medal: "Silver",
    specialAwards: [],
    highlights: [],
    wikiUrl: "https://2015.igem.org/Team:Columbia_NYC",
    imageUrl: "https://static.igem.org/mediawiki/2015/c/cf/Columbia_NYC_Hippocrates.png",
  },
  {
    year: 2012,
    projectName: "Light-Sensitive Circuit Board Etching",
    projectDescription:
      "Engineered light sensitive Acidithiobacillus ferrooxidans to etch custom circuit boards.",
    medal: "Bronze",
    specialAwards: [],
    highlights: [],
    wikiUrl: "https://2012.igem.org/Team:Columbia-Cooper-NYC/Main",
    imageUrl:
      "http://farm9.staticflickr.com/8456/8049457082_5814030096_b.jpg",
  },
  {
    year: 2011,
    projectName: "Sustainable Quantum Dot Synthesis",
    projectDescription:
      "Engineering E. Coli for sustainable quantum dot synthesis.",
    medal: "Bronze",
    specialAwards: [],
    highlights: [],
    wikiUrl: "https://2011.igem.org/Team:Columbia-Cooper",
    imageUrl:
      "https://static.igem.org/mediawiki/2011/b/b6/BAC1andplasmid.png",
  },
];

const stats = [
  { label: "Years Competing", value: "6" },
  { label: "Medals", value: "6" },
  { label: "Projects Completed", value: "6" },
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
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Our Achievements
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              A legacy of excellence in synthetic biology research, with award-winning projects
              that have made real-world impact and advanced the field.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-bold text-blue-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Competition History
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each year, our team tackles new challenges and pushes the boundaries of synthetic biology.
            </p>
          </div>

          <div className="space-y-12">
            {achievements.map((achievement) => (
              <div
                key={achievement.year}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Media */}
                  <div className="relative h-64 lg:h-auto">
                    {achievement.imageUrl?.endsWith('.mp4') ? (
                      <video
                        src={achievement.imageUrl}
                        className="w-full h-full object-cover"
                        controls
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={achievement.imageUrl}
                        alt={achievement.projectName}
                        className="w-full h-full object-cover"
                      />
                    )}

                    <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow-md flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-600" />
                      <span className="font-semibold text-gray-900">
                        {achievement.year}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <div
                        className={`px-4 py-2 rounded-lg font-semibold border-2 ${getMedalColor(
                          achievement.medal
                        )}`}
                      >
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
