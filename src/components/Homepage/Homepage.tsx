"use client";

import { preBuiltTemplates } from "@/utility/mockdata";
import { useRouter } from "next/navigation";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import Button from '../Button/Button';

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
          <Button className="px-5 py-1 text-[14px] rounded cursor-pointer bg-gray-600 text-white">
            Filter
          </Button>
          <Button className="px-5 py-1 text-[14px] rounded cursor-pointer bg-gray-600 text-white">
            Sort
          </Button>
        </div>

        <div>
          <Button
            className="px-5 py-1 text-[14px] rounded cursor-pointer bg-gray-900 text-white"
            onClick={createBtnClickHandler}
            size="sm"
          >
            Create +
          </Button>
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
              <Button className="px-2 py-1 text-[12px] rounded cursor-pointer bg-blue-500 text-white">
                Use prompt
              </Button>
              <Button className="px-2 py-1 border border-black text-[12px] rounded cursor-pointer">
                Customize
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 w-full mt-4">
        <Button size="sm">Click Me</Button>
        <Button size="sm">Next</Button>
        <Button size="sm">Previous</Button>
        <Button size="sm">Continue</Button>
        <Button size="sm">Play</Button>

        <Button variant="secondary" size="sm">
          Go Back
        </Button>
        <Button variant="secondary" size="sm">
          Try Now
        </Button>
        <Button variant="secondary" size="sm" disabled={true}>
          Disabled
        </Button>
        <Button variant="success" size="sm">
          Download
        </Button>
        <Button variant="outline" size="sm">
          Sign In
        </Button>
        <Button variant="success" size="sm">
          Sign out
        </Button>
        <Button variant="outline" size="sm">
          Book Now
        </Button>

        <Button size="sm">Activate Plan</Button>
        <Button size="sm">Continue Setup</Button>
        <Button size="sm">Send Feedback</Button>
        <Button size="sm">View Offers</Button>
        <Button size="sm">Unlock Features</Button>
        <Button size="sm">Join Beta</Button>
      </div>
    </div>
  );
};

export default Homepage;
