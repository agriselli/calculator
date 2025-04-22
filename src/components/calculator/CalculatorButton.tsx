"use client";

import React from "react";

interface CalculatorButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  onClick,
  className = "",
  children,
  colSpan = 1,
  rowSpan = 1,
}) => {
  const spanClass = `
    ${colSpan === 3 ? "col-span-3" : colSpan === 2 ? "col-span-2" : "col-span-1"}
    ${rowSpan === 2 ? "col-span-2" : "row-span-1"}
  `;

  // const spanClass = `col-span-${colSpan} row-span-${rowSpan}`;

  return (
    <button
      onClick={onClick}
      className={`${className} ${spanClass} p-3 rounded`}
    >
      {children}
    </button>
  );
};

export default CalculatorButton;