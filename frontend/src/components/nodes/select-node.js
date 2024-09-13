import { useState } from "react";
import { NodeProvider } from "../providers/NodeProvider";
import { BoxSelectIcon } from "lucide-react";

export const SelectNode = () => {
  const [selectedOption, setSelectedOption] = useState("");
  let options = ["Gaming", "Swimming", "Reading"];
  return (
    <NodeProvider
      icon={<BoxSelectIcon size={16} />}
      label="Select your hobby :"
      labelClass="italic"
    >
      <div className="flex flex-col items-center justify-center">
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-full border focus-visible:outline-none text-sm p-1 rounded-md border-gray-300 "
        >
          {options.map((option) => (
            <option
              key={option}
              className="!text-md h-[30px] text-black"
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </NodeProvider>
  );
};
