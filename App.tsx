
import React, { useState, useRef, useEffect } from 'react';
import Layout from './components/Layout';
import ChatInterface from './components/ChatInterface';
import { CATEGORIES } from './constants';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const categoriesRef = useRef<HTMLElement>(null);

  const handleNavigate = (view: AppView) => {
    setCurrentView(view);
    if (view === 'home') {
      // Small delay to ensure the DOM is rendered if we were in another view
      setTimeout(() => {
        categoriesRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderHome = () => (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Master Your Mess with <span className="text-blue-600">Smart AI</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Get professional cleaning advice tailored to your specific surfaces and stains. 
          We suggest the perfect tools, products, and techniques using real-time expert data.
        </p>
        <div className="pt-4">
          <button 
            onClick={() => handleNavigate('advisor')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 mx-auto"
          >
            <span>Ask the Advisor</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </section>

      {/* Categories Grid */}
      <section ref={categoriesRef} className="space-y-8 scroll-mt-20">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Explore by Room</h3>
            <p className="text-slate-500">Targeted solutions for every corner of your home.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
              onClick={() => handleNavigate('advisor')}
            >
              <div className="flex items-center space-x-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">{cat.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-800">{cat.label}</h4>
                  <p className="text-sm text-slate-500">{cat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="grid md:grid-cols-3 gap-8 pt-8">
        <div className="bg-blue-50 p-8 rounded-3xl space-y-4">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-blue-900">Smart Search</h4>
          <p className="text-blue-800/70 text-sm">Our AI uses Google Search grounding to find real, tested products and current ratings.</p>
        </div>
        <div className="bg-teal-50 p-8 rounded-3xl space-y-4">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-teal-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-teal-900">Safety First</h4>
          <p className="text-teal-800/70 text-sm">Automated chemical compatibility warnings to keep you and your family safe while cleaning.</p>
        </div>
        <div className="bg-amber-50 p-8 rounded-3xl space-y-4">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-amber-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-amber-900">Eco Friendly</h4>
          <p className="text-amber-800/70 text-sm">Every suggestion includes a non-toxic or DIY natural alternative for sustainable living.</p>
        </div>
      </section>
    </div>
  );

  const renderAdvisor = () => (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <button 
            onClick={() => setCurrentView('home')}
            className="text-slate-500 hover:text-slate-800 flex items-center space-x-1 mb-2 text-sm font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Home</span>
          </button>
          <h2 className="text-3xl font-bold text-slate-900">Cleaning Advisor</h2>
        </div>
        <div className="hidden md:block">
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">
            AI Agent Online
          </div>
        </div>
      </div>
      <ChatInterface />
    </div>
  );

  const renderSafetyGuide = () => (
    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold border border-orange-200">
          Essential Reading
        </div>
        <h2 className="text-4xl font-extrabold text-slate-900">Safety Guide 2026</h2>
        <p className="text-slate-600 text-lg">Modern standards for domestic chemical safety and environmental protection.</p>
      </div>

      <div className="grid gap-6">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-start space-x-4">
            <div className="text-3xl text-red-500 mt-1">⚠️</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Critical Combinations to Avoid</h3>
              <p className="text-slate-500 mt-1">Never mix the following products as they create toxic gases.</p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center space-x-3 bg-red-50 p-3 rounded-xl border border-red-100">
                  <span className="font-bold text-red-700">Bleach + Ammonia</span>
                  <span className="text-red-600 text-sm">→ Produces toxic Chloramine gas.</span>
                </li>
                <li className="flex items-center space-x-3 bg-red-50 p-3 rounded-xl border border-red-100">
                  <span className="font-bold text-red-700">Bleach + Vinegar</span>
                  <span className="text-red-600 text-sm">→ Produces Chlorine gas.</span>
                </li>
                <li className="flex items-center space-x-3 bg-red-50 p-3 rounded-xl border border-red-100">
                  <span className="font-bold text-red-700">Hydrogen Peroxide + Vinegar</span>
                  <span className="text-red-600 text-sm">→ Creates Peracetic acid (highly corrosive).</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <span>🌿</span>
              <span>2026 Eco-Standard Guidelines</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-slate-50 rounded-2xl">
                <h4 className="font-bold text-slate-800">Micro-Plastic Filter</h4>
                <p className="text-sm text-slate-500 mt-1">All vacuums used in households should have HEPA-14 filters to prevent indoor air pollution.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl">
                <h4 className="font-bold text-slate-800">Biodegradability</h4>
                <p className="text-sm text-slate-500 mt-1">Ensure cleaning agents decompose within 28 days of entering water systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout currentView={currentView} onNavigate={handleNavigate}>
      {currentView === 'home' && renderHome()}
      {currentView === 'advisor' && renderAdvisor()}
      {currentView === 'safety' && renderSafetyGuide()}
    </Layout>
  );
};

export default App;
