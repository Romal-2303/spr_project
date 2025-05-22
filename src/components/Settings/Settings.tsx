import { Switch } from "@radix-ui/themes";
import React from "react";

const Settings = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center gap-2 text-[14px] cursor-pointer font-bold">
        Theme
        <Switch />
      </div>
      <div className="flex gap-4 w-[300px] mt-8">
        <button className="text-[14px] flex-1 px-3 py-1 rounded cursor-pointer bg-blue-500 text-white">
          Import Template
        </button>
        <button className="text-[14px] flex-1 px-3 py-1 rounded cursor-pointer border border-black hover:bg-black/10">
          Export Template
        </button>
      </div>
      <div>
        <button className="mt-8 text-[14px] flex-1 px-6 py-2 rounded cursor-pointer bg-red-500 text-white">
          Reset App Data
        </button>
      </div>
    </div>
  );
};

export default Settings;
