"use client";

import React from "react";
import { useState, useEffect } from "react";
import { preBuiltTemplates } from "@/utility/mockdata";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";

interface ObjType {
  [key: number]: boolean;
}

const Favourites = () => {
  const [favourites, setFavourites] = useState<ObjType>({});

  useEffect(() => {
    let receivedObj = localStorage.getItem("favouritesArr") ?? "";

    setFavourites(JSON.parse(receivedObj));
  }, []);

  const favouriteClickHandler = (receivedIndex: number) => () => {
    let tempFovourites = { ...favourites };

    tempFovourites[receivedIndex] = !tempFovourites[receivedIndex];

    setFavourites(tempFovourites);

    localStorage.setItem("favouritesArr", JSON.stringify(tempFovourites));
  };

  return (
    <div className="p-4 flex flex-wrap gap-4">
      <div className="flex flex-wrap gap-4 mt-10">
        {preBuiltTemplates.map((template, templateIndex) => (
          <>
            {favourites[templateIndex] ? (
              <div
                key={templateIndex}
                className="border border-black px-4 py-2 rounded md:w-[48%] lg:w-[30%]"
              >
                <div
                  className="wid-full flex justify-end cursor-pointer"
                  onClick={favouriteClickHandler(templateIndex)}
                >
                  {favourites[templateIndex] ? (
                    <HeartFilledIcon />
                  ) : (
                    <HeartIcon />
                  )}
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
            ) : (
              <></>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
