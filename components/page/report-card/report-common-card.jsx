"use client";

import { ChartPie, Eye } from "lucide-react";
import React, { useState } from "react";

const ClickableCard = ({ title, time, value, selectedCard, onSelect }) => {
  return (
    <div
      className={`text-slate-400 border  rounded-xl shadow-sm cursor-pointer  ${
        selectedCard === value ? "border-2 border-blue-500" : "border"
      }`}
      onClick={() => onSelect(value)}
    >
      <div className="p-3">
        <ChartPie size={24} />
        <h1 className="mt-2 text-lg font-bold text-slate-800">{title}</h1>
        <p className="text-xs">Created {time}</p>
      </div>
      <div className="flex gap-1 border-t p-3 bg-gray-100 rounded-b-xl">
        <Eye size={18} /> <p className="text-xs">317 views</p>
      </div>
    </div>
  );
};

const ReportCommonCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (value) => {
    setSelectedCard(value);
  };

  return (
    <div className="mt-10 grid md:grid-cols-3 max-sm:grid-cols-1 gap-5">
      <ClickableCard
        title="Sample Report"
        time="2min ago"
        value="card1"
        selectedCard={selectedCard}
        onSelect={handleCardSelect}
      />
      <ClickableCard
        title="Voluptas"
        time="2min ago"
        value="card2"
        selectedCard={selectedCard}
        onSelect={handleCardSelect}
      />
      <ClickableCard
        title="Dolorum"
        time="2min ago"
        value="card3"
        selectedCard={selectedCard}
        onSelect={handleCardSelect}
      />
      <ClickableCard
        title="Asperiores"
        time="2min ago"
        value="card4"
        selectedCard={selectedCard}
        onSelect={handleCardSelect}
      />
      <ClickableCard
        title="Fugit"
        time="2min ago"
        value="card5"
        selectedCard={selectedCard}
        onSelect={handleCardSelect}
      />
      <ClickableCard
        title="Explicabo"
        time="2min ago"
        value="card6"
        selectedCard={selectedCard}
        onSelect={handleCardSelect}
      />
      <ClickableCard
        title="Untitled Report"
        time="2min ago"
        value="card7"
        selectedCard={selectedCard}
        onSelect={handleCardSelect}
      />
    </div>
  );
};

export default ReportCommonCard;
