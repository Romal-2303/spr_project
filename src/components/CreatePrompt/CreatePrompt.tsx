import React from "react";
import Dropdown from "../Dropdown/Dropdown";

const CreatePrompt = () => {
  return (
    <div className="flex flex-col p-4  w-[200px] border border-red-500">
      <div className="flex flex-col">
        <label className="text-[14px]">Enter Prompt</label>
        <input className="border border-black rounded mt-2" />
      </div>
      <div className="flex gap-2 item-center mt-8">
        <p>Select Tone:</p>
        <Dropdown />
      </div>
    </div>
  );
};

export default CreatePrompt;
