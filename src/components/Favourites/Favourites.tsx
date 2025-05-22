"use client";

import React from "react";
import { useState, useEffect } from "react";
import { preBuiltTemplates } from "@/utility/mockdata";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import Button from "../Button/Button";

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
                  <Button className="px-2 py-1 text-[12px] rounded cursor-pointer bg-blue-500 text-white">
                    Use prompt
                  </Button>
                  <Button className="px-2 py-1 border border-black text-[12px] rounded cursor-pointer">
                    Customize
                  </Button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 w-full mt-4">
        <Button>Learn More</Button>
        <Button>Get Started</Button>
        <Button>Create QR Code</Button>
        <Button>Generate Report</Button>
        <Button>View in Google Maps</Button>
        <Button>Share Access</Button>
        <Button variant="success">Save</Button>
        <Button variant="success">Share on LinkedIn</Button>
        <Button variant="success">Copy Invite Link</Button>
        <Button variant="success">Export as PDF</Button>
        <Button variant="success">Download Image</Button>
        <Button variant="success">Send Email</Button>
        <Button variant="success">Upload Document</Button>
        <Button variant="danger">Delete</Button>
        <Button variant="warning">Update</Button>
        <Button variant="success">Send</Button>
        <Button variant="secondary" disabled={true}>
          Not Allowed
        </Button>
        <Button variant="outline">Explore</Button>
        <Button variant="outline">Read More</Button>
        <Button variant="outline">View Details</Button>
      </div>
    </div>
  );
};

export default Favourites;
