"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { FaCheck, FaTimes } from "react-icons/fa"; // Import icons
import { Check } from "lucide-react";

const CustomSwitch = React.forwardRef(({ className, ...props }, ref) => {
  const [isChecked, setIsChecked] = React.useState(props.checked || false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (props.onCheckedChange) {
      props.onCheckedChange(!isChecked);
    }
  };

  return (
    <SwitchPrimitives.Root
      className={cn(
        "relative inline-flex items-center h-5 w-10 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-red-700",
        className
      )}
      {...props}
      ref={ref}
      checked={isChecked}
      onCheckedChange={handleToggle}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "block h-4 w-4 rounded-full bg-background shadow-lg transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 "
        )}
      />
      {/* Checkmark icon */}
      {isChecked && (
        <div className="absolute right-[10px] flex items-center justify-center w-full h-full text-white">
          <FaCheck className="w-4 h-3" />
          {/* <Check size={20} /> */}
        </div>
      )}
      {/* Cross icon */}
      {!isChecked && (
        <div className="absolute left-[10px] flex items-center justify-center w-full h-full text-white">
          <FaTimes className="w-4 h-3" />
        </div>
      )}
    </SwitchPrimitives.Root>
  );
});

CustomSwitch.displayName = SwitchPrimitives.Root.displayName;

export { CustomSwitch };
