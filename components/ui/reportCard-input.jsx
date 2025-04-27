import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-6 w-full bg-transparent px-2 py-1  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground  placeholder:text-slate-400  placeholder:font-semibold focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
