"use client";

import { preBuiltTemplates } from "@/utility/mockdata";
import { useRouter } from "next/navigation";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

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
          <button className="px-5 py-1 text-[14px] rounded cursor-pointer bg-gray-600 text-white">
            Filter
          </button>
          <button className="px-5 py-1 text-[14px] rounded cursor-pointer bg-gray-600 text-white">
            Sort
          </button>
        </div>

        <div>
          <button
            className="px-5 py-1 text-[14px] rounded cursor-pointer bg-gray-900 text-white"
            onClick={createBtnClickHandler}
          >
            Create +
          </button>
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
              <button className="px-2 py-1 text-[12px] rounded cursor-pointer bg-blue-500 text-white">
                Use prompt
              </button>
              <button className="px-2 py-1 border border-black text-[12px] rounded cursor-pointer">
                Customize
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 w-full mt-4">
        <Button>Click Me</Button>
        <Button>Next</Button>
        <Button>Previous</Button>
        <Button>Continue</Button>
        <Button>Play</Button>
        <Button variant="secondary">Go Back</Button>
        <Button variant="secondary">Try Now</Button>
        <Button variant="secondary" disabled={true}>
          Disabled
        </Button>
        <Button variant="success">Download</Button>
        <Button variant="outline">Sign In</Button>
        <Button variant="success">Sign out</Button>
        <Button variant="outline">Book Now</Button>
      </div>
    </div>
  );
};

export default Homepage;
