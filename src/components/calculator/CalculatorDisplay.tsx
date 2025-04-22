"use client";

import React from "react";

interface CalculatorDisplayProps {
  value: string;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ value }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded mb-4">
      <div className="text-right text-2xl font-mono">{value}</div>
    </div>
  );
};

export default CalculatorDisplay;