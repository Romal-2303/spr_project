"use client";

import * as React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { cn } from "@/utility/cn";
import {
  CheckCircledIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

type Option = {
  labelSelect: string;
  valueSelect: string;
};

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
  defaultValue?: string;
}

const Select: React.FC<SelectProps> = ({
  value,
  onValueChange,
  options,
  placeholder = "Select...",
  className,
  defaultValue,
}) => {
  return (
    <RadixSelect.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
    >
      <RadixSelect.Trigger
        className={cn(
          "inline-flex items-center justify-between px-4 py-2 bg-white border-zinc-300 rounded-md text-sm shadow-sm",
          className
        )}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon className="ml-2">
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          className="bg-white border border-zinc-200 rounded-md shadow-md z-50"
          sideOffset={5}
        >
          <RadixSelect.ScrollUpButton className="flex items-center justify-center py-1">
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>

          <RadixSelect.Viewport className="p-1">
            {options.map((option) => (
              <RadixSelect.Item
                key={option.valueSelect}
                value={option.valueSelect}
                className={cn(
                  "cursor-pointer select-none text-sm px-3 py-2 rounded-md outline-none hover:bg-zinc-100flex items-center justify-between",
                  value === option.valueSelect && "font-medium"
                )}
              >
                <RadixSelect.ItemText>
                  {option.labelSelect}
                </RadixSelect.ItemText>
                <RadixSelect.ItemIndicator>
                  <CheckCircledIcon />
                </RadixSelect.ItemIndicator>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>

          <RadixSelect.ScrollDownButton className="flex items-center justify-center py-1">
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

export default Select;
