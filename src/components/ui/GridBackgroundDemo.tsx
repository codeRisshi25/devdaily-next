import { cn } from "@/lib/utils";
import React from "react";

export default function GridBackgroundDemo({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Debug border to see container boundaries */}
      <div
        className={cn(
          "fixed inset-0 z-[-2] h-10vh", // Ensure it's behind everything with z-[-2]
          "[background-size:50px_50px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      
      {/* Radial gradient overlay */}
      <div className="pointer-events-none fixed inset-0 z-[-1] bg-white/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black/50"></div>
      
      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}