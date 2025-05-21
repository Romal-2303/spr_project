import React from "react";
import Dropdown from "../Dropdown/Dropdown";

const CreatePrompt = () => {
  //
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col  w-[300px]">
        <label className="text-[14px]">Enter Prompt</label>
        <textarea className="border border-black rounded mt-2  pl-2 pt-2 h-[120px] text-[12px]" />
      </div>
      <div className="flex gap-2 item-center mt-8  w-[300px]">
        <Dropdown placeholder="Select Tone" optionsArr={["Formal", "Casual"]} />
      </div>

      <div className="mt-8 flex gap-4  w-[300px]">
        <button className="text-[14px] flex-1 px-3 py-1 rounded cursor-pointer bg-blue-500 text-white">
          Generate Prompt
        </button>
        <button className="text-[14px] flex-1 px-3 py-1 rounded cursor-pointer border border-black hover:bg-black/10">
          Save Template
        </button>
      </div>
    </div>
  );
};

export default CreatePrompt;
