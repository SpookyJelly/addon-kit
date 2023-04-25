import React from "react";
import { useAddonState, useChannel, addons } from "@storybook/manager-api";
import { AddonPanel } from "@storybook/components";
import { ADDON_ID, EVENTS } from "./constants";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  const handleClick = (item: string) => {
    addons.getChannel().emit(EVENTS.SET_PERMUTATIONS, item);
  };

  return (
    <AddonPanel {...props}>
      <div>
        <p>Click each button to emit </p>
        <button onClick={() => handleClick("one")}>Emit "one"</button>
        <button onClick={() => handleClick("two")}>Emit "two"</button>
      </div>

      <p>Excepeted : one / one two / .... extending arrays</p>
      <p>Result: one / two / .... just changing array itself</p>
    </AddonPanel>
  );
};
