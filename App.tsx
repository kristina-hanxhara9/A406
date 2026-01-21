import React from 'react';
import { AGENTS } from './constants';
import AgentCard from './components/AgentCard';
import { CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Hero Section */}
      <header className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
           </svg>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-red-500">A406 Windows</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ide sesi mund të përdoret Inteligjenca Artificiale (AI) për biznesin tuaj.
          </p>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AGENTS.map((agent, index) => (
            <AgentCard key={agent.id} agent={agent} index={index} />
          ))}
          
          {/* Summary / CTA Card placed in the grid layout */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center text-center text-white border border-indigo-700 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Përfitimet Kryesore</h3>
            <ul className="text-left space-y-4 w-full max-w-xs mx-auto">
              <li className="flex items-center">
                <CheckCircle2 className="text-green-400 mr-3 w-6 h-6" />
                <span>Kurseni 20+ orë në javë</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="text-green-400 mr-3 w-6 h-6" />
                <span>Zero humbje të klientëve</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="text-green-400 mr-3 w-6 h-6" />
                <span>Marketing i vazhdueshëm</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="text-green-400 mr-3 w-6 h-6" />
                <span>Më pak stres, më shumë fitim</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto px-6 mt-20 text-center text-slate-400 text-sm">
        <p>© 2026 Butterfly AI . All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;