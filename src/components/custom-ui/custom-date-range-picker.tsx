import { cn } from "@/lib/utils";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "react-multi-date-picker/styles/colors/teal.css";
import { CalenderIcon } from "@/assets/icons";
import { CustomDateInputProps } from "./custom-date-picker";
import { ChevronDown } from "lucide-react";

export function CustomDateRangePicker({
  format,
  iconClass,
  onOpenPickNewDate = false,
  handleChange,
  value,
  error,
  inputClass,
  disabled,
  showOnlyMonth = false,
  placeholder,
  portal = true,
}: CustomDateInputProps) {
  return (
    <div className="relative w-[305px] min-w-56 border rounded-[4px]">
      <label
        htmlFor="picker"
        className="absolute left-[54px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex space-x-2 items-center font-medium text-xs text-[var(--pry-color)] pr-2 border-r-2 border-[var(--bg-color3)]"
      >
        <img src={CalenderIcon} className="size-5" /> Date Range
      </label>
      <DatePicker
        id="picker"
        name="picker"
        format={format ? format : "YYYY-MM-DD"}
        placeholder={placeholder ? placeholder : "yyy/mm/dd"}
        range
        numberOfMonths={2}
        dateSeparator=" - "
        inputClass={cn(
          " bg-transparnt max-w-[250px] px-3 pt-2.5 mb-0 border-transparent text-xs font-medium text-[var(--text-color2)] w-[200px] float-right focus-visible:ring-1 focus-visible:ring-[var(--pry-color)] focus-visible:border-transparent focus:outline-none focus:border-transparent !focus-visible:border-transparent",
          inputClass,
          error && "border-red-500"
        )}
        containerClassName="w-full"
        onOpenPickNewDate={onOpenPickNewDate}
        onChange={handleChange}
        value={value}
        className="teal"
        disabled={disabled}
        onlyMonthPicker={showOnlyMonth}
        highlightToday={false}
        portal={portal}
      />
      <ChevronDown
        className={cn(
          "absolute size-6 -right-1.5 text-[var(--pry-color)] top-1/2 transform -translate-x-1/2 -translate-y-1/2 inline",
          iconClass
        )}
      />
    </div>
  );
}
