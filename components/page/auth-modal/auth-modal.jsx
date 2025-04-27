"use client";
import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/auth-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle } from "lucide-react";
import ImageGrid from "./dynamic/ImageGrid";

export default function AuthModal() {
  const colourOptions = [
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];

  const [selectableData, setSelectableData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [inputGroups, setInputGroups] = useState([{ search: "", replace: "" }]);
  const [forAlert, setForAlert] = useState(false);

  const handleSelectChange = (selectedOptions) => {
    if (selectedOptions.length <= pageNumber) {
      setSelectableData(selectedOptions);
    } else {
      setForAlert(true);
    }
  };

  const handleAddGroup = () => {
    if (selectableData) {
      setInputGroups([...inputGroups, { search: "", replace: "" }]);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="w-[90%] h-[90%] p-5">
          <Tabs defaultValue="account" className="w-full">
            <div className="w-full h-full flex gap-3">
              <div className="w-[20%] h-full border-r">
                <ScrollArea className="h-full w-full pr-2">
                  <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
                    <Label htmlFor="page">Page Number</Label>
                    <Input
                      id="page"
                      type="number"
                      placeholder="How many pages"
                      value={pageNumber}
                      onChange={(e) => setPageNumber(e.target.value)}
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
                    <Label htmlFor="page">Search</Label>
                    <Input
                      id="page"
                      type="search"
                      placeholder="Write something...."
                    />
                  </div>
                  {/* <div>
                    <Label htmlFor="replace">Replace </Label>
                    <CreatableSelect
                      htmlFor="replace"
                      isMulti
                      options={colourOptions}
                      onChange={(e) => setSelectableData(e)}
                    />
                  </div> */}

                  <div>
                    <Label htmlFor="replace">Replace</Label>
                    <CreatableSelect
                      htmlFor="replace"
                      isMulti
                      options={colourOptions}
                      value={selectableData}
                      onChange={handleSelectChange}
                    />
                  </div>
                  <div className="py-3">
                    {forAlert ? (
                      <div className="w-full border text-red-700 p-1 pl-3 border-red-800">
                        <div className="flex gap-1 ">
                          <AlertCircle size={16} />
                          <p className="text-xs font-bold">ERROR</p>
                        </div>
                        <p className="text-xs">
                          {" "}
                          You can add up to {`${pageNumber}`} items.{" "}
                        </p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="h-[1px] w-full bg-gray-500 my-3"></div>
                  <div className="">
                    {selectableData?.map((text, i) => (
                      <TabsList key={i}>
                        <div className="w-full mb-1">
                          <TabsTrigger value={text.value}>
                            {text.label}
                          </TabsTrigger>
                        </div>
                      </TabsList>
                    ))}
                  </div>
                </ScrollArea>
              </div>
              <div className="w-[80%] ">
                <ScrollArea className="h-full w-full">
                  <div>
                    {selectableData?.map((text, i) => (
                      <TabsContent key={i} value={text.value}>
                        <div className="">
                          <p className="text-2xl border-b-4 border-blue-800 inline">
                            {text.label}
                          </p>
                          <div className="py-4">
                            <p className="">Change more words</p>
                          </div>
                          <div className="grid grid-cols-4 gap-4 mt-4">
                            {inputGroups.map((group, index) => (
                              <div
                                key={index}
                                className="border p-2 w-full border-black"
                              >
                                <input
                                  type="text"
                                  placeholder="Search"
                                  value={group.search}
                                  onChange={(e) => {
                                    const newGroups = [...inputGroups];
                                    newGroups[index].search = e.target.value;
                                    setInputGroups(newGroups);
                                  }}
                                  className="border w-full border-slate-500 px-2 py-[2px] mb-1"
                                />{" "}
                                <br />
                                <input
                                  type="text"
                                  placeholder="Replace"
                                  value={group.replace}
                                  onChange={(e) => {
                                    const newGroups = [...inputGroups];
                                    newGroups[index].replace = e.target.value;
                                    setInputGroups(newGroups);
                                  }}
                                  className="border w-full border-slate-500 px-2 py-[2px]"
                                />
                              </div>
                            ))}
                            <div className="col-span-1">
                              <Button
                                onClick={handleAddGroup}
                                className=" border w-full h-[80px] flex items-center justify-center px-5 py-1 border-slate-800"
                              >
                                <Plus size={64} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                    <div className="mt-5">
                      <h2 className="">Replace unwanted image.</h2>
                      <div className="grid grid-cols-4 gap-3 mt-3">
                        <ImageGrid url="/assets/flower/quino-al--3KfR1GVKXY-unsplash.jpg" />
                        <ImageGrid url="/assets/flower/quino-al-BlMj6RYy3c0-unsplash.jpg" />
                        <ImageGrid url="/assets/flower/quino-al--3KfR1GVKXY-unsplash.jpg" />
                        <ImageGrid url="/assets/flower/quino-al-BlMj6RYy3c0-unsplash.jpg" />
                        <ImageGrid url="/assets/flower/quino-al--3KfR1GVKXY-unsplash.jpg" />
                        <ImageGrid url="/assets/flower/quino-al-BlMj6RYy3c0-unsplash.jpg" />
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}
