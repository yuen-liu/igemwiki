import { Mail, Linkedin, Github } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  major: string;
  year: string;
  bio: string;
  email?: string;
  linkedin?: string;
  github?: string;
  image?: string;
}

// Example team data - easily extensible for future years
const teamData2026: TeamMember[] = [
  {
    name: "[Team Lead Name]",
    role: "Team Lead",
    major: "[Major]",
    year: "[Year]",
    bio: "Brief bio describing role and passion for synthetic biology research.",
    email: "email@columbia.edu",
    linkedin: "#",
  },
  {
    name: "[Wet Lab Lead Name]",
    role: "Wet Lab Lead",
    major: "[Major]",
    year: "[Year]",
    bio: "Brief bio describing wet lab coordination and experimental focus.",
    email: "email@columbia.edu",
    github: "#",
  },
  {
    name: "[Dry Lab Lead Name]",
    role: "Dry Lab Lead",
    major: "[Major]",
    year: "[Year]",
    bio: "Brief bio describing computational modeling and simulation work.",
    email: "email@columbia.edu",
    linkedin: "#",
  },
  {
    name: "[Human Practices Lead Name]",
    role: "Human Practices Lead",
    major: "[Major]",
    year: "[Year]",
    bio: "Brief bio describing stakeholder engagement and impact assessment.",
    email: "email@columbia.edu",
  },
  {
    name: "[Design Lead Name]",
    role: "Design & Wiki Lead",
    major: "[Major]",
    year: "[Year]",
    bio: "Brief bio describing design work and science communication efforts.",
    email: "email@columbia.edu",
    linkedin: "#",
  },
  {
    name: "[Finance Lead Name]",
    role: "Finance Lead",
    major: "[Major]",
    year: "[Year]",
    bio: "Brief bio describing budget management and fundraising coordination.",
    email: "email@columbia.edu",
  },
  {
    name: "[Team Member Name]",
    role: "Research Member",
    major: "[Major]",
    year: "[Year]",
    bio: "Brief bio describing research contributions and expertise.",
    email: "email@columbia.edu",
  },
  {
    name: "[Team Member Name]",
    role: "Research Member",
    major: "[Major]",
    year: "[Year]",
    bio: "Brief bio describing research contributions and expertise.",
    email: "email@columbia.edu",
  },
  {
    name: "[Team Member Name]",
    role: "Research Member",
    major: "[Major]",
    year: "[Year]",
    bio: "Brief bio describing research contributions and expertise.",
    email: "email@columbia.edu",
  },
];

const advisors = [
  {
    name: "[Advisor Name]",
    title: "Faculty Advisor",
    department: "[Department]",
    bio: "Brief bio describing expertise and research focus in synthetic biology.",
  },
  {
    name: "[Advisor Name]",
    title: "Technical Advisor",
    department: "[Department]",
    bio: "Brief bio describing technical expertise and mentorship areas.",
  },
];

export function Team() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              A diverse group of passionate students from across Columbia University, united by 
              our commitment to advancing synthetic biology and making a positive impact on the world.
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Class of 2026 Team</h2>
            <p className="text-lg text-gray-600">
              Our multidisciplinary team brings together expertise from biology, engineering, 
              computer science, design, and business to tackle complex challenges in synthetic biology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData2026.map((member, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-blue-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-1">{member.role}</div>
                  <div className="text-sm text-gray-500 mb-3">
                    {member.major} • {member.year}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-2">
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        title="Email"
                      >
                        <Mail className="w-4 h-4 text-gray-700" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4 text-gray-700" />
                      </a>
                    )}
                    {member.github && (
                      <a 
                        href={member.github}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-4 h-4 text-gray-700" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Advisors</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              World-class faculty members providing guidance and mentorship throughout our journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-white">
                      {advisor.name.split(' ')[1][0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{advisor.name}</h3>
                    <div className="text-blue-600 font-medium">{advisor.title}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-3">{advisor.department}</div>
                <p className="text-gray-600">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're always looking for passionate students to join Columbia iGEM. Whether you're 
            interested in wet lab, dry lab, design, outreach, or business, there's a place for you.
          </p>
          <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Learn About Recruitment
          </button>
        </div>
      </section>
    </div>
  );
}