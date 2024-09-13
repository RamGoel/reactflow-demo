// toolbar.js

import {
  ArrowUpRight,
  BoxSelectIcon,
  CalculatorIcon,
  FileIcon,
  MailIcon,
  Text,
} from "lucide-react";
import { DraggableNode } from "./nodes/draggable-node";

export const PipelineToolbar = () => {
  return (
    <div className="p-2 border-b-[3px] border-violet-300 bg-gradient-to-r from-violet-900 to-violet-700 flex items-center">
      <h3 className="text-lg text-white italic">Start with these nodes :</h3>
      <div className="flex items-center gap-2 p-3 ">
        <DraggableNode
          icon={<MailIcon size={20} />}
          type="emailNode"
          label="Email"
        />
        <DraggableNode
          icon={<BoxSelectIcon size={20} />}
          type="selectNode"
          label="Select"
        />
        <DraggableNode
          icon={<FileIcon size={20} />}
          type="fileNode"
          label="File"
        />
        <DraggableNode
          icon={<CalculatorIcon size={20} />}
          type="sumNode"
          label="Addition"
        />
        <DraggableNode icon={<Text size={20} />} type="textNode" label="Text" />
      </div>
      <div className="flex items-center gap-2 justify-end flex-1">
        <button className="px-4 py-2 hover:scale-105 transition-all duration-150 ease-in-out hover:bg-violet-200 flex items-center gap-2 bg-violet-300 text-violet-950 rounded-md font-[500]">
          <ArrowUpRight size={20} /> Submit Pipeline
        </button>
      </div>
    </div>
  );
};

