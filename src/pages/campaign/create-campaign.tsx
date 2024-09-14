import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreateCampaign() {
  return (
    <div className="px-10 py-6 ">
      <h2 className="text-xl font-bold text-[var(--pry-color)]">
        Create New Campaign
      </h2>
      <form className="bg-white mt-4 max-w-[680px] space-y-4">
        <Input
          label="Campaign Name"
          id="name"
          type="text"
          placeholder="e.g  The Future is now"
          labelClass=""
          isRequired
          error=""
        />
        <Textarea
          label="Campaign Description"
          id="description"
          placeholder="Please add a description to your campaign"
          className="min-h-[112px]"
          labelClass=""
          isRequired
          error=""
        />
        <div className="grid md:grid-cols-2 gap-6 ">

        </div>
      </form>
    </div>
  );
}
