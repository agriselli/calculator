"use client";

import React from "react";
import CalculatorButton from "./CalculatorButton";

interface NumericKeypadProps {
  onDigitClick: (digit: string) => void;
  onOperationClick: (operation: string) => void;
  onClearClick: () => void;
  onDecimalClick: () => void;
  onEqualsClick: () => void;
}

const NumericKeypad: React.FC<NumericKeypadProps> = ({
  onDigitClick,
  onOperationClick,
  onClearClick,
  onDecimalClick,
  onEqualsClick,
}) => {
  const numberButtonClass = "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600";
  const operationButtonClass = "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500";
  const clearButtonClass = "bg-red-500 hover:bg-red-600 text-white";
  const equalsButtonClass = "bg-blue-500 hover:bg-blue-600 text-white";

  return (
    <div className="grid grid-cols-4 gap-2">
      {/* First row */}
      <CalculatorButton
        onClick={onClearClick}
        className={clearButtonClass}
       // colSpan={isScientific ? 3 : 1}
        colSpan={3}
      >
        AC
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onOperationClick("/")}
        className={operationButtonClass}
      >
        ÷
      </CalculatorButton>

      {/* Second row */}
      <CalculatorButton
        onClick={() => onDigitClick("7")}
        className={numberButtonClass}
      >
        7
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onDigitClick("8")}
        className={numberButtonClass}
      >
        8
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onDigitClick("9")}
        className={numberButtonClass}
      >
        9
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onOperationClick("*")}
        className={operationButtonClass}
      >
        ×
      </CalculatorButton>

      {/* Third row */}
      <CalculatorButton
        onClick={() => onDigitClick("4")}
        className={numberButtonClass}
      >
        4
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onDigitClick("5")}
        className={numberButtonClass}
      >
        5
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onDigitClick("6")}
        className={numberButtonClass}
      >
        6
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onOperationClick("-")}
        className={operationButtonClass}
      >
        -
      </CalculatorButton>

      {/* Fourth row */}
      <CalculatorButton
        onClick={() => onDigitClick("1")}
        className={numberButtonClass}
      >
        1
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onDigitClick("2")}
        className={numberButtonClass}
      >
        2
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onDigitClick("3")}
        className={numberButtonClass}
      >
        3
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onOperationClick("+")}
        className={operationButtonClass}
      >
        +
      </CalculatorButton>

      {/* Fifth row */}
      <CalculatorButton
        onClick={() => onDigitClick("0")}
        className={numberButtonClass}
        colSpan={2}
      >
        0
      </CalculatorButton>
      <CalculatorButton
        onClick={onDecimalClick}
        className={numberButtonClass}
      >
        .
      </CalculatorButton>
      <CalculatorButton
        onClick={onEqualsClick}
        className={equalsButtonClass}
      >
        =
      </CalculatorButton>
    </div>
  );
};

export default NumericKeypad;
