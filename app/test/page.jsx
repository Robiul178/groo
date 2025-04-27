import InfoForm from "@/components/skeleton/info-form";
import RechartForTRickyTraveller from "@/components/skeleton/rechart-trickyTraveller";
import InfoForm2 from "@/components/skeleton/try";
import React from "react";

export default function page() {
  return (
    <div
      className="h-screen flex w-screen items-center justify-end pr-32 bg-cover bg-bottom"
      // style={{
      //   backgroundImage: "url('/assets/mountaineering-6710154_1920.png')",
      // }}
    >
      <RechartForTRickyTraveller />
      {/* <InfoForm /> */}
      {/* <InfoForm2 /> */}
    </div>
  );
}
