"use client";

import { preBuiltTemplates } from "@/utility/mockdata";
import { useRouter } from "next/navigation";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import V2_Button from "../V2_Button/V2_Button";

interface ObjType {
  [key: number]: boolean;
}

const Homepage = () => {
  const router = useRouter();
  const [favourites, setFavourites] = useState<ObjType>({});

  useEffect(() => {
    let receivedObj = localStorage.getItem("favouritesArr") ?? "";

    setFavourites(JSON.parse(receivedObj));
  }, []);

  const createBtnClickHandler = () => {
    router.push("/create-prompt");
  };

  const favouriteClickHandler = (receivedIndex: number) => () => {
    let tempFovourites = { ...favourites };

    tempFovourites[receivedIndex] = !tempFovourites[receivedIndex];

    setFavourites(tempFovourites);

    localStorage.setItem("favouritesArr", JSON.stringify(tempFovourites));
  };

  return (
    <div className="p-4 flex flex-wrap gap-4">
      <div className="flex justify-between w-full">
        <div className="flex gap-4">
          <V2_Button customClassName="px-5 py-1 text-[14px] rounded cursor-pointer bg-gray-600 text-white">
            Filter
          </V2_Button>
          <V2_Button customClassName="px-5 py-1 text-[14px] rounded cursor-pointer bg-gray-600 text-white">
            Sort
          </V2_Button>
        </div>

        <div>
          <V2_Button
            customClassName="px-5 py-1 text-[14px] rounded cursor-pointer bg-gray-900 text-white"
            onClick={createBtnClickHandler}
            size="sm"
          >
            Create +
          </V2_Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        {preBuiltTemplates.map((template, templateIndex) => (
          <div
            key={templateIndex}
            className="border border-black px-4 py-2 rounded md:w-[48%] lg:w-[30%]"
          >
            <div
              className="wid-full flex justify-end cursor-pointer"
              onClick={favouriteClickHandler(templateIndex)}
            >
              {favourites[templateIndex] ? <HeartFilledIcon /> : <HeartIcon />}
            </div>
            <p>{template}</p>
            <div className="mt-4 mb-2 flex gap-4 float-right">
              <V2_Button customClassName="px-2 py-1 text-[12px] rounded cursor-pointer bg-blue-500 text-white">
                Use prompt
              </V2_Button>
              <V2_Button customClassName="px-2 py-1 border border-black text-[12px] rounded cursor-pointer">
                Customize
              </V2_Button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 w-full mt-4">
        <V2_Button size="sm">Click Me</V2_Button>
        <V2_Button size="sm">Next</V2_Button>
        <V2_Button size="sm">Previous</V2_Button>
        <V2_Button size="sm">Continue</V2_Button>
        <V2_Button size="sm">Play</V2_Button>

        <V2_Button buttonStyle="secondary" size="sm">
          Go Back
        </V2_Button>
        <V2_Button buttonStyle="secondary" size="sm">
          Try Now
        </V2_Button>
        <V2_Button buttonStyle="secondary" size="sm" disabled={true}>
          Disabled
        </V2_Button>
        <V2_Button buttonStyle="success" size="sm">
          Download
        </V2_Button>
        <V2_Button buttonStyle="outline" size="sm">
          Sign In
        </V2_Button>
        <V2_Button buttonStyle="success" size="sm">
          Sign out
        </V2_Button>
        <V2_Button buttonStyle="outline" size="sm">
          Book Now
        </V2_Button>

        <V2_Button size="sm">Activate Plan</V2_Button>
        <V2_Button size="sm">Continue Setup</V2_Button>
        <V2_Button size="sm">Send Feedback</V2_Button>
        <V2_Button size="sm">View Offers</V2_Button>
        <V2_Button size="sm">Unlock Features</V2_Button>
        <V2_Button size="sm">Join Beta</V2_Button>
      </div>
    </div>
  );
};

export default Homepage;
