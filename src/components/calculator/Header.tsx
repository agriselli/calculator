"use client";

import React from "react";

interface HeaderProps {
  isScientific: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScientific }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{isScientific ? "Scientific" : "Simple"} Calculator</h1>
      <h2 className="text-xl mb-6 text-center text-gray-600 dark:text-gray-400">
        Please do not do manual calculations, use our simple calculator.
      </h2>
    </>
  );
};

export default Header;