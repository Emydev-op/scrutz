import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SelectProps {
  isRequired?: boolean;
  id: string;
  labelClass?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  option?: { label: string; value: string }[];
}

export default function CustomSelect({
  className,
  id,
  isRequired,
  label,
  option,
  defaultValue,
  onValueChange,
  placeholder,
  labelClass,
  error,
  ...props
}: SelectProps) {
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
      <Select
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        {...props}
      >
        <SelectTrigger
          name={id}
          className={cn("!ring-[var(--pry-color)]", className)}
          {...props}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel></SelectLabel>
            {option?.map((data) => (
              <SelectItem
                key={data?.value}
                value={data?.value}
                className="capitalize"
              >
                {data?.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <span
        className={cn("text-xs ml-2 text-red-500 hidden", error && "block")}
      >
        {error}
      </span>
    </div>
  );
}
