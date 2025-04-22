"use client";

import React from "react";
import CalculatorButton from "./CalculatorButton";

interface ScientificButtonsProps {
  onOperation: (operation: string) => void;
}

const ScientificButtons: React.FC<ScientificButtonsProps> = ({ onOperation }) => {
  const scientificButtonClass = "bg-indigo-500 hover:bg-indigo-600 text-white";

  return (
    <div className="grid grid-rows-2 grid-cols-4 gap-2">
      {/* First row */}
      <CalculatorButton
        onClick={() => onOperation("sin")}
        className={scientificButtonClass}
      >
        sin
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onOperation("cos")}
        className={scientificButtonClass}
      >
        cos
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onOperation("tan")}
        className={scientificButtonClass}
      >
        tan
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onOperation("pi")}
        className={scientificButtonClass}
      >
        π
      </CalculatorButton>

      {/* Second row */}
      <CalculatorButton
        onClick={() => onOperation("log")}
        className={scientificButtonClass}
      >
        log
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onOperation("ln")}
        className={scientificButtonClass}
      >
        ln
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onOperation("sqrt")}
        className={scientificButtonClass}
      >
        √
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onOperation("square")}
        className={scientificButtonClass}
      >
        x²
      </CalculatorButton>
    </div>
  );
};

export default ScientificButtons;
