import { Input } from "@/components/ui/input";

export default function CreateCampaign() {
  return (
    <div className="px-10 py-6 ">
      <h2 className="text-xl font-bold text-[var(--pry-color)]">
        Create New Campaign
      </h2>
      <form className="bg-white mt-4 max-w-[680px]">
        <Input
          label="Campaign Name"
          id="name"
          placeholder="e.g  The Future is now"
          labelClass=""
          isRequired
          error=""
        />
      </form>
    </div>
  );
}
