import { Text } from "lucide-react";
import { NodeProvider } from "../providers/NodeProvider";

export const TextNode = () => {
  return (
    <NodeProvider
      icon={<Text size={16} />}
      label="Information :"
      labelClass="italic"
      boxClass="max-w-[300px]"
    >
      <p className="text-white">
        This node is used to display text. You can use it to display information
        or to display a message to the user. You can put as much text as you
        want in this node.
      </p>
    </NodeProvider>
  );
};
