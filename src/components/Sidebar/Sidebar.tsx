"use client";

import { GearIcon, HeartIcon, QuestionMarkIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const router = useRouter();

  const routeClickHandler = (receivedRoute: string) => () => {
    router.push(receivedRoute);
  };

  return (
    <div className="w-[230px] bg-gray-100 p-4">
      <div
        className="mt-4 flex items-center gap-2 cursor-pointer"
        onClick={routeClickHandler("favourites")}
      >
        <HeartIcon />
        Favourites
      </div>
      <div
        className="mt-4 flex items-center gap-2 cursor-pointer"
        onClick={routeClickHandler("settings")}
      >
        <GearIcon />
        Settings
      </div>
      <div
        className="mt-4 flex items-center gap-2 cursor-pointer"
        onClick={routeClickHandler("frequentlyAskedQuestions")}
      >
        <QuestionMarkIcon />
        FAQ
      </div>
    </div>
  );
};

export default Sidebar;
