"use client";

import React from "react";

interface ModeToggleProps {
  isScientific: boolean;
  onToggle: () => void;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ isScientific, onToggle }) => {
  return (
    <div className="mb-4 flex items-center">
      <span className="mr-2 text-gray-700 dark:text-gray-300">Simple</span>
      <button 
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isScientific ? 'bg-blue-600' : 'bg-gray-400'}`}
      >
        <span 
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isScientific ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </button>
      <span className="ml-2 text-gray-700 dark:text-gray-300">Scientific</span>
    </div>
  );
};

export default ModeToggle;