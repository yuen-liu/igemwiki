import { Leaf, Droplet, Pill, Microscope, ChevronRight, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  objectives: string[];
  impact: string;
  status: 'proposed' | 'in-progress' | 'completed';
  icon: any;
}

// Example proposed projects - easily extensible
const proposedProjects: Project[] = [
  {
    id: "project-1",
    title: "[Project Title]",
    category: "[Category Area]",
    description: "Brief description of the proposed project focusing on a specific challenge in synthetic biology and its potential application.",
    objectives: [
      "Primary research objective describing the main biological system or mechanism",
      "Secondary objective related to implementation or validation approach",
      "Testing and optimization objective for the proposed system",
    ],
    impact: "Description of the potential real-world impact and beneficiaries of this project.",
    status: "proposed",
    icon: Microscope,
  },
  {
    id: "project-2",
    title: "[Project Title]",
    category: "[Category Area]",
    description: "Brief description of the proposed project focusing on a specific challenge in synthetic biology and its potential application.",
    objectives: [
      "Primary research objective describing the main biological system or mechanism",
      "Secondary objective related to implementation or validation approach",
      "Testing and optimization objective for the proposed system",
    ],
    impact: "Description of the potential real-world impact and beneficiaries of this project.",
    status: "proposed",
    icon: Leaf,
  },
  {
    id: "project-3",
    title: "[Project Title]",
    category: "[Category Area]",
    description: "Brief description of the proposed project focusing on a specific challenge in synthetic biology and its potential application.",
    objectives: [
      "Primary research objective describing the main biological system or mechanism",
      "Secondary objective related to implementation or validation approach",
      "Testing and optimization objective for the proposed system",
    ],
    impact: "Description of the potential real-world impact and beneficiaries of this project.",
    status: "proposed",
    icon: Droplet,
  },
  {
    id: "project-4",
    title: "[Project Title]",
    category: "[Category Area]",
    description: "Brief description of the proposed project focusing on a specific challenge in synthetic biology and its potential application.",
    objectives: [
      "Primary research objective describing the main biological system or mechanism",
      "Secondary objective related to implementation or validation approach",
      "Testing and optimization objective for the proposed system",
    ],
    impact: "Description of the potential real-world impact and beneficiaries of this project.",
    status: "in-progress",
    icon: Pill,
  },
];

export function Projects() {
  const getStatusBadge = (status: string) => {
    const styles = {
      proposed: "bg-blue-100 text-blue-700",
      "in-progress": "bg-yellow-100 text-yellow-700",
      completed: "bg-green-100 text-green-700",
    };
    const labels = {
      proposed: "Proposed",
      "in-progress": "In Progress",
      completed: "Completed",
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Explore our innovative research directions addressing critical challenges in healthcare, 
              sustainability, and biotechnology through synthetic biology.
            </p>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">2026 Project Pipeline</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team is developing multiple project proposals, with final selection based on 
              feasibility, impact, and available resources.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {proposedProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div 
                  key={project.id}
                  className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    {getStatusBadge(project.status)}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="text-sm font-medium text-blue-600 mb-4">{project.category}</div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Objectives:</h4>
                    <ul className="space-y-2">
                      {project.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Potential Impact:</h4>
                    <p className="text-sm text-gray-700">{project.impact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Research Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We concentrate our efforts in domains where synthetic biology can make transformative impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Environmental Solutions</h3>
              <p className="text-gray-600 mb-4">
                Developing biological systems to address pollution, climate change, and resource scarcity.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Plastic degradation</li>
                <li>• Carbon capture</li>
                <li>• Bioremediation</li>
                <li>• Sustainable materials</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Pill className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare Innovation</h3>
              <p className="text-gray-600 mb-4">
                Creating novel diagnostics, therapeutics, and medical technologies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Point-of-care diagnostics</li>
                <li>• Targeted therapies</li>
                <li>• Biosensors</li>
                <li>• Infection prevention</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Microscope className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Foundational Research</h3>
              <p className="text-gray-600 mb-4">
                Advancing basic science and developing new tools for the synthetic biology community.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• New BioBricks</li>
                <li>• Genetic circuits</li>
                <li>• Modeling tools</li>
                <li>• Characterization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Development Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Project Development Process
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ideation & Research</h3>
                  <p className="text-gray-600">
                    Team members propose ideas based on real-world problems. We research existing 
                    solutions, identify gaps, and assess feasibility.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Stakeholder Engagement</h3>
                  <p className="text-gray-600">
                    We consult with experts, potential users, and affected communities to ensure 
                    our project addresses genuine needs responsibly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Design & Modeling</h3>
                  <p className="text-gray-600">
                    Using computational tools, we design genetic circuits, predict behaviors, and 
                    optimize our approach before entering the lab.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Experimental Validation</h3>
                  <p className="text-gray-600">
                    We build and test our designs iteratively, collecting data to validate 
                    functionality and guide improvements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation & Sharing</h3>
                  <p className="text-gray-600">
                    We thoroughly document our work, contribute parts to the iGEM Registry, and 
                    share findings with the global community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Support Our Research</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Your sponsorship directly funds our research, enabling us to purchase materials, 
            access lab facilities, and bring our innovative projects to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              View Sponsorship Opportunities
            </button>
            <button className="px-8 py-4 bg-blue-600/30 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-blue-600/50 transition-all border border-white/20 flex items-center justify-center gap-2">
              View Past Projects
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}