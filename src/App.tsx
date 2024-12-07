import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { Stats } from './components/Stats';
import { TopicCard } from './components/TopicCard';

const topics = [
  { id: 1, title: 'Arrays & Hashing', completed: 8, total: 8 },
  { id: 2, title: 'Two Pointers', completed: 3, total: 3 },
  { id: 3, title: 'Sliding Window', completed: 4, total: 4 },
  { id: 4, title: 'Stack', completed: 1, total: 1 },
  { id: 5, title: 'Binary Search', completed: 2, total: 2 },
  { id: 6, title: 'Linked List', completed: 6, total: 6 },
  { id: 7, title: 'Trees', completed: 11, total: 11 },
  { id: 8, title: 'Tries', completed: 3, total: 3 },
  { id: 9, title: 'Heap / Priority Queue', completed: 1, total: 1 },
  { id: 10, title: 'Backtracking', completed: 2, total: 2 },
  { id: 11, title: 'Graphs', completed: 6, total: 6 },
  { id: 12, title: 'Advanced Graphs', completed: 1, total: 1 },
  { id: 13, title: '1-D Dynamic Programming', completed: 10, total: 10 },
  { id: 14, title: '2-D Dynamic Programming', completed: 2, total: 2 },
  { id: 15, title: 'Greedy', completed: 2, total: 2 },
  { id: 16, title: 'Intervals', completed: 5, total: 5 },
  { id: 17, title: 'Math & Geometry', completed: 3, total: 3 },
  { id: 18, title: 'Bit Manipulation', completed: 5, total: 5 },
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = topics.filter(topic =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalSolved = topics.reduce((acc, topic) => acc + topic.completed, 0);
  const totalProblems = topics.reduce((acc, topic) => acc + topic.total, 0);

  const handleTopicClick = (topicId: number) => {
    window.open('https://insidious-limburger-8ac.notion.site/LeetCode-DSA-Tracker-a7d0927d8c5f4a65a8b043af0c382a9c', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <Stats 
            totalSolved={totalSolved}
            totalProblems={totalProblems}
            streak={7}
          />
          
          <div className="max-w-xl">
            <SearchBar 
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTopics.map(topic => (
              <TopicCard
                key={topic.id}
                title={topic.title}
                completed={topic.completed}
                total={topic.total}
                onClick={() => handleTopicClick(topic.id)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;