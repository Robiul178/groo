import { Input } from "@nextui-org/input";
import React from "react";

const Search = () => {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
};

export default Search;
