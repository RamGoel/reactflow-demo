import { ArrowUpRight } from "lucide-react";
import React from "react";

const SubmitButton = () => {
  return (
    <button className="px-4 py-2 hover:scale-105 transition-all duration-150 ease-in-out hover:bg-violet-200 flex items-center gap-2 bg-violet-300 text-violet-950 rounded-md font-[500]">
      <ArrowUpRight size={20} /> Submit Pipeline
    </button>
  );
};

export default SubmitButton;
