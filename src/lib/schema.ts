import * as Yup from "yup";

export const campaignSchema = Yup.object().shape({
  campaignName: Yup.string()
    .min(1, { message: "Campaign name is too small" })
    .required("Campaign name is required"),
  campaignDescription: Yup.string(),
  startDate: Yup.string().required("Start date is required"),
  endDate: Yup.string(),
  digestCampaign: Yup.boolean(),
  linkedKeywords: Yup.array().min(1, "At least one keyword is required"),
  dailyDigest: Yup.string(),
});
