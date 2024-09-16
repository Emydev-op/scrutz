import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isRequired?: boolean;
  id: string;
  labelClass?: string;
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, id, isRequired, label, labelClass, error, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label
          htmlFor={id}
          className={cn(
            "font-medium text-sm text-[var(--text-color2)]",
            isRequired
              ? "after:content-['*'] after:ml-0.5 after:text-red-500"
              : "",
            labelClass
          )}
        >
          {label}
        </label>
        <textarea
          name={id}
          className={cn(
            "flex min-h-[60px] w-full rounded-md border text-[var(--text-color2)] border-[var(--text-color3)] bg-transparent px-3 py-2 text-sm placeholder:text-[var(--text-color3)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--pry-color)] disabled:cursor-not-allowed disabled:opacity-50",
            error &&
              "border-transparent ring-1 ring-red-500 focus-visible:ring-red-500",
            className
          )}
          ref={ref}
          {...props}
        />
        <span
          className={cn("text-xs ml-2 text-red-500 hidden", error && "block")}
        >
          {error}
        </span>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
