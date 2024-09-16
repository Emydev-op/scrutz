import { cn } from "@/lib/utils";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "react-multi-date-picker/styles/colors/teal.css";
import { CalenderIcon } from "@/assets/icons";

interface CustomDateInputProps {
  label?: string;
  id: string;
  name?: string;
  labelClass?: string;
  className?: string;
  onOpenPickNewDate?: boolean;
  isRequired?: boolean;
  handleChange?: (arg: never) => void;
  selected?: Date | string;
  error?: string;
  touched?: boolean;
  disabled?: boolean;
  portal?: boolean;
  showOnlyMonth?: boolean;
  iconClass?: string;
  inputClass?: string;
  placeholder?: string;
  format?: string;
  onBlur?: () => void;
}

export function CustomDatePicker({
  label,
  id,
  name,
  format,
  labelClass,
  iconClass,
  onOpenPickNewDate = false,
  isRequired,
  handleChange,
  selected,
  error,
  inputClass,
  disabled,
  showOnlyMonth = false,
  placeholder,
  portal = true,
  onBlur,
}: CustomDateInputProps) {
  return (
    <div className="space-y-1" onBlur={onBlur}>
      {label && (
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
      )}
      <div className="relative w-full">
        <DatePicker
          id={id}
          name={name}
          format={format ? format : "YYYY-MM-DD"}
          placeholder={placeholder ? placeholder : "yyy/mm/dd"}
          inputClass={cn(
            "border rounded-[4px] bg-white px-3 py-[7px] border-[var(--text-color3)] text-sm w-full focus-visible:ring-1 focus-visible:ring-[var(--pry-color)] focus-visible:border-transparent focus:outline-none focus:border-[var(--primary-color)]",
            inputClass,
            error && "border-red-500"
          )}
          containerClassName="w-full"
          onOpenPickNewDate={onOpenPickNewDate}
          onChange={handleChange}
          value={selected}
          className="teal"
          disabled={disabled}
          onlyMonthPicker={showOnlyMonth}
          highlightToday={false}
          portal={portal}
        />
        <img
          src={CalenderIcon}
          className={cn(
            "absolute right-3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inline text-[var(--text-color3)]",
            iconClass
          )}
        />
      </div>
      <span
        className={cn("text-xs ml-2 text-red-500 hidden", error && "block")}
      >
        {error}
      </span>
    </div>
  );
}
