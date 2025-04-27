import { DataTableForTransaction } from "@/components/page/transaction/data-table/data-table";
import React from "react";

export default function page() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold py-3">Transaction</h2>
      <DataTableForTransaction />
    </div>
  );
}
