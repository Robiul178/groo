"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";

export default function TextSizeInput() {
  const options = [8, 9, 10, 11, 12, 14].map((size) => ({
    value: size,
    label: size,
  }));

  const [textSize, setTextSize] = useState(12);

  const handleIncrease = () => setTextSize((prev) => prev + 1);
  const handleDecrease = () =>
    setTextSize((prev) => Math.max(prev - 1, options[0].value));

  const handleSelectChange = (selectedOption) => {
    if (selectedOption) setTextSize(selectedOption.value);
  };
  useEffect(() => {
    console.log(textSize, "textSize");
  }, [textSize]);

  return (
    <div className="flex items-center space-x-2">
      <button onClick={handleDecrease} className="text-xl">
        -
      </button>

      <Select
        value={{ value: textSize, label: textSize }}
        onChange={handleSelectChange}
        options={options}
        isSearchable={false}
        className="w-10"
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
      />
      <button onClick={handleIncrease} className="text-xl">
        +
      </button>
    </div>
  );
}
