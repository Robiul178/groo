import MainNav from "@/components/page/dash-board/main-div";
import ReportCard from "@/components/page/report-card/report-card";
import React from "react";

const UserInstances = () => {
  return (
    <div>
      <div className="p-4">
        <MainNav />
      </div>
      <ReportCard />
    </div>
  );
};

export default UserInstances;
