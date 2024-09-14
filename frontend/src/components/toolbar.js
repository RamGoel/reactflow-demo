// toolbar.js

import {
  ArrowUpRight,
  BoxSelectIcon,
  CalculatorIcon,
  FileIcon,
  InfoIcon,
  MailIcon,
  Text,
} from "lucide-react";
import { DraggableNode } from "./nodes/draggable-node";
import SubmitButton from "./submit";

export const PipelineToolbar = () => {
  return (
    <div className="p-2 border-b-[3px] bg-violet-950 border-violet-300 flex items-center">
      <p className="text-white flex items-center gap-2 text-md">
        <InfoIcon size={16} /> Drag and drop to add nodes
      </p>{" "}
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
        <SubmitButton />
      </div>
    </div>
  );
};

