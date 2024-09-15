import { ArrowLeftIcon } from "@/assets/icons";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function CampaignId() {
  return (
    <div className="px-4 md:px-10 md:ml-5 py-6 ">
      <div className="inline-flex items-center group">
        <img
          src={ArrowLeftIcon}
          alt="arrow back icon"
          className="group-hover:-translate-x-1 transition-all ease-linear"
        />
        <p className="font-semibold text-[var( --text-color4)]">Back</p>
      </div>

      <header className="flex justify-between items-center mt-6">
        <h4 className="font-semibold text-xl text-[var(--pry-color)]">
          Campaign Information
        </h4>
        <div className="font-medium text-sm inline-flex items-center bg-[var(--btn-bg)] py-2 px-4 rounded">
          <p className="border-r-[1.5px] pr-2 mr-4 border-[var(--text-color3)]">
            Campaign Status
          </p>
          <p className={cn("text-[var(--success-color)]")}>Active</p>
        </div>
      </header>

      <section className="grid gap-6 mt-5 max-w-[680px]">
        <Input
          label="Campaign Name"
          disabled
          type="text"
          value="Fidelity Bank"
        />
        <div className="flex gap-x-6 w-full">
          <Input
            label="Start Date"
            disabled
            type="text"
            value="27/10/2022"
          />{" "}
          <Input
            label="End Date"
            disabled
            type="text"
            value="07/12/2024"
          />
        </div>
      </section>
    </div>
  );
}
