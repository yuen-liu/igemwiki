import { Check, DollarSign, Users, Briefcase, Building2, Mail } from 'lucide-react';

interface SponsorshipTier {
  name: string;
  amount: string;
  description: string;
  benefits: string[];
  icon: React.ElementType;
  color: string;
}

const sponsorshipTiers: SponsorshipTier[] = [
  {
    name: "Platinum",
    amount: "$5,000+",
    description: "Premier partnership with maximum visibility and engagement",
    icon: Building2,
    color: "from-slate-400 to-slate-600",
    benefits: [
      "Sponsor acknowledgement during Stage Presentation at 2026 Global Jamboree, seen live by 4600+ in-person attendees.",
      "Opportunity to provide promotional/recruitment material at our team booth, with foot traffic from hundreds of students.",
      "Designated as primary sponsor on all team deliverables, presentations, and promotional materials.",
      "Featured speaker slot at team events and private lab tour.",
      "Direct access to recruit top talent from our team.",
      "Quarterly research updates and progress reports.",
      "All benefits from Gold, Silver, and Bronze Sponsorship tiers.",
    ],
  },
  {
    name: "Gold",
    amount: "$2,500 - $4,999",
    description: "Significant support with extensive benefits and recognition",
    icon: Briefcase,
    color: "from-yellow-400 to-yellow-600",
    benefits: [
      "Sponsor Name and Logo on project promotional AND presentation video, seen virtually by thousands of iGEM affiliates.",
      "Keynote speaker invitation at Columbia University.",
      "Sponsorship acknowledgement on header of all social media platforms.",
      "Large logo placement on team website and wiki.",
      "Access to resume book of team members.",
      "Bi-annual research updates.",
      "All benefits from Silver and Bronze Sponsorship tiers.",
    ],
  },
  {
    name: "Silver",
    amount: "$1,000 - $2,499",
    description: "Valuable partnership supporting key research initiatives",
    icon: Users,
    color: "from-gray-300 to-gray-500",
    benefits: [
      "Sponsorship acknowledgement at all public/outreach events for the Columbia + Broader NYC Community.",
      "Sponsor Name and Logo on team poster, showcased in-person at 2026 Global Jamboree.",
      "Medium logo placement on website and wiki.",
      "Monthly team research summary report.",
      "All benefits from Bronze Sponsorship tier.",
    ],
  },
  {
    name: "Bronze",
    amount: "$500 - $999",
    description: "Essential support helping fund core research activities",
    icon: DollarSign,
    color: "from-orange-400 to-orange-600",
    benefits: [
      "Sponsor Name and Logo on Team Wiki.",
      "Sponsor Logo on Team Apparel, worn at 2026 Global Jamboree.",
      "Social media recognition across all platforms.",
    ],
  },
];

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
            <a
              href="mailto:columbiaigem@gmail.com"
              className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
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
            {[
              { icon: Users, title: "Access to Top Talent", text: "Connect with exceptional students from one of the world's leading universities" },
              { icon: Briefcase, title: "Brand Visibility", text: "Showcase your company at international competitions and academic events" },
              { icon: Building2, title: "Innovation Partnership", text: "Support cutting-edge research that could drive future breakthroughs" },
              { icon: DollarSign, title: "Tax Deductible", text: "Contributions are tax-deductible through Columbia University" },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{text}</p>
              </div>
            ))}
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
            {sponsorshipTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.name}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Custom Sponsorship Packages
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're happy to work with you to create a custom sponsorship package that meets your
              specific needs and objectives.
            </p>
            <a
              href="mailto:columbiaigem@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Discuss Custom Partnership
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
