import { z } from "zod";

// Zod schema for campaign form validation
export const campaignSchema = z.object({
  campaignName: z.string().min(1, { message: "Campaign name is required" }),
  campaignDescription: z.string().optional(),
  startDate: z.string().min(1, { message: "Start date is required" }),
  endDate: z.string().optional(),
  digestCampaign: z.boolean().optional(),
  linkedKeywords: z
    .array(z.string())
    .min(1, { message: "At least one keyword is required" }),
  dailyDigest: z.string().min(1, { message: "Select a frequency" }),
});
