import { useState } from "react";
import { NodeProvider } from "../providers/NodeProvider";

export const EmailNode = () => {
  const [email, setEmail] = useState("");
  return (
    <NodeProvider label="Send Email to :" labelClass="italic">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center bg-white px-1 py-1 border border-gray-300 rounded-md justify-center">
          <input
            value={email}
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full focus-visible:outline-none text-xs p-1 rounded-md"
          />
          <button className="bg-violet-600 text-xs text-white px-2 py-1 rounded-md">
            Send
          </button>
        </div>
      </div>
    </NodeProvider>
  );
};
