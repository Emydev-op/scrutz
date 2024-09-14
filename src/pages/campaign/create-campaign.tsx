import { CustomDatePicker } from "@/components/custom-ui";
import CustomSelect from "@/components/custom-ui/custom-select";
import CustomTagInput from "@/components/custom-ui/custom-tag-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { routes } from "@/utlis/routes";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateCampaign() {
  const [selected, setSelected] = useState(["papaya"]);
  const dailyDigestOptions = [
    { label: "daily", value: "daily" },
    { label: "weekly", value: "weekly" },
    { label: "monthly", value: "monthly" },
    { label: "quaterly", value: "quaterly" },
  ];
  return (
    <form className="px-4 md:px-10 md:ml-5 py-6 ">
      <h2 className="text-xl font-bold text-[var(--pry-color)]">
        Create New Campaign
      </h2>
      <div className="bg-white mt-4 pb-2.5 mb-10 max-w-[680px] space-y-4">
        <Input
          label="Campaign Name"
          id="campaignName"
          type="text"
          placeholder="e.g  The Future is now"
          labelClass=""
          isRequired
          error=""
        />
        <Textarea
          label="Campaign Description"
          id="campaignDescription"
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
        <div className="w-full">
          <CustomTagInput
            id="linkedKeywords"
            placeHolder="To add keywords, type your keyword and press enter"
            value={selected}
            onChange={setSelected}
            isRequired
            label="Linked Keywords"
            error=""
            classNames={{
              input:
                "!w-[100%] bg-transparent border-2 placeholder:text-sm placeholder:text-[var(--text-color3)] ",
              tag: "!text-white !bg-[var(--pry-color)] ",
            }}
          />
        </div>
        <CustomSelect
          className="w-[180px] shadow-none rounded min-h-10 focus-visible:ring-0 hover:border-[var(--text-color3)] border-[var(--text-color3)] capitalize text-[var(--text-color2)]"
          id="dailyDigest"
          placeholder="Select"
          option={dailyDigestOptions}
          label="Kindly select how often you want to receive daily digest"
          error=""
        />
      </div>
      <div className="space-x-6 mt-0.5 mb-8">
        <Link to={routes.CAMPAIGN}>
          <Button
            variant="outline"
            className="font-semibold text-sm bg-transparent rounded w-[130px] md:w-[196px] h-10 hover:bg-transparent hover:border-[var(--pry-color)]"
          >
            Cancel
          </Button>
        </Link>
        <Button
          type="submit"
          className="font-semibold text-sm rounded w-[130px] md:w-[196px] h-10"
        >
          Create Campaign
        </Button>
      </div>
    </form>
  );
}
