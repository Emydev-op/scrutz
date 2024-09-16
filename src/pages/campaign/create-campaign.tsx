import { CustomDatePicker } from "@/components/custom-ui";
import CustomSelect from "@/components/custom-ui/custom-select";
import CustomTagInput from "@/components/custom-ui/custom-tag-input";
import SuccessModal from "@/components/custom-ui/succes-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { routes } from "@/utlis/routes";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { campaignSchema } from "@/lib/schema";
// import { formatDate } from "@/utlis/date-formater";

export default function CreateCampaign() {
  const navigate = useNavigate();
  const [confirmModal, setConfirmModal] = useState<boolean>(false);
  const dailyDigestOptions = [
    { label: "daily", value: "daily" },
    { label: "weekly", value: "weekly" },
    { label: "monthly", value: "monthly" },
    { label: "quaterly", value: "quaterly" },
  ];

  const formik = useFormik({
    initialValues: {
      campaignName: "",
      campaignDescription: "",
      startDate: "",
      endDate: "",
      digestCampaign: true,
      linkedKeywords: [],
      dailyDigest: "",
    },
    validationSchema: campaignSchema,
    onSubmit: (values) => {
      console.log(values, "result");
      // setConfirmModal(true);
    },
  });
  console.log(formik.values, "formik");
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="px-4 md:px-10 md:ml-5 py-6 "
      >
        <h2 className="text-xl font-bold text-[var(--pry-color)]">
          Create New Campaign
        </h2>
        <div className="bg-white mt-4 pb-2.5 mb-10 max-w-[680px] space-y-6">
          <Input
            label="Campaign Name"
            id="campaignName"
            type="text"
            placeholder="e.g  The Future is now"
            isRequired
            value={formik?.values.campaignName}
            onChange={formik?.handleChange}
            error={
              formik.errors.campaignName && formik.touched.campaignName
                ? formik.errors.campaignName
                : ""
            }
          />
          <Textarea
            label="Campaign Description"
            id="campaignDescription"
            placeholder="Please add a description to your campaign"
            className="min-h-[112px]"
            value={formik?.values.campaignDescription}
            onChange={formik?.handleChange}
            error={
              formik.errors.campaignDescription &&
              formik.touched.campaignDescription
                ? formik.errors.campaignDescription
                : ""
            }
          />
          <div className="grid md:grid-cols-2 gap-6 ">
            <CustomDatePicker
              id="startDate"
              name="startDate"
              label="Start Date"
              isRequired
              format="YYYY/MM/DD"
              selected={new Date(formik.values.startDate)}
              handleChange={(date) => {
                formik.setFieldValue("startDate", new Date(date));
              }}
              error={
                formik.errors.startDate && formik.touched.startDate
                  ? formik.errors.startDate
                  : ""
              }
            />
            <CustomDatePicker
              id="endDate"
              name="endDate"
              label="End Date"
              format="YYYY/MM/DD"
              selected={new Date(formik.values.endDate)}
              handleChange={(date) => {
                formik.setFieldValue("endDate", new Date(date));
              }}
              error={
                formik.errors.endDate && formik.touched.endDate
                  ? formik.errors.endDate
                  : ""
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label
              htmlFor="get-digest"
              className="font-medium text-sm text-[var(--text-color2)]"
            >
              Want to receive daily digest about the campaign?
            </Label>
            <Switch
              id="digestCampaign"
              checked={formik.values.digestCampaign}
              onCheckedChange={(e) => formik.setFieldValue("digestCampaign", e)}
            />
          </div>
          <div className="w-full">
            <CustomTagInput
              id="linkedKeywords"
              placeHolder="To add keywords, type your keyword and press enter"
              value={formik.values.linkedKeywords}
              onChange={(e) => formik.setFieldValue("linkedKeywords", e)}
              isRequired
              label="Linked Keywords"
              error={
                formik.errors.linkedKeywords && formik.touched.linkedKeywords
                  ? formik.errors.linkedKeywords
                  : ""
              }
              classNames={{
                input:
                  "!w-[100%] bg-transparent border-2 placeholder:text-sm placeholder:text-[var(--text-color3)] ",
                tag: "!text-white !bg-[var(--pry-color)] text-[10px] !px-2.5 !py-1.5",
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
        <div className="space-x-6 mt-0.5 mb-8 select-none">
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
            className="font-semibold text-sm rounded w-[130px] md:w-[196px] h-10 hover:border-transparent"
          >
            Create Campaign
          </Button>
        </div>
      </form>
      <SuccessModal
        show={confirmModal}
        title="Campaign Successfully Created!"
        btntext="Go Back to campaign list"
        handleClose={() => setConfirmModal(false)}
        handleConfirm={() => {
          setConfirmModal(false);
          navigate(routes.CAMPAIGN);
        }}
      />
    </>
  );
}
