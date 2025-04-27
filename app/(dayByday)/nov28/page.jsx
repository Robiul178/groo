"use client";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { Plus } from "lucide-react";
import Image from "next/image";

export default function ButtonList() {
  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    { id: 1, icon: "/assets/button-list/document.png", label: "My Files" },
    {
      id: 2,
      icon: "/assets/button-list/google-drive.png",
      label: "Google Drive",
    },
    {
      id: 3,
      icon: "/assets/button-list/google-photos.png",
      label: "Google Photos",
    },
    { id: 4, icon: "/assets/button-list/link.png", label: "URL Image" },
    { id: 5, icon: "/assets/button-list/dropbox.png", label: "Dropbox" },
    { id: 6, icon: "/assets/button-list/unsplash.png", label: "Unsplash" },
    { id: 7, icon: "/assets/button-list/deviantart.png", label: "DeviantArt" },
    { id: 8, icon: "/assets/button-list/facebook.png", label: "Facebook" },
    {
      id: 9,
      icon: "/assets/button-list/shutterstock.png",
      label: "Shutterstock",
    },
    {
      id: 10,
      icon: "/assets/button-list/cloud-computing.png",
      label: "Upload",
    },
  ];

  return (
    <div className="flex justify-evenly px-44 mt-10 h-screen">
      <div className="w-40 flex flex-col gap-2">
        {buttons.map((button) => (
          <Button
            key={button.id}
            className={`h-8 flex justify-start text-xs font-semibold transition-all duration-300 ${
              activeButton === button.id ? "bg-slate-100" : ""
            }`}
            onClick={() => setActiveButton(button.id)}
          >
            <img src={button.icon} alt={button.label} width={15} height={15} />
            {button.label}
          </Button>
        ))}
      </div>

      {/* domain section */}
      <div className="h-fit border p-5 inline-block text-slate-600">
        <div className="mb-2">
          <Button className="w-full h-8 bg-slate-800 text-white rounded">
            <Plus size={24} /> Add a new Project
          </Button>
        </div>
        <div className=" mb-1">
          <Button className=" w-full h-8 flex justify-start">
            <Image
              src="/assets/services/459982-PFO8XL-229.jpg"
              alt="img"
              width={200}
              height={200}
              className="w-6 h-6 rounded"
            />
            <p className="text-sm font-semibold">websitename.com</p>
          </Button>
        </div>
        <div className="flex gap-1 items-center ml-5">
          <Button className="h-8">
            <Image
              src="/assets/services/459982-PFO8XL-229.jpg"
              alt="img"
              width={200}
              height={200}
              className="w-6 h-6 rounded"
            />
            <p className="text-sm font-semibold">websitename.subdomain.com</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
