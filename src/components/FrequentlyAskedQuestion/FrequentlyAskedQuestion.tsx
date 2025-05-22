import React from "react";
import Accordian from "../Accordian/Accordian";
import Button from "../Button/Button";

const FrequentlyAskedQuestion = () => {
  return (
    <div className="p-4 flex flex-wrap gap-4">
      <Accordian
        optionsArr={[
          {
            id: 1,
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern.",
          },
          {
            id: 2,
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern.",
          },
          {
            id: 3,
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern.",
          },
        ]}
      />

      <div className="flex gap-4 w-full mt-4">
        <Button>Checkout</Button>
        <Button>Confirm</Button>
        <Button variant="danger">Reject</Button>
        <Button>Start Free Trial</Button>
        <Button variant="warning">Enable</Button>
        <Button variant="warning">Disable</Button>
        <Button variant="outline">Upload</Button>
        <Button variant="warning">Refresh</Button>
        <Button variant="warning">Retry</Button>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
