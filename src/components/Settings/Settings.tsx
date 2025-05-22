import { Switch } from "@radix-ui/themes";
import React from "react";
import Button from '../Button/Button';

const Settings = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center gap-2 text-[14px] cursor-pointer font-bold">
        Theme
        <Switch />
      </div>
      <div className="flex gap-4 w-[300px] mt-8">
        <Button
          size="sm"
          className="text-[14px] flex-1 px-3 py-1 rounded cursor-pointer bg-blue-500 text-white whitespace-nowrap"
        >
          Import Template
        </Button>
        <Button
          size="sm"
          className="text-[14px] flex-1 px-3 py-1 rounded cursor-pointer border border-black hover:bg-black/10 whitespace-nowrap"
        >
          Export Template
        </Button>
      </div>
      <div>
        <Button
          size="lg"
          className="mt-8 text-[14px] flex-1 px-6 py-2 rounded cursor-pointer bg-red-500 text-white whitespace-nowrap"
        >
          Reset App Data
        </Button>
      </div>
      <div className="flex flex-wrap gap-4 w-full mt-4">
        <Button>Register</Button>
        <Button>Update Preferences</Button>
        <Button>Toggle Theme</Button>
        <Button>Reset Password</Button>
        <Button>Manage Devices</Button>
        <Button>Change Language</Button>
        <Button>Save Settings</Button>
        <Button>Set Reminder</Button>
        <Button>Sync Account</Button>
        <Button variant="success">Subscribe</Button>
        <Button variant="success">Reconnect</Button>
        <Button variant="success">Backup Data</Button>
        <Button variant="success">Share</Button>
        <Button variant="success">Follow</Button>
        <Button variant="secondary">Unfollow</Button>
        <Button variant="success">Like</Button>
        <Button variant="success">Unlike</Button>
        <Button variant="success">Add to Cart</Button>
        <Button variant="outline">Buy Now</Button>
      </div>
    </div>
  );
};

export default Settings;
