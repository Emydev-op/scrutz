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

export default function DeletedConfirmModal({
  show,
  handleClose,
  handleConfirm,
  title,
  desc,
  modalClass,
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
          {desc}
        </p>

        <div className="space-x-4 mt-12">
          <Button
            onClick={handleConfirm}
            className="font-bold text-xs rounded w-[100px] md:w-[230px] h-12"
          >
            Go Back to campaign list
          </Button>
        </div>
      </div>
    </CustomModalContainer>
  );
}
