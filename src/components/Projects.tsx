import { Leaf, Droplet, Pill, Microscope, ChevronRight, ExternalLink, Sparkles, CalendarDays } from 'lucide-react';

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

const secondIterationProjects: Project[] = [
  {
    id: "spring-1",
    title: "Project Sentinel",
    category: "AI-Guided Neurochemical Biosensing",
    description:
      "Project Sentinel closes the interpretability gap between protein language models and biosensor engineering. We use mechanistic interpretability on ESM-2 (activation patching and attribution) to identify model features tied to neurotransmitter binding, then redesign PBP sensors for molecules such as GABA, serotonin, and dopamine.",
    objectives: [
      "Map ESM-2 binding-relevant circuits for neurotransmitter functional group recognition",
      "Perform rational PBP binding pocket redesigns to improve ligand specificity in E. coli",
      "Integrate engineered PBPs with a chimeric two-component system to generate fluorescent or therapeutic outputs",
    ],
    impact:
      "Creates a closed-loop microbial sensing and response platform that is explainable, tunable, and robust in noisy gut-brain signaling environments.",
    status: "in-progress",
    icon: Microscope,
  },
  {
    id: "spring-2",
    title: "TARDIS - Tardigrade-Derived Radioprotection In Space",
    category: "Space Synthetic Biology",
    description:
      "TARDIS engineers a modular radioprotection system for microbes under space-like radiation by combining Dsup-mediated DNA shielding with enzyme and nanozyme antioxidant cascades that control radiation-generated reactive oxygen species.",
    objectives: [
      "Express and benchmark engineered Dsup variants in E. coli under radiation stress conditions",
      "Build minimal SOD-CAT-inspired antioxidant cascades using enzyme-only, nanozyme-only, and hybrid architectures",
      "Quantify DNA integrity, growth, and oxidative stress tolerance to identify the best cascade design",
    ],
    impact:
      "Establishes a space-relevant framework that addresses both direct DNA damage and indirect ROS-driven damage in engineered microbial systems.",
    status: "in-progress",
    icon: Pill,
  },
  {
    id: "spring-3",
    title: "MYRRH (Microbial Systems for Rare Earth Harvesting)",
    category: "Sustainable Materials Recovery",
    description:
      "MYRRH addresses the low global recycling rate of rare earth elements by engineering intracellular modules for selective REE capture and compartmentalization, enabling modular separation workflows in living cells.",
    objectives: [
      "Design modular intracellular compartments or binding systems with selective rare earth affinity",
      "Evaluate uptake, compartmentalization, and recovery efficiency across representative REEs",
      "Optimize a microbe-based separation workflow that supports cleaner materials recycling",
    ],
    impact:
      "Provides a biologically modular alternative to environmentally destructive extraction by enabling selective rare earth recovery and recycling.",
    status: "in-progress",
    icon: Leaf,
  },
];

export function Projects() {
  const getStatusBadge = (status: Project["status"]) => {
    const styles = {
      proposed: "bg-blue-50 text-blue-700 border border-blue-200",
      "in-progress": "bg-amber-50 text-amber-700 border border-amber-200",
      completed: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    };
    const labels = {
      proposed: "Proposed",
      "in-progress": "In Progress",
      completed: "Completed",
    };
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const renderProjectCard = (project: Project) => {
    const Icon = project.icon;
    return (
      <article
        key={project.id}
        className="group bg-white border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-5 gap-3">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Icon className="w-7 h-7 text-blue-700" />
          </div>
          {getStatusBadge(project.status)}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <div className="inline-flex text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-4">
          {project.category}
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Key Objectives:</h4>
          <ul className="space-y-2.5">
            {project.objectives.map((objective, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-600">
                <ChevronRight className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                <span className="text-sm">{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Potential Impact</h4>
          <p className="text-sm text-gray-700">{project.impact}</p>
        </div>
      </article>
    );
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-16 sm:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              2025-26 iGEM Season
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              2025-26 Season Project Pipeline
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
              Explore our innovative research directions addressing critical challenges in healthcare,
              sustainability, and biotechnology through synthetic biology.
            </p>
          </div>
        </div>
      </section>

      {/* Second Iteration */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Phase 2 · Spring 2026
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Spring 2026 Second Iteration Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These are the three main project proposals we are actively refining and building this spring.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {secondIterationProjects.map(renderProjectCard)}
          </div>
        </div>
      </section>

      {/* Phase 1 Proposals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold mb-4">
              <CalendarDays className="w-4 h-4" />
              Phase 1 · Fall 2025
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">2025 Fall Phase 1 Proposals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These are our initial Phase 1 proposal directions from Fall 2025.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {proposedProjects.map(renderProjectCard)}
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
