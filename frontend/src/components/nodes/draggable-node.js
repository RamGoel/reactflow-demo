// draggableNode.js

import { PlusCircle, PlusIcon } from "lucide-react";

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      className={`draggable-node bg-violet-800 cursor-grab hover:scale-105 transition-all duration-150 ease-in-out text-lg flex items-center gap-2 hover:bg-violet-700 rounded-md py-2 hover:shadow-md text-white px-4 h-[40px] justify-center ${type}`}
      draggable
    >
      {icon ?? <PlusIcon size={15} />}
      <span className="">{label}</span>
    </div>
  );
};
