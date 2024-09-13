import { Handle, Position } from "reactflow";

// hideHandle?: "right" | "left"
export const NodeProvider = ({
    hideHandle,
    label,
    children,
    labelClass = "",
    boxClass = ""
}) => {
    return (
        <div className={`w-full min-w-[200px] rounded-md bg-gradient-to-b from-violet-600 via-violet-300 to-violet-950 p-[1.5px] ${boxClass}`}>
            {hideHandle !== "left" && <Handle className="p-1 mt-[-3px] !border-[2px] !bg-gradient-to-t from-violet-500 to-violet-800" type="target" position={Position.Right} />}
            {hideHandle !== "right" && <Handle className="p-1 mt-[-3px] !border-[2px] !bg-gradient-to-t from-violet-500 to-violet-800" type="source" position={Position.Left} />}
            <div className="rounded-md overflow-hidden">
                <div className={`flex bg-violet-600 text-left px-3 p-2 text-xs text-white font-[500] ${labelClass}`}>
                    {label}
                </div>
                <div className="p-3 bg-violet-950 !text-sm">
                    {children}
                </div>
            </div>
        </div>
    );
};