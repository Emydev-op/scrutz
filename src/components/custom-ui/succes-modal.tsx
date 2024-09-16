import { TickIcon } from "@/assets/icons";
import { Button } from "../ui/button";
import CustomModalContainer, {
  ModalContainerProps,
} from "./custom-modal-container";
import { cn } from "@/lib/utils";

interface ConfirmModalProp extends ModalContainerProps {
  handleConfirm: () => void;
  title: string;
  btntext: string;
}

export default function SuccessModal({
  show,
  handleClose,
  handleConfirm,
  title,
  modalClass,
  btntext,
}: ConfirmModalProp) {
  return (
    <CustomModalContainer
      handleClose={handleClose}
      show={show}
      modalClass={cn(
        "md:min-h-[430px] md:min-w-[550px] md:pb-[72px] md:pt-[96px] md:px-[78px] rounded-[8px]",
        modalClass
      )}
    >
      <div className="text-center space-y-12">
        <span className="bg-[var(--pry-color)] rounded-full grid place-content-center size-[90px] mx-auto">
          <img src={TickIcon} alt="tick icon" />
        </span>
        <p className="text-[var(--text-color2)] font-medium text-sm">{title}</p>
        <div className="">
          <Button
            onClick={handleConfirm}
            className="font-bold text-xs rounded w-[100px] md:w-[230px] h-12"
          >
            {btntext}
          </Button>
        </div>
      </div>
    </CustomModalContainer>
  );
}
