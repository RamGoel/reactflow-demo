import { Handle, Position } from "reactflow";

export const NodeProvider = ({
    icon,
    label,
    children,
    labelClass = "",
    boxClass = "",
    variables = []
}) => {
    return (
        <div className={`w-full min-w-[200px] rounded-md bg-gradient-to-b from-violet-600 via-violet-300 to-violet-950 p-[1.5px] ${boxClass}`}>
            {variables?.length ? <div className="flex flex-wrap items-center gap-2">
                {variables.map((variable, index, array) => (
                    <CustomHandle label={variable} id={variable} index={index} array={array} type="target" position={Position.Left} key={index} />
                ))}
            </div> : <Handle className="p-1 mt-[-3px] !border-[2px] !bg-gradient-to-t from-violet-500 to-violet-800" type="target" position={Position.Left} />}
            <Handle className="p-1 mt-[-3px] !border-[2px] !bg-gradient-to-t from-violet-500 to-violet-800" type="source" position={Position.Right} />

            <div className="rounded-md overflow-hidden">
                <div className={`flex items-center gap-2 bg-violet-600 text-left px-3 p-2 text-xs text-white font-[500] ${labelClass}`}>
                    {icon} {label}
                </div>
                <div className="p-3 bg-violet-950 !text-sm">
                    {children}
                </div>
            </div>
        </div>
    );
};


const CustomHandle = ({ id, position, type, index, array, label }) => {
    const calculateTop = (index, array) => {
        const totalNodes = array.length;

        if (totalNodes === 1) {
            return 50;
        }
        if (totalNodes === 2) {
            return (index === 0) ? 33 : 66;
        }

        return (index + 1) * (100 / (totalNodes + 1));
    };

    return <>
        <div className="absolute left-[-110px] text-right  w-[100px] text-white text-xs" style={{ top: `${calculateTop(index, array) - 14}%` }}>{label}</div>
        <Handle id={id} className="p-1 !border-[2px] !bg-gradient-to-t from-violet-500 to-violet-800" style={{ top: `${calculateTop(index, array)}%` }} type={type} position={position} />
    </>
}