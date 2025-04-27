"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";

import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus } from "lucide-react";
import "../../style/style.css";

const BuySellModal = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const handleInputChange = (e) => {
    // setInputValue(e.target.value);
    const value = e.target.value;
    if (value <= 100000) {
      setInputValue(value);
    } else {
      setErrorMessage("Maximum allowed ammount is 100,000");
    }
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="max-h-9 py-2 bg-slate-800 text-white flex items-center font-bold justify-center border px-4 ">
          <Plus size={20} className="text-gray-400 mr-2" />
          New Report
        </button>
      </DialogTrigger>
      <DialogContent className="w-[300px] h-auto px-4 py-2">
        <DialogTitle className="text-xl font-bold">
          {" "}
          Deposit Ammount
        </DialogTitle>
        <div className="w-[270px] h-auto pb-2">
          <div className="text-center">
            <div className="flex justify-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 7.5.415-.207a.75.75 0 0 1 1.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 0 0 5.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>

              <input
                placeholder="0"
                type="number"
                max="10"
                value={inputValue}
                onChange={handleInputChange}
                style={{ width: `${inputValue.length || 1}ch` }}
                className="text-5xl font-bold my-4 w-full focus:outline-none transition-all placeholder:font-bold placeholder:text-5xl h-12 "
              />

              {/* <input
                placeholder="0"
                type="number"
                max={100000}
                value={inputValue}
                onChange={handleInputChange}
                style={{ width: `${inputValue.length || 1}ch` }}
                className="text-5xl font-bold  my-4 w-full focus:outline-none transition-all placeholder:font-bold placeholder:text-5xl h-12"
              /> */}
            </div>
            <p className="text-red-500 text-xs font-semibold ">
              {errorMessage}
            </p>
            <p className="py-3 text-sm text-slate-600">
              You can deposite $1,000 to $100,000
            </p>
          </div>
          {/* <div className="py-5">
            <RadioGroup
              // defaultValue="comfortable"
              className="border "
              value={selectedValue}
              onChange={(e) => handleSelect(e.target.value)}
            >
              <div
                className={`flex items-center space-x-2 border-b px-3 h-12 cursor-pointer ${
                  selectedValue === "bkash"
                    ? "bg-blue-100 border border-blue-400"
                    : ""
                }`}
                onClick={() => handleSelect("bkash")}
              >
                <RadioGroupItem
                  value="bkash"
                  id="r1"
                  className=""
                  checked={selectedValue === "bkash"}
                  onChange={() => {}}
                />
                <Label htmlFor="r1" className="w-full ">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="font-semibold text-md mt-1">bKash</h2>
                    </div>
                    <div>
                      <Image
                        // src="/assets/bkash.png"
                        src="/assets/bKash.svg"
                        alt=""
                        width={400}
                        height={400}
                        className="w-16 h-fit"
                      />
                    </div>
                  </div>
                </Label>
              </div>
              <div
                className={`flex items-center space-x-2 border-b px-3 h-12 cursor-pointer ${
                  selectedValue === "nagad"
                    ? "bg-blue-100 border border-blue-400"
                    : ""
                }`}
                onClick={() => handleSelect("nagad")}
              >
                <RadioGroupItem
                  value="nagad"
                  id="r2"
                  checked={selectedValue === "nagad"}
                  onChange={() => {}}
                />
                <Label htmlFor="r2" className="w-full">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="font-semibold text-md mt-1">Nagad</h2>
                    </div>
                    <div>
                      <Image
                        src="/assets/nagad.svg"
                        alt=""
                        width={400}
                        height={400}
                        className="w-16 h-fit"
                      />
                    </div>
                  </div>
                </Label>
              </div>
              <div
                className={`flex items-center space-x-2 border-b px-3 h-12 cursor-pointer ${
                  selectedValue === "upay"
                    ? "bg-blue-100 border border-blue-400"
                    : ""
                }`}
                onClick={() => handleSelect("upay")}
              >
                <RadioGroupItem
                  value="upay"
                  id="r3"
                  checked={selectedValue === "upay"}
                  onChange={() => {}}
                />
                <Label htmlFor="r3" className="w-full">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="font-semibold text-md mt-[14px]">Upay</h2>
                    </div>
                    <div>
                      <Image
                        src="/assets/Upay_logo.png"
                        alt=""
                        width={400}
                        height={400}
                        className="w-6 h-fit  mr-4"
                      />
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div> */}
          <div className="flex flex-col  ">
            <div className="my-4">
              <div className="flex flex-row gap-1 items-center">
                <Checkbox
                  id="terms"
                  checked={isChecked}
                  onCheckedChange={handleCheckboxChange}
                  className="mt-[1px]"
                />
                <Label htmlFor="terms" className="text-gray-700">
                  I agree to the terms and conditions
                </Label>
              </div>
            </div>

            <button
              type="submit"
              disabled={!isChecked}
              className={`w-full text-slate-800 font-semibold transition duration-200  ${
                isChecked ? "bg-slate-200 " : "bg-slate-50 cursor-not-allowed"
              }`}
            >
              <span className="flex gap-2 items-center justify-center">
                Deposite with{" "}
                <Image
                  src="/assets/bKash.svg"
                  alt=""
                  width={200}
                  height={200}
                  className="w-16 h-fit"
                />
              </span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BuySellModal;
