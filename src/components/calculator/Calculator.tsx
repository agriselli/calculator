"use client";

import React from "react";
import { useCalculator } from "./useCalculator";
import Header from "./Header";
import ModeToggle from "./ModeToggle";
import CalculatorDisplay from "./CalculatorDisplay";
import ScientificButtons from "./ScientificButtons";
import NumericKeypad from "./NumericKeypad";

const Calculator: React.FC = () => {
  const { state, actions } = useCalculator();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header isScientific={state.isScientific} />

      <ModeToggle 
        isScientific={state.isScientific} 
        onToggle={actions.toggleCalculatorMode} 
      />

      <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${state.isScientific ? 'w-96' : 'w-80'}`}>
        <CalculatorDisplay value={state.display} />

        {state.isScientific && (
          <div className="mb-4">
            <ScientificButtons onOperation={actions.performScientificOperation} />
          </div>
        )}

        <NumericKeypad 
          onDigitClick={actions.inputDigit}
          onOperationClick={actions.performOperation}
          onClearClick={actions.clearDisplay}
          onDecimalClick={actions.inputDecimal}
          onEqualsClick={actions.handleEquals}
        />
      </div>
    </div>
  );
};

export default Calculator;
