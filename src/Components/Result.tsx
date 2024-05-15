import React, { useState } from "react";
import { ResultComponentProps } from "../Interfaces/Result.interface";
import COPY_SVG from "../assets/copy.svg";
import COPIED_SVG from "../assets/copied.svg";
const Result: React.FC<ResultComponentProps> = (props) => {
  const [copied, setCopied] = useState(false);
  return (
    <div title="Click to copy text to clipboard." className="mt-10 sm:mt-20">
      <a
        onClick={() => {
          navigator.clipboard.writeText(props.query);
          setCopied(true);
        }}
        className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        href="#"
      >
        {props?.query}
        <img
          src={copied ? COPIED_SVG : COPY_SVG}
          alt="Please check your internet connection!"
        />
      </a>
    </div>
  );
};

export default Result;
