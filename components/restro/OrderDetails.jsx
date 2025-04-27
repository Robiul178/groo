"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function OrderDetails() {
  return (
    <div>
      <section className="lg:w-96 w-full h-screen bg-white border-l flex flex-col">
        {/* Tabs */}
        {/* <Tabs className="w-full">
          <TabList className="bg-stone-600 w-full text-white flex justify-between lg:h-[55px]">
            <Tab
              selectedClassName="bg-stone-700 w-full"
              className="w-full px-4 py-2  cursor-pointer flex items-center justify-center"
            >
              Dine in
            </Tab>
            <Tab
              selectedClassName="bg-stone-700 w-full"
              className="w-full px-4 py-2 cursor-pointer flex items-center justify-center"
            >
              Delivery
            </Tab>
            <Tab
              selectedClassName="bg-stone-700 w-full"
              className="w-full px-4 py-2 cursor-pointer flex items-center justify-center"
            >
              Pickup
            </Tab>
          </TabList>
         
          <table>
            <thead className="border-t border-stone-500">
              <tr>
                <th className="font-bold bg-stone-700 text-white p-1 px-2 w-full">
                  ITEMS
                </th>
                <th className="bg-stone-600 text-white px-5 font-bold border-r border-stone-400">
                  QTY
                </th>
                <th className="bg-stone-600 text-white px-5 font-bold">
                  PRICE
                </th>
              </tr>
            </thead>
          </table>

        </Tabs> */}

        <Tabs className="w-full">
          <TabList className="bg-stone-600 w-full text-white flex justify-between lg:h-[55px]">
            <Tab
              selectedClassName="bg-stone-700 w-full"
              className="w-full px-4 py-2 cursor-pointer flex items-center justify-center"
            >
              Dine in
            </Tab>
            <Tab
              selectedClassName="bg-stone-700 w-full"
              className="w-full px-4 py-2 cursor-pointer flex items-center justify-center"
            >
              Delivery
            </Tab>
            <Tab
              selectedClassName="bg-stone-700 w-full"
              className="w-full px-4 py-2 cursor-pointer flex items-center justify-center"
            >
              Pickup
            </Tab>
          </TabList>

          <TabPanel>
            <table className="w-full border-collapse">
              <thead className="border-t border-stone-500">
                <tr>
                  <th className="font-bold bg-stone-700 text-white p-1 px-2 w-full text-start">
                    ITEMS
                  </th>
                  <th className="bg-stone-600 text-white px-5 font-bold border-r border-stone-400 text-center">
                    QTY
                  </th>
                  <th className="bg-stone-600 text-white px-5 font-bold text-center">
                    PRICE
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Add Dine-in specific rows here */}
                <tr>
                  <td className="p-2 border-t border-stone-500">Burger</td>
                  <td className="text-center border-t border-stone-500">2</td>
                  <td className="text-center border-t border-stone-500 p-2">
                    $10
                  </td>
                </tr>
              </tbody>
            </table>
          </TabPanel>

          <TabPanel>
            <table className="w-full border-collapse">
              <thead className="border-t border-stone-500">
                <tr>
                  <th className="font-bold bg-stone-700 text-white p-1 px-2 w-full  text-start">
                    ITEMS
                  </th>
                  <th className="bg-stone-600 text-white px-5 font-bold border-r border-stone-400 text-center">
                    QTY
                  </th>
                  <th className="bg-stone-600 text-white px-5 font-bold text-center">
                    PRICE
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Add Delivery specific rows here */}
                <tr>
                  <td className="p-2 border-t border-stone-500">Pizza</td>
                  <td className="text-center border-t border-stone-500">1</td>
                  <td className="text-center border-t border-stone-500">$15</td>
                </tr>
              </tbody>
            </table>
          </TabPanel>

          <TabPanel>
            <table className="w-full border-collapse">
              <thead className="border-t border-stone-500">
                <tr>
                  <th className="font-bold bg-stone-700 text-white p-1 px-2 w-full  text-start">
                    ITEMS
                  </th>
                  <th className="bg-stone-600 text-white px-5 font-bold border-r border-stone-400 text-center">
                    QTY
                  </th>
                  <th className="bg-stone-600 text-white px-5 font-bold text-center">
                    PRICE
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Add Pickup specific rows here */}
                <tr>
                  <td className="p-2 border-t border-stone-500">Salad</td>
                  <td className="text-center border-t border-stone-500">3</td>
                  <td className="text-center border-t border-stone-500">$12</td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
        </Tabs>

        {/* Save and Print */}
        <div className="mt-auto px-2">
          <button className="w-full p-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600">
            Save and Print
          </button>
        </div>
      </section>
    </div>
  );
}
