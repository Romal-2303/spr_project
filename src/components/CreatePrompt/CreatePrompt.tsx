"use client";

import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import V2_Button from "../V2_Button/V2_Button";
import { Select } from "antd";

let optionsArr = [
  { value: "jack", label: "Jack" },
  { value: "lucy", label: "Lucy" },
  { value: "Yiminghe", label: "yiminghe" },
];

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
        <V2_Button
          size="sm"
          customClassName="text-[14px] flex-1 px-3 py-1 rounded cursor-pointer bg-blue-500 text-white whitespace-nowrap"
        >
          Generate Prompt
        </V2_Button>
        <V2_Button
          size="sm"
          customClassName="text-[14px] flex-1 px-3 py-1 rounded cursor-pointer border border-black hover:bg-black/10 whitespace-nowrap"
        >
          Save Template
        </V2_Button>
      </div>

      <div className="flex flex-wrap gap-4 w-full mt-4">
        <V2_Button>Apply</V2_Button>
        <V2_Button>Try for Free</V2_Button>
        <V2_Button>Launch Now</V2_Button>
        <V2_Button>Start Demo</V2_Button>
        <V2_Button>Close</V2_Button>
        <V2_Button>View All</V2_Button>
        <V2_Button>More Info</V2_Button>
        <V2_Button>Add Member</V2_Button>
        <V2_Button>Sign Agreement</V2_Button>
        <V2_Button buttonStyle="secondary">Discover</V2_Button>
        <V2_Button buttonStyle="success">Request Access</V2_Button>
        <V2_Button buttonStyle="secondary">Settings</V2_Button>
        <V2_Button buttonStyle="outline">Launch</V2_Button>
        <V2_Button buttonStyle="outline">Accept</V2_Button>
        <V2_Button buttonStyle="outline">Invite Collaborator</V2_Button>
        <V2_Button buttonStyle="outline">Switch Account</V2_Button>
        <V2_Button buttonStyle="outline">View Profile</V2_Button>
        <V2_Button buttonStyle="danger">Decline</V2_Button>
        <V2_Button buttonStyle="danger">Remove</V2_Button>
        <V2_Button buttonStyle="danger">Cancel</V2_Button>
        <V2_Button buttonStyle="danger">Remove Member</V2_Button>
        <V2_Button buttonStyle="warning">Contact Support</V2_Button>
        <V2_Button buttonStyle="warning">Join Team</V2_Button>
      </div>

      <div className="mt-8 w-[300px]">
        <Select className="w-full" defaultValue="lucy" options={optionsArr} />
      </div>
    </div>
  );
};

export default CreatePrompt;
