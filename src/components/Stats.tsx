import React from 'react';
import { Brain, Target, Trophy } from 'lucide-react';

interface StatsProps {
  totalSolved: number;
  totalProblems: number;
  streak: number;
}

export function Stats({ totalSolved, totalProblems, streak }: StatsProps) {
  const stats = [
    {
      label: 'Problems Solved',
      value: totalSolved,
      icon: Brain,
      color: 'text-blue-500',
    },
    {
      label: 'Total Problems',
      value: totalProblems,
      icon: Target,
      color: 'text-purple-500',
    },
    {
      label: 'Current Streak',
      value: streak,
      icon: Trophy,
      color: 'text-yellow-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map(({ label, value, icon: Icon, color }) => (
        <div key={label} className="bg-gray-800 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <Icon className={`w-8 h-8 ${color}`} />
            <div>
              <p className="text-gray-400 text-sm">{label}</p>
              <p className="text-2xl font-bold text-white">{value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}