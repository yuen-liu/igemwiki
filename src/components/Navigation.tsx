import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'about' | 'team' | 'projects' | 'achievements' | 'sponsorship';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'about' as Page, label: 'About iGEM' },
    { id: 'team' as Page, label: 'Our Team' },
    { id: 'projects' as Page, label: 'Projects' },
    { id: 'achievements' as Page, label: 'Achievements' },
    { id: 'sponsorship' as Page, label: 'Sponsor Us' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3"
          >
            <img 
              src="/photos/logo.jpg" 
              alt="Columbia iGEM Logo" 
              className="h-10 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-gray-900">Columbia iGEM</div>
              <div className="text-xs text-gray-500">Synthetic Biology</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('sponsorship')}
              className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Support Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('sponsorship')}
              className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md text-base font-medium hover:bg-blue-700"
            >
              Support Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
