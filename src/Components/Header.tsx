import React from "react";

const Header: React.FC<any> = (props) => {
  return (
    <>
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
        Generate
      </h1>

      <p className="mt-3 text-gray-600 dark:text-neutral-400">
        Generate SQL Queries using the power of AI from simple English Language.
      </p>
    </>
  );
};

export default Header;
