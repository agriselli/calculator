"use client";

import { useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [isScientific, setIsScientific] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay("0.");
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const performScientificOperation = (operation: string) => {
    const inputValue = parseFloat(display);
    let result;

    switch (operation) {
      case "sin":
        result = Math.sin(inputValue);
        break;
      case "cos":
        result = Math.cos(inputValue);
        break;
      case "tan":
        result = Math.tan(inputValue);
        break;
      case "log":
        result = Math.log10(inputValue);
        break;
      case "ln":
        result = Math.log(inputValue);
        break;
      case "sqrt":
        result = Math.sqrt(inputValue);
        break;
      case "square":
        result = inputValue * inputValue;
        break;
      case "pi":
        result = Math.PI;
        break;
      default:
        result = inputValue;
    }

    setDisplay(String(result));
    setFirstOperand(result);
    setWaitingForSecondOperand(true);
  };

  const calculate = (firstOperand: number, secondOperand: number, operator: string) => {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const handleEquals = () => {
    if (firstOperand === null || operator === null) {
      return;
    }

    const inputValue = parseFloat(display);
    const result = calculate(firstOperand, inputValue, operator);
    setDisplay(String(result));
    setFirstOperand(result);
    setOperator(null);
    setWaitingForSecondOperand(true);
  };

  const toggleCalculatorMode = () => {
    setIsScientific(!isScientific);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-2">{isScientific ? "Scientific" : "Simple"} Calculator</h1>
      <h2 className="text-xl mb-6 text-center text-gray-600 dark:text-gray-400">Please do not do manual calculations, use our simple calculator.</h2>

      <div className="mb-4 flex items-center">
        <span className="mr-2 text-gray-700 dark:text-gray-300">Simple</span>
        <button 
          onClick={toggleCalculatorMode}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isScientific ? 'bg-blue-600' : 'bg-gray-400'}`}
        >
          <span 
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isScientific ? 'translate-x-6' : 'translate-x-1'}`}
          />
        </button>
        <span className="ml-2 text-gray-700 dark:text-gray-300">Scientific</span>
      </div>

      <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${isScientific ? 'w-96' : 'w-80'}`}>
        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded mb-4">
          <div className="text-right text-2xl font-mono">{display}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {isScientific && (
            <>
              <button
                onClick={() => performScientificOperation("sin")}
                className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded"
              >
                sin
              </button>
              <button
                onClick={() => performScientificOperation("cos")}
                className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded"
              >
                cos
              </button>
              <button
                onClick={() => performScientificOperation("tan")}
                className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded"
              >
                tan
              </button>
              <button
                onClick={() => performScientificOperation("pi")}
                className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded"
              >
                π
              </button>
              <button
                onClick={() => performScientificOperation("log")}
                className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded"
              >
                log
              </button>
              <button
                onClick={() => performScientificOperation("ln")}
                className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded"
              >
                ln
              </button>
              <button
                onClick={() => performScientificOperation("sqrt")}
                className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded"
              >
                √
              </button>
              <button
                onClick={() => performScientificOperation("square")}
                className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded"
              >
                x²
              </button>
            </>
          )}

          <button
            onClick={clearDisplay}
            className={`${isScientific ? '' : 'col-span-2'} bg-red-500 hover:bg-red-600 text-white p-3 rounded`}
          >
            AC
          </button>
          <button
            onClick={() => performOperation("/")}
            className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 p-3 rounded"
          >
            ÷
          </button>
          <button
            onClick={() => performOperation("*")}
            className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 p-3 rounded"
          >
            ×
          </button>

          <button
            onClick={() => inputDigit("7")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-3 rounded"
          >
            7
          </button>
          <button
            onClick={() => inputDigit("8")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-3 rounded"
          >
            8
          </button>
          <button
            onClick={() => inputDigit("9")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-3 rounded"
          >
            9
          </button>
          <button
            onClick={() => performOperation("-")}
            className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 p-3 rounded"
          >
            -
          </button>

          <button
            onClick={() => inputDigit("4")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-3 rounded"
          >
            4
          </button>
          <button
            onClick={() => inputDigit("5")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-3 rounded"
          >
            5
          </button>
          <button
            onClick={() => inputDigit("6")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-3 rounded"
          >
            6
          </button>
          <button
            onClick={() => performOperation("+")}
            className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 p-3 rounded"
          >
            +
          </button>

          <button
            onClick={() => inputDigit("1")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-3 rounded"
          >
            1
          </button>
          <button
            onClick={() => inputDigit("2")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-3 rounded"
          >
            2
          </button>
          <button
            onClick={() => inputDigit("3")}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-3 rounded"
          >
            3
          </button>
          <button
            onClick={handleEquals}
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded row-span-2"
          >
            =
          </button>

          <button
            onClick={() => inputDigit("0")}
            className="col-span-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-3 rounded"
          >
            0
          </button>
          <button
            onClick={inputDecimal}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-3 rounded"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}
