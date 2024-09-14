import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isRequired?: boolean;
  id: string;
  labelClass?: string;
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, id, isRequired, label, labelClass, type, error, ...props },
    ref
  ) => {
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
        <input
          type={type}
          id={id}
          {...props}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--text-color3)] outline-none  disabled:cursor-not-allowed disabled:opacity-50",
            "!p-2.5 text-[var(--text-color2)]",
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
Input.displayName = "Input";

export { Input };
