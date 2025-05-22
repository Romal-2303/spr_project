import React from "react";
import { Switch as SwitchRadix } from "radix-ui";

const Switch = () => {
  return (
    <SwitchRadix.Root
      className="relative h-[25px] w-[42px] cursor-default rounded-full bg-black shadow-[0_2px_10px] shadow-black outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black"
      id="airplane-mode"
      style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}
    >
      <SwitchRadix.Thumb className="block size-[21px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
    </SwitchRadix.Root>
  );
};

export default Switch;
