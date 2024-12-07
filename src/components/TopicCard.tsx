import React from 'react';
import { ChevronRight } from 'lucide-react';

interface TopicCardProps {
  title: string;
  completed: number;
  total: number;
  onClick: () => void;
}

export function TopicCard({ title, completed, total, onClick }: TopicCardProps) {
  const progress = (completed / total) * 100;
  
  return (
    <div 
      onClick={onClick}
      className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-750 transition-colors"
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
      <div className="space-y-2">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Progress</span>
          <span className="text-white font-medium">{completed}/{total}</span>
        </div>
      </div>
    </div>
  );
}