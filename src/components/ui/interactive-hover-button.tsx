import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-gold-3/40 bg-transparent p-2.5 px-6 text-center text-sm font-semibold text-gold-2 transition-all duration-300 hover:border-gold-2",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <div className="bg-gradient-to-tr from-gold-3 to-gold-1 h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="text-bg absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </button>
  );
}
