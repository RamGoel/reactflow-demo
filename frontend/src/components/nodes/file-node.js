import { useState } from "react";
import { NodeProvider } from "../providers/NodeProvider";
import { FileIcon } from "lucide-react";

export const FileNode = () => {
  const [file, setFile] = useState("");
  return (
    <NodeProvider
      icon={<FileIcon size={16} />}
      label="Upload File :"
      labelClass="italic"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center bg-white px-1 py-1 border border-gray-300 rounded-md justify-center">
          <input
            value={file}
            placeholder="Enter your file"
            type="file"
            onChange={(e) => setFile(e.target.value)}
            className="w-full focus-visible:outline-none text-xs p-1 rounded-md"
          />
          <button className="bg-violet-600 text-xs text-white px-2 py-1 rounded-md">
            Upload
          </button>
        </div>
      </div>
    </NodeProvider>
  );
};
