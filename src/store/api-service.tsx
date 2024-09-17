import useSWR, { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import { axiosInstance, fetcher } from "./axios-instance";
import { CampaignProp } from "@/components/custom-ui/custom-table";
import useLoadingStore from "./loadingStore";
import { toast } from "sonner";

export const useFetchCampaigns = () => {
  const { data, error, isLoading, isValidating, mutate } = useSWR<
    CampaignProp[]
  >("/api/Campaign", fetcher);
  const showLoading = useLoadingStore((state) => state.showLoading);
  const hideLoading = useLoadingStore((state) => state.hideLoading);
  if (isLoading) {
    showLoading();
  } else {
    hideLoading();
  }
  return {
    campaigns: data,
    isLoading: isLoading,
    isError: error,
    isValidating: isValidating,
    mutate,
  };
};

export const useFetchCampaignById = (id: string) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR<CampaignProp>(
    id ? `/api/Campaign/${id}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
      // revalidateOnMount: false,
    }
  );
  const showLoading = useLoadingStore((state) => state.showLoading);
  const hideLoading = useLoadingStore((state) => state.hideLoading);
  if (isLoading) {
    showLoading();
  } else {
    hideLoading();
  }
  return {
    campaigns: data,
    isLoading: isLoading,
    isError: error,
    isValidating: isValidating,
    mutate,
  };
};

export const useCreateCampaign = () => {
  const { trigger, isMutating, error, data } = useSWRMutation(
    "/api/Campaign",
    async (url, { arg }) => {
      const response = await axiosInstance.post(url, arg);
      return response.data;
    },
    {
      onSuccess: () => {
        mutate("/api/Campaign");
      },
      onError: (err) => {
        toast.error(
          err?.response.data ?? err?.message ?? "Unable to create campaign"
        );
      },
    }
  );

  const showLoading = useLoadingStore((state) => state.showLoading);
  const hideLoading = useLoadingStore((state) => state.hideLoading);
  if (isMutating) {
    showLoading();
  } else {
    hideLoading();
  }

  return {
    createCampaign: trigger,
    isCreating: isMutating,
    error,
    createData: data,
  };
};

export const useUpdateCampaign = (id: string) => {
  const { trigger, isMutating, error, data } = useSWRMutation<CampaignProp>(
    id ? `/api/Campaign/${id}` : null,
    async (url: string, { arg }: { arg?: unknown }) => {
      const response = await axiosInstance.put(url, arg);
      return response.data;
    },
    {
      onSuccess: () => {
        mutate("/api/Campaign");
        mutate(`/api/Campaign/${id}`);
      },
      onError: (err) => {
        toast.error(
          err?.response.data ?? err?.message ?? "Unable to update campaign"
        );
      },
    }
  );

  const showLoading = useLoadingStore((state) => state.showLoading);
  const hideLoading = useLoadingStore((state) => state.hideLoading);
  if (isMutating) {
    showLoading();
  } else {
    hideLoading();
  }

  return {
    updateCampaign: trigger,
    isUpdating: isMutating,
    error,
    updateData: data,
  };
};

export const useDeleteCampaign = (id: string | number) => {
  const { trigger, data, isMutating, error } = useSWRMutation(
    id ? `/api/Campaign/${id}` : null,
    async (url) => {
      const response = await axiosInstance.delete(url);
      return response.data;
    },
    {
      onError: (err) => {
        toast.error(err?.message ?? "Unable to end campaign");
      },
      revalidate: false,
    }
  );

  return {
    deleteCampaign: trigger,
    isDeleting: isMutating,
    deletedRes: data,
    deleterror: error,
  };
};
