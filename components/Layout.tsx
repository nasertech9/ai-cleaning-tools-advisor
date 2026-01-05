
import React from 'react';
import { AppView } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: AppView;
  onNavigate: (view: AppView) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 glass border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl">
              ✨
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              CleanSmart AI
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <button 
              onClick={() => onNavigate('advisor')}
              className={`transition-colors ${currentView === 'advisor' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Advisor
            </button>
            <button 
              onClick={() => onNavigate('home')}
              className={`transition-colors ${currentView === 'home' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Categories
            </button>
            <button 
              onClick={() => onNavigate('safety')}
              className={`transition-colors ${currentView === 'safety' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Safety Guide 2026
            </button>
          </nav>
          <button className="md:hidden p-2 text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">
            © 2024 CleanSmart AI. Experts in dirt, masters of shine.
          </div>
          <div className="flex space-x-6 text-sm">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => onNavigate('safety')} className="hover:text-white transition-colors">Safety</button>
            <a href="#" className="hover:text-white transition-colors">Help</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
