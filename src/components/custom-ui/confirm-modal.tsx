import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import CustomModalContainer, {
  ModalContainerProps,
} from "./custom-modal-container";
import { cn } from "@/lib/utils";

interface ConfirmModalProp extends ModalContainerProps {
  handleConfirm: () => void;
  title: string;
  desc: string;
  loading?: boolean;
}

export default function ConfirmModal({
  show,
  title,
  desc,
  handleClose,
  modalClass,
  handleConfirm,
  loading,
}: ConfirmModalProp) {
  return (
    <CustomModalContainer
      handleClose={handleClose}
      show={show}
      modalClass={cn(
        "md:min-h-[341px] md:min-w-[572px] md:py-[72px] md:px-[78px] rounded-[8px]",
        modalClass
      )}
    >
      <div className="text-center">
        <p className="text-[var(--text-color4)] font-semibold">{title}</p>
        <hr className="border-[var(--bg-color)] mt-4" />
        <p className="font-medium text-sm text-[var(--text-color2)] mt-10 leading-5">
          Are You sure you want to delete {desc}?
          <br /> This action cannot be undone.
        </p>

        <div className="space-x-4 mt-12">
          <Button
            variant="outline"
            onClick={handleClose}
            disabled={loading}
            className="font-semibold text-xs bg-transparent rounded w-[100px] md:w-[110px] h-10 hover:bg-transparent hover:border-black text-black border-black "
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={handleConfirm}
            disabled={loading}
            className="font-semibold text-xs rounded px-[15.5px] py-3 h-10 custom-shadow-destructive"
          >
            {loading && <Loader2 className="size-4 animate-spin mr-2" />}
            Delete Campaign
          </Button>
        </div>
      </div>
    </CustomModalContainer>
  );
}
