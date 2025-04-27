"use client";

import React, { useState } from "react";
import {
  Search,
  ArrowDownWideNarrow,
  Filter,
  Plus,
  ChartPie,
  Eye,
} from "lucide-react";
import BuySellModal from "../sections/buy-sell-modal";

const reports = [
  { id: 1, title: "Monthly Sales Report", time: "2min ago" },
  { id: 2, title: "Annual Growth Analysis", time: "2min ago" },
  { id: 3, title: "Customer Feedback", time: "2min ago" },
  { id: 4, title: "Expense Report Q1", time: "2min ago" },
  { id: 5, title: "Employee Performance", time: "2min ago" },
];

const ReportCommonCard = ({ id, title, time, isSelected, onClick }) => (
  <div
    onClick={() => onClick(id)}
    className={`border  shadow-sm mb-2 cursor-pointer ${
      isSelected ? "bg-blue-100 border-blue-500" : "bg-white"
    }`}
  >
    <div className="p-3">
      <ChartPie size={24} />
      <h1 className="mt-2 text-lg font-bold text-slate-800">{title}</h1>
      <p className="text-xs">Created {time}</p>
    </div>
    <div className="flex gap-1 border-t p-3 bg-gray-100 ">
      <Eye size={18} /> <p className="text-xs">317 views</p>
    </div>
  </div>
);

const ReportPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredReports, setFilteredReports] = useState(reports);
  const [selectedCard, setSelectedCard] = useState(null);

  // Handle Search Input Change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredReports(
      reports.filter((report) => report.title.toLowerCase().includes(query))
    );
  };

  const handleCardClick = (id) => {
    setSelectedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="p-5">
      <div className="md:flex justify-between">
        <div className="md:flex gap-5 items-center">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Reports</h2>
            <p className="text-xs text-slate-600">
              {filteredReports.length} active report(s)
            </p>
          </div>
          <div className="md:h-9 max-w-64 flex items-center border border-slate-100 mt-1  px-2 shadow-sm max-sm:mt-2">
            <Search size={20} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search.."
              value={searchQuery}
              onChange={handleSearch}
              className="ml-2 outline-none bg-transparent text-slate-800"
            />
          </div>
        </div>
        <div className="flex gap-5 mt-2 max-sm:mt-2">
          <div className="md:h-9 flex gap-3 text-slate-800 font-bold border px-2  shadow-sm">
            <button className="flex items-center justify-center gap-2">
              <ArrowDownWideNarrow size={20} className="text-gray-400" /> Sort
            </button>
            <div className="w-[0.5px] md:h-9 bg-slate-300"></div>
            <button className="flex gap-2 items-center justify-center">
              <Filter size={20} className="text-gray-400" />
              Filter
            </button>
          </div>
          <div>
            <BuySellModal />
          </div>
        </div>
      </div>
      <div className="mt-10 grid md:grid-cols-3 max-sm:grid-cols-1 gap-5">
        {filteredReports.length > 0 ? (
          filteredReports.map((report) => (
            <ReportCommonCard
              key={report.id}
              id={report.id}
              title={report.title}
              time={report.time}
              isSelected={selectedCard === report.id}
              onClick={handleCardClick}
            />
          ))
        ) : (
          <p className="text-slate-600 mt-4">No reports found.</p>
        )}
      </div>
    </div>
  );
};

export default ReportPage;
