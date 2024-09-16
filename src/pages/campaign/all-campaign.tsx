import { CustomTable } from "@/components/custom-ui/custom-table";
import { useFetchCampaigns } from "@/store/api-service";
import { toast } from "sonner";

export default function AllCampaign() {
  const { campaigns, isLoading, isError } = useFetchCampaigns();

  if (isLoading) {
    return null;
  }

  if (isError) {
    toast.error("Unable to fetch campaign");
    return null;
  }
  return (
    <div className="px-4 md:px-10 md:ml-5 py-6 ">
      <h4 className="font-semibold text-xl text-[var(--pry-color)] mb-6">
        All Campaigns
      </h4>
      <CustomTable data={campaigns ?? []} />
    </div>
  );
}
