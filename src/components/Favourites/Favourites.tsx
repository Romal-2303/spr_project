"use client";

import React from "react";
import { useState, useEffect } from "react";
import { preBuiltTemplates } from "@/utility/mockdata";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import V2_Button from "../V2_Button/V2_Button";

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
                  <V2_Button customClassName="px-2 py-1 text-[12px] rounded cursor-pointer bg-blue-500 text-white">
                    Use prompt
                  </V2_Button>
                  <V2_Button customClassName="px-2 py-1 border border-black text-[12px] rounded cursor-pointer">
                    Customize
                  </V2_Button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 w-full mt-4">
        <V2_Button>Learn More</V2_Button>
        <V2_Button>Get Started</V2_Button>
        <V2_Button>Create QR Code</V2_Button>
        <V2_Button>Generate Report</V2_Button>
        <V2_Button>View in Google Maps</V2_Button>
        <V2_Button>Share Access</V2_Button>
        <V2_Button buttonStyle="success">Save</V2_Button>
        <V2_Button buttonStyle="success">Share on LinkedIn</V2_Button>
        <V2_Button buttonStyle="success">Copy Invite Link</V2_Button>
        <V2_Button buttonStyle="success">Export as PDF</V2_Button>
        <V2_Button buttonStyle="success">Download Image</V2_Button>
        <V2_Button buttonStyle="success">Send Email</V2_Button>
        <V2_Button buttonStyle="success">Upload Document</V2_Button>
        <V2_Button buttonStyle="danger">Delete</V2_Button>
        <V2_Button buttonStyle="warning">Update</V2_Button>
        <V2_Button buttonStyle="success">Send</V2_Button>
        <V2_Button buttonStyle="secondary" disabled={true}>
          Not Allowed
        </V2_Button>
        <V2_Button buttonStyle="outline">Explore</V2_Button>
        <V2_Button buttonStyle="outline">Read More</V2_Button>
        <V2_Button buttonStyle="outline">View Details</V2_Button>
      </div>
    </div>
  );
};

export default Favourites;
