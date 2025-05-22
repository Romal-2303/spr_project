import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";

const CreatePrompt = () => {
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
        <Button
          size="sm"
          className="text-[14px] flex-1 px-3 py-1 rounded cursor-pointer bg-blue-500 text-white whitespace-nowrap"
        >
          Generate Prompt
        </Button>
        <Button
          size="sm"
          className="text-[14px] flex-1 px-3 py-1 rounded cursor-pointer border border-black hover:bg-black/10 whitespace-nowrap"
        >
          Save Template
        </Button>
      </div>
      <div className="flex flex-wrap gap-4 w-full mt-4">
        <Button>Apply</Button>
        <Button>Try for Free</Button>
        <Button>Launch Now</Button>
        <Button>Start Demo</Button>
        <Button>Close</Button>
        <Button>View All</Button>
        <Button>More Info</Button>
        <Button>Add Member</Button>
        <Button>Sign Agreement</Button>
        <Button variant="secondary">Discover</Button>
        <Button variant="success">Request Access</Button>
        <Button variant="secondary">Settings</Button>
        <Button variant="outline">Launch</Button>
        <Button variant="outline">Accept</Button>
        <Button variant="outline">Invite Collaborator</Button>
        <Button variant="outline">Switch Account</Button>
        <Button variant="outline">View Profile</Button>
        <Button variant="danger">Decline</Button>
        <Button variant="danger">Remove</Button>
        <Button variant="danger">Cancel</Button>
        <Button variant="danger">Remove Member</Button>
        <Button variant="warning">Contact Support</Button>
        <Button variant="warning">Join Team</Button>
      </div>
    </div>
  );
};

export default CreatePrompt;
