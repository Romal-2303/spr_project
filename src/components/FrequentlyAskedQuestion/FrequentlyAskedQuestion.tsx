import React from "react";
import Accordian from "../Accordian/Accordian";

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
    </div>
  );
};

export default FrequentlyAskedQuestion;
