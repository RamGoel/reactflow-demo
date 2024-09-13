import { useState } from "react";
import { NodeProvider } from "../providers/NodeProvider";
import { CalculatorIcon } from "lucide-react";

export const SumNode = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const handleAdd = () => {
    alert(parseInt(num1) + parseInt(num2));
    setNum1("");
    setNum2("");
  };
  return (
    <NodeProvider
      icon={<CalculatorIcon size={16} />}
      label="Add Two Numbers :"
      labelClass="italic"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 bg-white px-1 py-1 border border-gray-300 rounded-md justify-center">
          <input
            value={num1}
            type="number"
            placeholder="Number 1"
            onChange={(e) => setNum1(e.target.value)}
            className="w-[80px] border focus-visible:outline-none text-xs p-1 rounded-md"
          />
          <input
            value={num2}
            type="number"
            placeholder="Number 2"
            onChange={(e) => setNum2(e.target.value)}
            className="w-[80px] border focus-visible:outline-none text-xs p-1 rounded-md"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-600 text-xs text-white px-2 py-1 rounded-md"
          >
            Add
          </button>
        </div>
      </div>
    </NodeProvider>
  );
};
