import { Check, DollarSign, Users, Briefcase, Building2, Mail, Phone, Download } from 'lucide-react';

interface SponsorshipTier {
  name: string;
  amount: string;
  description: string;
  benefits: string[];
  icon: any;
  color: string;
}

const sponsorshipTiers: SponsorshipTier[] = [
  {
    name: "Platinum",
    amount: "$10,000+",
    description: "Premier partnership with maximum visibility and engagement",
    icon: Building2,
    color: "from-slate-400 to-slate-600",
    benefits: [
      "Exclusive naming rights for project or team initiative",
      "Logo featured prominently on all team materials and apparel",
      "Featured speaker slot at team events",
      "Private lab tour and research presentation",
      "Direct access to recruit top talent from our team",
      "Recognition at Grand Jamboree and on competition wiki",
      "Quarterly research updates and progress reports",
      "Social media recognition across all platforms",
      "Invitation to all team events and presentations",
    ],
  },
  {
    name: "Gold",
    amount: "$5,000 - $9,999",
    description: "Significant support with extensive benefits and recognition",
    icon: Briefcase,
    color: "from-yellow-400 to-yellow-600",
    benefits: [
      "Large logo placement on team website and wiki",
      "Logo on team apparel and presentation materials",
      "Lab tour and team meet-and-greet",
      "Access to resume book of team members",
      "Recognition at Grand Jamboree",
      "Bi-annual research updates",
      "Social media recognition",
      "Invitation to final presentation",
    ],
  },
  {
    name: "Silver",
    amount: "$2,500 - $4,999",
    description: "Valuable partnership supporting key research initiatives",
    icon: Users,
    color: "from-gray-300 to-gray-500",
    benefits: [
      "Medium logo placement on website and wiki",
      "Logo on select team materials",
      "Recognition at Grand Jamboree",
      "Team research summary report",
      "Social media recognition",
      "Invitation to final presentation",
    ],
  },
  {
    name: "Bronze",
    amount: "$1,000 - $2,499",
    description: "Essential support helping fund core research activities",
    icon: DollarSign,
    color: "from-orange-400 to-orange-600",
    benefits: [
      "Logo on team website",
      "Recognition at Grand Jamboree",
      "Listed on competition wiki",
      "Social media thank you",
    ],
  },
];

const budgetBreakdown = [
  { category: "Lab Materials & Reagents", amount: "$X,XXX", description: "DNA synthesis, enzymes, growth media, and consumables" },
  { category: "Equipment & Hardware", amount: "$X,XXX", description: "Specialized equipment and prototyping materials" },
  { category: "Competition Registration", amount: "$X,XXX", description: "Team registration fees and DNA distribution kit" },
  { category: "Travel & Accommodation", amount: "$XX,XXX", description: "Grand Jamboree travel for team members" },
  { category: "Wiki & Presentation", amount: "$X,XXX", description: "Design, video production, and presentation materials" },
  { category: "Outreach & Education", amount: "$X,XXX", description: "Community engagement and educational programs" },
  { category: "Contingency", amount: "$X,XXX", description: "Unexpected expenses and additional needs" },
];

const totalBudget = "$XX,XXX";

export function Sponsorship() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Sponsor Columbia iGEM
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Partner with us to support cutting-edge synthetic biology research and help develop 
              the next generation of scientists, engineers, and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:igem@columbia.edu"
                className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
              <button className="px-8 py-4 bg-blue-600/30 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-blue-600/50 transition-all border border-white/20 inline-flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Sponsor Us?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your investment in Columbia iGEM delivers tangible benefits while supporting 
              groundbreaking research and education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Access to Top Talent</h3>
              <p className="text-gray-600 text-sm">
                Connect with exceptional students from one of the world's leading universities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Brand Visibility</h3>
              <p className="text-gray-600 text-sm">
                Showcase your company at international competitions and academic events
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Innovation Partnership</h3>
              <p className="text-gray-600 text-sm">
                Support cutting-edge research that could drive future breakthroughs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tax Deductible</h3>
              <p className="text-gray-600 text-sm">
                Contributions are tax-deductible through Columbia University
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sponsorship Tiers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose a sponsorship level that aligns with your organization's goals and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sponsorshipTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-300 transition-all overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${tier.color} p-6 text-white`}>
                    <div className="flex items-center gap-4 mb-2">
                      <Icon className="w-8 h-8" />
                      <h3 className="text-2xl font-bold">{tier.name}</h3>
                    </div>
                    <div className="text-3xl font-bold mb-2">{tier.amount}</div>
                    <p className="text-white/90">{tier.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Benefits Include:</h4>
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Sponsorship Packages</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're happy to work with you to create a custom sponsorship package that meets your 
              specific needs and objectives. Contact us to discuss opportunities.
            </p>
            <a 
              href="mailto:igem@columbia.edu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Discuss Custom Partnership
            </a>
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Use Your Support</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every dollar goes directly toward funding our research and competition participation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-xl mb-8">
              <div className="text-center">
                <div className="text-lg text-blue-200 mb-2">2026 Total Budget</div>
                <div className="text-5xl font-bold">{totalBudget}</div>
              </div>
            </div>

            <div className="space-y-4">
              {budgetBreakdown.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg">{item.category}</h3>
                    <span className="text-xl font-bold text-blue-600">{item.amount}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're grateful to our sponsors who make our work possible.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400">Sponsor Logo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400">Sponsor Logo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400">Sponsor Logo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400">Sponsor Logo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Partner Together</h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to support the next generation of synthetic biology innovators? Get in touch 
              with our sponsorship team to discuss partnership opportunities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a 
                href="mailto:igem@columbia.edu"
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                <Mail className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                <div className="font-semibold mb-1">Email Us</div>
                <div className="text-blue-200 text-sm">igem@columbia.edu</div>
              </a>

              <a 
                href="tel:+12125551234"
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                <Phone className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                <div className="font-semibold mb-1">Call Us</div>
                <div className="text-blue-200 text-sm">(212) 555-1234</div>
              </a>
            </div>

            <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Full Sponsorship Prospectus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}