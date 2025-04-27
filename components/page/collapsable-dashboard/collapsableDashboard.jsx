"use client";

import React, { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Button } from "@nextui-org/react";
import { GripVertical, LayoutDashboard } from "lucide-react";

export default function CollapsableDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="h-screen ">
      <PanelGroup direction="horizontal">
        <Panel
          collapsible={true}
          collapsedSize={4}
          defaultSize={20}
          minSize={15}
          maxSize={20}
          className="!overflow-visible"
          onCollapse={() => setCollapsed(true)}
          onExpand={() => setCollapsed(false)}
        >
          <ScrollArea.Root className="h-full bg-slate-100 text-white ">
            <ScrollArea.Viewport className="h-full p-4">
              <div className="space-y-4">
                <SidebarItem collapsed={collapsed} text="Dashboard" />
                <SidebarItem collapsed={collapsed} text="Home" />
                <SidebarItem collapsed={collapsed} text="Home" />
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              orientation="vertical"
              className="bg-gray-600 cursor-pointer w-1 hover:bg-gray-500"
            >
              <ScrollArea.Thumb className="flex items-center justify-center"></ScrollArea.Thumb>
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </Panel>

        <PanelResizeHandle className="relative  w-0.5 bg-gray-300 cursor-col-resize">
          <div className="bg-white shadow rounded absolute top-[50%] right-[-7px] py-1">
            <GripVertical
              className="text-slate-800 "
              size={18}
              strokeWidth={3}
            />
          </div>
        </PanelResizeHandle>

        <Panel defaultSize={80}>
          <div className="h-full p-4 bg-gray-100">Main Content</div>
        </Panel>
      </PanelGroup>
    </div>
  );
}

function SidebarItem({ collapsed, text }) {
  return (
    <Button
      className={`w-full bg-white text-slate-800 ${
        collapsed ? "px-2 rounded " : " justify-start"
      }`}
      isIconOnly={collapsed}
      startContent={<LayoutDashboard size={20} />}
    >
      {collapsed ? "" : text}
    </Button>
  );
}
