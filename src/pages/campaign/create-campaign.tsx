import { CustomDatePicker } from "@/components/custom-ui";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
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
          error=""
        />
        <div className="grid md:grid-cols-2 gap-6 ">
          <CustomDatePicker />
          <CustomDatePicker />
        </div>
        <div className="flex items-center justify-between">
          <Label
            htmlFor="get-digest"
            className="font-medium text-sm text-[var(--text-color2)]"
          >
            Want to receive daily digest about the campaign?
          </Label>
          <Switch id="get-digest" />
        </div>
      </form>
    </div>
  );
}
