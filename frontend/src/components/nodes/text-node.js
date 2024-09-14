import { CurlyBraces, LucideCurlyBraces, Text } from "lucide-react";
import { NodeProvider } from "../providers/NodeProvider";
import { useEffect, useRef, useState } from "react";

export const TextNode = ({ focused }) => {
  const [text, setText] = useState("");
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  function extractWordsInsideBraces(text) {
    const regex = /\{\{([^}]+)\}\}/g;
    let matches;
    const results = [];

    while ((matches = regex.exec(text)) !== null) {
      results.push(matches[1].trim());
    }

    return results;
  }

  const handleInput = (e) => {
    setText(e.target.value);

    let words = extractWordsInsideBraces(e.target.value);
    setVariables(Array.from(new Set(words)));

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height based on content
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);
  return (
    <NodeProvider
      icon={<Text size={16} />}
      label="Information :"
      labelClass="italic shadow-lg"
      variables={variables}
      boxClass="max-w-[300px]"
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleInput}
        className="p-1 w-full min-h-[30px] text-sm focus-visible:outline-none rounded-sm resize-none overflow-hidden box-border"
        placeholder="Type your text here..."
      />
      {variables.length ? (
        <div className="flex flex-wrap items-center gap-2">
          {variables.map((variable) => (
            <div
              key={variable}
              className="bg-white px-1 text-xs text-blue-700 flex items-center gap-1 font-semibold  rounded-sm"
            >
              <LucideCurlyBraces size={13} />{" "}
              <span className="mb-[2px]">{variable}</span>
            </div>
          ))}
        </div>
      ) : null}
    </NodeProvider>
  );
};

