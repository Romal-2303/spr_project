"use client";

import React, { useState } from "react";
import { DropdownMenu } from "radix-ui";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";

interface DropdownProps {
  placeholder: string;
  optionsArr: string[];
}

const Dropdown = ({ placeholder, optionsArr }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex justify-between items-center px-4 py-1 rounded border border-black text-[14px] w-full">
        <p>{selectedOption || placeholder}</p> <ChevronDownIcon />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] w-full rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
        >
          {optionsArr.map((option) => (
            <DropdownMenu.Item
              className="group relative flex h-[40px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet-500 outline-none cursor-pointer"
              onSelect={() => handleSelect(option)}
            >
              {option}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
