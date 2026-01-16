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

interface Advisor {
  name: string;
  title: string;
  department: string;
  bio: string;
  email?: string;
  image?: string;
}

interface Mentor {
  name: string;
  title: string;
  department: string;
  bio: string;
  email?: string;
  image?: string;
}

// Example team data - easily extensible for future years
const teamData2026: TeamMember[] = [
  {
    name: "Bridget Liu",
    role: "Dry Lab Lead",
    major: "Computer Science and Biochemistry",
    year: "Sophomore",
    bio: "Bridget is a sophomore at Columbia College studying Computer Science and Biochemistry. She’s interested in the intersection of machine learning, proteins, and genomics. When she’s not hunched over her computer, she enjoys running, painting, and skiing.",
    email: "bgl2126@columbia.edu",
    github: "https://github.com/yuen-liu",
    linkedin: "#",
    image: "/photos/blank.png"
  },
  {
    name: "Hannah Moon",
    role: "Logistics Lead",
    major: "Chemical Engineering",
    year: "Sophomore",
    bio: "Hannah is a sophomore at Columbia SEAS studying Chemical Engineering. She’s interested in the intersection between synthetic biology and sustainable manufacturing, and she’s excited to serve as the team’s logistics lead this year! In her free time, she enjoys painting and creative writing. ",
    email: "hm3085@columbia.edu",
    linkedin: "#",
    image: "/photos/blank.png"
  },
  {
    name: "Yuna Stechert",
    role: "Wet Lab Lead",
    major: "Chemistry",
    year: "Sophomore",
    bio: "Yuna is a sophomore at Barnard College studying Chemistry on a Chemical Engineering track. She is passionate about synthetic biology applications for space systems, agriculture, and medicine, enjoying solutions oriented around biomimicry. Outside the lab, she loves botany, oil painting, and spending time with her corgi Juno.",
    email: "yfs2103@barnard.edu",
    linkedin: "#",
    image: "/photos/yuna.png"
  },
  {
    name: "Grace Cho",
    role: "Research Member",
    major: "Computer Science",
    year: "Freshman",
    bio: "Grace is a freshman at Columbia SEAS studying Computer Science. She is particularly interested in its applications to health and bioinformatics. This year, she is very excited to contribute to the iGem team’s dry lab. In her free time, she enjoys consuming sci-fi books/movies, baking, and scrapbooking.",
    email: "gjc2154@columbia.edu",
    image: "/photos/grace.png"
  },
  {
    name: "Cynthia Wen",
    role: "Research Member",
    major: "Materials Science",
    year: "Sophomore",
    bio: "Cynthia is a sophomore at Columbia SEAS studying materials science. She is interested in using AI/ML for materials discovery, as well as wearable technology for biomedical applications. In her free time, she enjoys reading, dancing, and travelling.",
    email: "cw3771@columbia.edu",
    linkedin: "#",
    image: "/photos/cynthia.png"
  },
  {
    name: "Davud Skenderi",
    role: "Research Member",
    major: "Biomedical Engineering",
    year: "Freshman",
    bio: "Davud is an undergraduate Biomedical Engineering major and Applied Mathematics minor at Columbia Engineering. When he's not heedlessly in his dorm reading, you can find him creating haphazard playlists or mixing bits of random languages into an abhorrent mess.",
    email: "dbs2192@columbia.edu",
    linkedin: "#",
    image: "/photos/davud.png"
  },
  {
    name: "Tressel Holton",
    role: "Research Member",
    major: "Neuroscience & Behavior",
    year: "Sophomore",
    bio: "Tressel is a sophomore at Columbia College majoring in Neuroscience & Behavior. He is fascinated by the applications of biotechnology in neurosurgery and by the ethical dilemmas underlying modern neurotech. He is proud to be working with the team's wet-lab and logistics divisions, and enjoys reading, running, and weightlifting during his free time.",
    email: "tjh2167@columbia.edu",
    linkedin: "#",
    image: "/photos/tressel.png"
  },
  {
    name: "[Team Member Name]",
    role: "Research Member",
    major: "[Major]",
    year: "[Year]",
    bio: "Brief bio describing research contributions and expertise.",
    email: "email@columbia.edu",
    image: "/photos/blank.png"
  },
  {
    name: "[Team Member Name]",
    role: "Research Member",
    major: "[Major]",
    year: "[Year]",
    bio: "Brief bio describing research contributions and expertise.",
    email: "email@columbia.edu",
    image: "/photos/blank.png"
  },
];

const advisors: Advisor[] = [
  {
    name: "Dr. Allie Obermeyer",
    title: "Faculty Advisor",
    department: "Chemical Engineering at Columbia University",
    bio: "Brief bio describing expertise and research focus in synthetic biology.",
    email: "aco2134@columbia.edu",
    image: "/photos/obermeyer.png"
  },
  {
    name: "Dr. Scott Banta",
    title: "Faculty Advisor",
    department: "Chemical Engineering at Columbia University",
    bio: "Brief bio describing technical expertise and mentorship areas.",
    email: "sbanta@columbia.edu",
    image: "/photos/banta.png"
  },
  {
    name: "Dr. Ruben Gonzalez",
    title: "Faculty Advisor",
    department: "Chemistry at Columbia University",
    bio: "Brief bio describing technical expertise and mentorship areas.",
    email: "rlg2118@columbia.edu",
    image: "/photos/blank.png"
  },
];

const mentors: Mentor[] = [
  {
    name: "Adit Anand",
    title: "Faculty Advisor",
    department: "Biomedical Informatics at Columbia University",
    bio: "Brief bio describing expertise and research focus in synthetic biology.",
    email: "ara2205@cumc.columbia.edu",
    image: "/photos/blank.png"
  },
  {
    name: "AJ Sillato",
    title: "Mentor",
    department: "Biochemistry at Columbia University",
    bio: "Brief bio describing technical expertise and mentorship areas.",
    email: "ars2373@columbia.edu",
    image: "/photos/blank.png"
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
                <div className="aspect-square h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-blue-600">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advisors.map((advisor, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center overflow-hidden">
                  {advisor.image ? (
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-blue-600">
                        {advisor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{advisor.name}</h3>
                  <div className="text-blue-600 font-medium mb-1">{advisor.title}</div>
                  <div className="text-sm text-gray-500 mb-3">{advisor.department}</div>
                  <p className="text-gray-600 text-sm mb-4">{advisor.bio}</p>
                  <div className="flex gap-2">
                    {advisor.email && (
                      <a 
                        href={`mailto:${advisor.email}`}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        title="Email"
                      >
                        <Mail className="w-4 h-4 text-gray-700" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mentors</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced researchers and industry professionals guiding our team's success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center overflow-hidden">
                  {mentor.image ? (
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-blue-600">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{mentor.name}</h3>
                  <div className="text-blue-600 font-medium mb-1">{mentor.title}</div>
                  <div className="text-sm text-gray-500 mb-3">{mentor.department}</div>
                  <p className="text-gray-600 text-sm mb-4">{mentor.bio}</p>
                  <div className="flex gap-2">
                    {mentor.email && (
                      <a 
                        href={`mailto:${mentor.email}`}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        title="Email"
                      >
                        <Mail className="w-4 h-4 text-gray-700" />
                      </a>
                    )}
                  </div>
                </div>
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