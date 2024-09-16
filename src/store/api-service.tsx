import useSWR, { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import { axiosInstance, fetcher } from "./axios-instance";
import { Payment } from "@/components/custom-ui/custom-table";
import useLoadingStore from "./loadingStore";

export const useFetchCampaigns = () => {
  const { data, error, isLoading, isValidating, mutate } = useSWR<Payment[]>(
    "/api/Campaign",
    fetcher
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

export const useFetchCampaignById = (id: string) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    id ? `/api/Campaign/${id}` : null,
    fetcher
  );

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
    "/Campaign",
    async (url, { arg }) => {
      const response = await axiosInstance.post(url, arg);
      return response.data;
    },
    {
      onSuccess: () => {
        mutate("/api/Campaign");
      },
    }
  );

  return {
    createCampaign: trigger,
    isCreating: isMutating,
    error,
    createData: data,
  };
};

export const useUpdateCampaign = (id: string) => {
  const { trigger, isMutating, error, data } = useSWRMutation(
    id ? `/Campaign/${id}` : null,
    async (url, { arg }) => {
      const response = await axiosInstance.put(url, arg);
      return response.data;
    },
    {
      onSuccess: () => {
        mutate("/api/Campaign");
        mutate(`/api/Campaign/${id}`);
      },
    }
  );

  return {
    updateCampaign: trigger,
    isUpdating: isMutating,
    error,
    updateData: data,
  };
};

export const useDeleteCampaign = (id: string) => {
  const { trigger, data, isMutating, error } = useSWRMutation(
    id ? `/Campaign/${id}` : null,
    async (url) => {
      const response = await axiosInstance.delete(url);
      return response.data;
    },
    {
      onSuccess: () => {
        mutate("/api/Campaign");
      },
    }
  );

  return {
    deleteCampaign: trigger,
    isDeleting: isMutating,
    deletedRes: data,
    error,
  };
};
