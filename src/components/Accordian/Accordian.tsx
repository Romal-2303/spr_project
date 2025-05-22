import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Accordion as AccordionRadix } from "radix-ui";

import React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

interface AccordianProps {
  optionsArr: any[];
}

const Accordian = ({ optionsArr }: AccordianProps) => {
  return (
    <AccordionRadix.Root
      className="w-[600px] rounded-md bg-black/70 text-white shadow-[0_2px_10px] shadow-black/5 px-4 py-4"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      {optionsArr.map((el) => (
        <AccordionItem className="text-white mb-8" value={el.id}>
          <AccordionTrigger className="text-white flex justify-between items-center w-full">
            {el.question}
            <ChevronDownIcon />
          </AccordionTrigger>
          <AccordionContent className="mt-4">{el.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRadix.Root>
  );
};

export default Accordian;
