// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="emailNode" label="Email" />
        <DraggableNode type="selectNode" label="Select" />
        <DraggableNode type="fileNode" label="File" />
        <DraggableNode type="sumNode" label="Addition" />
        <DraggableNode type="textNode" label="Text" />
      </div>
    </div>
  );
};

