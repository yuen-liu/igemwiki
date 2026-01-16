import { useState } from 'react';
import { Home } from './components/Home';
import { AboutIGEM } from './components/AboutIGEM';
import { Team } from './components/Team';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Sponsorship } from './components/Sponsorship';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

type Page = 'home' | 'about' | 'team' | 'projects' | 'achievements' | 'sponsorship';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutIGEM />;
      case 'team':
        return <Team />;
      case 'projects':
        return <Projects />;
      case 'achievements':
        return <Achievements />;
      case 'sponsorship':
        return <Sponsorship />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
