import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Code2 className="w-8 h-8 text-emerald-500" />
            <h1 className="text-2xl font-bold text-white">DSA Progress Tracker</h1>
          </div>
          <a
            href="https://insidious-limburger-8ac.notion.site/LeetCode-DSA-Tracker-a7d0927d8c5f4a65a8b043af0c382a9c"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <span>Open in Notion</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}