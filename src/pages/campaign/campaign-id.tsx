import { ArrowLeftIcon } from "@/assets/icons";
import ConfirmModal from "@/components/custom-ui/confirm-modal";
import CustomSelect from "@/components/custom-ui/custom-select";
import CustomTagInput from "@/components/custom-ui/custom-tag-input";
import DeletedConfirmModal from "@/components/custom-ui/deleted-confirm-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useDeleteCampaign, useFetchCampaignById } from "@/store/api-service";
import { formatDate } from "@/utlis/date-formater";
import { routes } from "@/utlis/routes";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { mutate } from "swr";

export default function CampaignId() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cancelCampaignModal, setCancelCampaignModal] =
    useState<boolean>(false);
  const [confirmCampaignModal, setConfirmCampaignModal] =
    useState<boolean>(false);
  // Delete campaign hook
  const { deleteCampaign, isDeleting, deletedRes } = useDeleteCampaign(
    id ?? ""
  );
  // Fetch current campaign hook
  const { campaigns, isError } = useFetchCampaignById(id ?? "");

  useEffect(() => {
    if (campaigns?.campaignName) {
      setName(campaigns.campaignName);
    }
  }, [campaigns]);

  if (isError) {
    toast.error(isError?.response?.data ?? "Unable to fetch campaign");
    return null;
  }

  const handleConfirm = async () => {
    await setConfirmCampaignModal(false);
    navigate(routes.CAMPAIGN);
    mutate("/api/Campaign");
  };

  return (
    <div className="px-4 md:px-10 md:ml-5 py-6 ">
      <div
        className="inline-flex items-center group"
        onClick={() => navigate(-1)}
      >
        <img
          src={ArrowLeftIcon}
          alt="arrow back icon"
          className="group-hover:-translate-x-1 transition-all ease-linear"
        />
        <p className="font-semibold text-[var( --text-color4)]">Back</p>
      </div>

      <header className="flex justify-between items-center mt-6 max-w-[680px]">
        <h4 className="font-semibold text-xl text-[var(--pry-color)]">
          Campaign Information
        </h4>
        <div className="font-medium text-sm inline-flex items-center bg-[var(--btn-bg)] py-2 px-4 rounded">
          <p className="border-r-[1.5px] pr-2 mr-4 border-[var(--text-color3)]">
            Campaign Status
          </p>
          <p
            className={cn(
              campaigns?.campaignStatus === "Inactive"
                ? "text-[var(--error-color)]"
                : "text-[var(--success-color)]"
            )}
          >
            {campaigns?.campaignStatus ?? ""}
          </p>
        </div>
      </header>

      <section className="grid gap-6 mt-5 max-w-[680px] mb-10">
        <Input
          label="Campaign Name"
          disabled
          type="text"
          value={campaigns?.campaignName ?? ""}
        />
        <div className="flex gap-x-6 w-full">
          <Input
            label="Start Date"
            disabled
            type="text"
            value={formatDate(campaigns?.startDate ?? "")}
          />{" "}
          <Input
            label="End Date"
            disabled
            type="text"
            value={formatDate(campaigns?.endDate ?? "")}
          />
        </div>
        <CustomTagInput
          id="linkedKeywords"
          disabled
          value={campaigns?.linkedKeywords ?? []}
          label="Linked Keywords"
          error=""
          classNames={{
            input:
              "!w-[100%] bg-transparent !border-1 placeholder:text-sm placeholder:text-[var(--text-color3)] ",
            tag: "!text-white !bg-[var(--pry-color)] text-[10px] !px-2.5 !py-1.5",
          }}
        />
        <CustomSelect
          className="w-full shadow-none rounded min-h-10 focus-visible:ring-0 hover:border-[var(--text-color3)] border-[var(--text-color3)] capitalize text-[var(--text-color2)]"
          id="dailyDigest"
          label="Want to receive daily digest about the campaign?"
          disabled
          placeholder={campaigns?.digestCampaign ?? ""}
        />
        <CustomSelect
          className="w-full shadow-none rounded min-h-10 focus-visible:ring-0 hover:border-[var(--text-color3)] border-[var(--text-color3)] capitalize text-[var(--text-color2)]"
          id="dailyDigest"
          placeholder={campaigns?.dailyDigest ?? ""}
          label="Kindly select the time you want tio receive daily digest"
          disabled
        />
      </section>
      <div className="space-x-6 mt-0.5 mb-8">
        <Button
          onClick={() => setCancelCampaignModal(true)}
          variant="destructive"
          className="font-semibold text-sm rounded w-[130px] md:w-[196px] h-10"
        >
          Stop Campaign
        </Button>
        <Link to={routes.EDIT_CAMPAIGN(Number(id))}>
          <Button
            variant="outline"
            className="font-semibold text-sm bg-transparent rounded w-[130px] md:w-[196px] h-10 hover:bg-transparent hover:border-[var(--pry-color)]"
          >
            Edit Information
          </Button>
        </Link>
      </div>
      <ConfirmModal
        show={cancelCampaignModal}
        title="Stop Campaign"
        desc={`${name} campaign`}
        handleClose={() => setCancelCampaignModal(false)}
        loading={isDeleting}
        handleConfirm={() => {
          deleteCampaign();
          if (deletedRes) {
            setConfirmCampaignModal(true);
            setCancelCampaignModal(false);
          }
        }}
      />
      <DeletedConfirmModal
        show={confirmCampaignModal}
        title="Campaign Deleted"
        desc={`${name} campaign has been deleted`}
        handleClose={() => setConfirmCampaignModal(false)}
        handleConfirm={handleConfirm}
      />
    </div>
  );
}
