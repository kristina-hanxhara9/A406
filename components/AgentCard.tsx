import React from 'react';
import { AgentData } from '../types';
import { motion } from 'framer-motion';

interface AgentCardProps {
  agent: AgentData;
  index: number;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, index }) => {
  const Icon = agent.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
    >
      <div className={`${agent.color} p-6 text-white flex items-center justify-between`}>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider opacity-90 mb-1">{agent.role}</h3>
          <h2 className="text-2xl font-bold">{agent.title}</h2>
        </div>
        <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
          <Icon size={32} />
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-slate-600 mb-6 italic border-l-4 border-slate-200 pl-4">
          {agent.description}
        </p>

        <ul className="space-y-4">
          {agent.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className={`mt-1.5 mr-3 w-2 h-2 rounded-full flex-shrink-0 ${feature.highlight ? 'bg-red-500 animate-pulse' : 'bg-slate-300'}`} />
              <div>
                <span className="text-slate-800 font-medium block">
                  {feature.text}
                </span>
                {feature.subtext && (
                  <span className="text-slate-500 text-sm mt-1 block whitespace-pre-line">
                    {feature.subtext}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default AgentCard;