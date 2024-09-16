import { cn } from "@/lib/utils";
import { TagsInput } from "react-tag-input-component";

type CustomTagInputProps = {
  isRequired?: boolean;
  id: string;
  labelClass?: string;
  label?: string;
  error?: string | string[];
  placeHolder?: string;
  classNames?: {
    input?: string;
    tag?: string;
  };
  value: string[];
  onChange?: (tags: string[]) => void;
  disabled?: boolean;
};

export default function CustomTagInput({
  id,
  isRequired,
  label,
  labelClass,
  error,
  placeHolder,
  classNames,
  onChange,
  value,
  ...props
}: CustomTagInputProps) {
  return (
    <div className="space-y-1 [&_div]:focus:ring-0">
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
      <TagsInput
        name={id}
        {...props}
        value={value}
        onChange={onChange}
        classNames={classNames}
        placeHolder={placeHolder}
      />
      <span
        className={cn("text-xs ml-2 text-red-500 hidden", error && "block")}
      >
        {error}
      </span>
    </div>
  );
}
