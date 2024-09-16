import { Button } from "../ui/button";
import CustomModalContainer, {
  ModalContainerProps,
} from "./custom-modal-container";
import { cn } from "@/lib/utils";

interface ConfirmModalProp extends ModalContainerProps {
  handleConfirm: () => void;
  title: string;
  desc: string;
}

export default function ConfirmModal({
  show,
  title,
  desc,
  handleClose,
  modalClass,
  handleConfirm,
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
            className="font-semibold text-xs bg-transparent rounded w-[100px] md:w-[110px] h-10 hover:bg-transparent hover:border-black text-black border-black "
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={handleConfirm}
            className="font-semibold text-xs rounded w-[100px] md:w-[126px] h-10 custom-shadow-destructive"
          >
            Delete Campaign
          </Button>
        </div>
      </div>
    </CustomModalContainer>
  );
}
