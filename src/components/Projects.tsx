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

const proposedProjects: Project[] = [
  {
    id: "project-1",
    title: "Toxic Metabolite Interference",
    category: "Biomanufacturing & Sensing",
    description:
      "A system using NCCs and CRISPR interference to detect and degrade cytotoxic metabolic byproducts that occur during drug synthesis in E. coli.",
    objectives: [
      "Engineer E. coli to detect specific toxic metabolites using NCC biosensors",
      "Implement CRISPR interference or catalytic degradation pathways to eliminate toxins",
      "Validate the system's ability to improve cell viability during drug synthesis",
    ],
    impact:
      "Improves the yield and safety of biopharmaceutical manufacturing by preventing the accumulation of toxic byproducts.",
    status: "proposed",
    icon: Microscope,
  },
  {
    id: "project-2",
    title: "Bio-Voltaic Copper Recovery",
    category: "Environment & Energy",
    description:
      "Coupling enzymatic redox reactions to electrodes to oxidize iron for copper extraction, potentially generating bio-electricity in the process.",
    objectives: [
      "Develop an enzyme-electrode interface to measure enzymatic reactions directly",
      "Engineer pathways to oxidize iron to facilitate copper recovery from ore",
      "Prototype a biological resistor or fuel cell capable of information storage",
    ],
    impact:
      "Offers a sustainable alternative to traditional mining practices and engages mining communities with biodegradable bio-circuitry.",
    status: "proposed",
    icon: Leaf,
  },
  {
    id: "project-3",
    title: "Engineered Substrate Channeling",
    category: "Foundational Advance",
    description:
      "Designing artificial 'protein highways' and intramolecular tunnels to direct substrates between enzyme active sites, mimicking natural metabolons.",
    objectives: [
      "Design intramolecular tunnels or charged patches to guide intermediate diffusion",
      "Colocalize enzymes to specific compartments to form synthetic metabolons",
      "Quantify improvements in reaction flux and reduction of intermediate loss",
    ],
    impact:
      "Increases the efficiency of complex synthetic metabolic pathways by preventing the loss or degradation of reaction intermediates.",
    status: "proposed",
    icon: Droplet,
  },
  {
    id: "project-4",
    title: "Modular Intracellular Delivery Toolkit",
    category: "Therapeutics & Drug Delivery",
    description:
      "A 'plug-and-play' library of genetically engineered tags (CPPs, pH-triggers) fused to protein therapeutics to facilitate uptake and endosomal escape.",
    objectives: [
      "Create a library of fusion tags including CPPs and pH-triggered domains",
      "Screen for endosomal escape efficiency and cytosolic delivery in mammalian cells",
      "Demonstrate retention of protein function after intracellular delivery",
    ],
    impact:
      "Solves the endosomal trapping bottleneck for protein therapeutics, enabling new treatments for intracellular targets.",
    status: "proposed",
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
      {/* Hero — dark blue to match footer */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-16 sm:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
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
                          <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span className="text-sm">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Potential Impact</h4>
                    <p className="text-sm text-gray-700">{project.impact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA — unchanged, already correct */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Support Our Research</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Your sponsorship directly funds our research and enables us to bring these projects to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              View Sponsorship Opportunities
            </button>
            <button className="px-8 py-4 bg-blue-600/30 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-blue-600/50 transition-all border border-white/20 flex items-center gap-2">
              View Past Projects
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
