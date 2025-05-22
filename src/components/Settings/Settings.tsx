import { Switch } from "@radix-ui/themes";
import React from "react";
import V2_Button from "../V2_Button/V2_Button";

const Settings = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center gap-2 text-[14px] cursor-pointer font-bold">
        Theme
        <Switch />
      </div>
      <div className="flex gap-4 w-[300px] mt-8">
        <V2_Button
          size="sm"
          customClassName="text-[14px] flex-1 px-3 py-1 rounded cursor-pointer bg-blue-500 text-white whitespace-nowrap"
        >
          Import Template
        </V2_Button>
        <V2_Button
          size="sm"
          customClassName="text-[14px] flex-1 px-3 py-1 rounded cursor-pointer border border-black hover:bg-black/10 whitespace-nowrap"
        >
          Export Template
        </V2_Button>
      </div>
      <div>
        <V2_Button
          size="lg"
          customClassName="mt-8 text-[14px] flex-1 px-6 py-2 rounded cursor-pointer bg-red-500 text-white whitespace-nowrap"
        >
          Reset App Data
        </V2_Button>
      </div>

      <div className="flex flex-wrap gap-4 w-full mt-4">
        <V2_Button>Register</V2_Button>
        <V2_Button>Update Preferences</V2_Button>
        <V2_Button>Toggle Theme</V2_Button>
        <V2_Button>Reset Password</V2_Button>
        <V2_Button>Manage Devices</V2_Button>
        <V2_Button>Change Language</V2_Button>
        <V2_Button>Save Settings</V2_Button>
        <V2_Button>Set Reminder</V2_Button>
        <V2_Button>Sync Account</V2_Button>
        <V2_Button buttonStyle="success">Subscribe</V2_Button>
        <V2_Button buttonStyle="success">Reconnect</V2_Button>
        <V2_Button buttonStyle="success">Backup Data</V2_Button>
        <V2_Button buttonStyle="success">Share</V2_Button>
        <V2_Button buttonStyle="success">Follow</V2_Button>
        <V2_Button buttonStyle="secondary">Unfollow</V2_Button>
        <V2_Button buttonStyle="success">Like</V2_Button>
        <V2_Button buttonStyle="success">Unlike</V2_Button>
        <V2_Button buttonStyle="success">Add to Cart</V2_Button>
        <V2_Button buttonStyle="outline">Buy Now</V2_Button>
      </div>
    </div>
  );
};

export default Settings;
