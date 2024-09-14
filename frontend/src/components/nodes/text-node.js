import {
  AlertCircle,
  CurlyBraces,
  LucideCurlyBraces,
  Text,
} from "lucide-react";
import { NodeProvider } from "../providers/NodeProvider";
import { useEffect, useRef, useState } from "react";
import { HandlerUtils } from "../../utils/handlers";

export const TextNode = ({ focused }) => {
  const [text, setText] = useState("");
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    setText(e.target.value);

    let words = HandlerUtils.extractWordsInsideBraces(e.target.value);
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
      variables={variables.filter(HandlerUtils.isValidJSVariableName)}
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
              title={
                HandlerUtils.isValidJSVariableName(variable)
                  ? ""
                  : "Invalid variable name"
              }
              className={`bg-white px-1 text-xs text-blue-700 flex items-center gap-1 font-semibold  rounded-sm ${
                HandlerUtils.isValidJSVariableName(variable)
                  ? ""
                  : "text-red-500 opacity-50"
              }`}
            >
              {HandlerUtils.isValidJSVariableName(variable) ? (
                <LucideCurlyBraces size={13} />
              ) : (
                <AlertCircle size={12} />
              )}
              <span className="mb-[0px]">{variable}</span>
            </div>
          ))}
        </div>
      ) : null}
    </NodeProvider>
  );
};

