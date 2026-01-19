import { Mail, Linkedin, Instagram, Twitter, ExternalLink } from 'lucide-react';

type Page = 'home' | 'about' | 'team' | 'projects' | 'achievements' | 'sponsorship';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/photos/logo.jpg" 
                alt="Columbia iGEM Logo" 
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="font-bold text-gray-800">Columbia iGEM</div>
                <div className="text-xs text-blue-500">Synthetic Biology</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Engineering biology for a better tomorrow through innovative research and collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleNavigate('about')}
                  className="hover:text-blue-400 transition-colors"
                >
                  About iGEM
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate('team')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate('projects')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate('achievements')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Achievements
                </button>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleNavigate('sponsorship')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Sponsor Us
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Join the Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Collaborate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Connect</h3>
            <div className="space-y-3 text-sm mb-4">
              <a 
                href="mailto:columbiaigem@gmail.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                columbiaigem@gmail.com
              </a>
              <a 
                href="https://igem.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                iGEM.org
              </a>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/company/columbia-igem"
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-gray-700" />
              </a>
              <a 
                href="https://www.instagram.com/columbiaigem"
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-700" />
              </a>
              <a 
                href=""
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-gray-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © {new Date().getFullYear()} Columbia University iGEM. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
