import CustomModalContainer, {
  ModalContainerProps,
} from "./custom-modal-container";
import { cn } from "@/lib/utils";
import Lottie from "react-lottie-player";
import loadingJson from "@/assets/loading.json";

export default function CustomLoader({
  show,
  handleClose,
  modalClass,
}: ModalContainerProps) {
  return (
    <CustomModalContainer
      handleClose={handleClose}
      show={show}
      modalClass={cn("!w-fit !p-0 rounded-[8px]", modalClass)}
    >
      <Lottie
        loop
        animationData={loadingJson}
        play
        style={{ width: 100, height: 100 }}
      />
    </CustomModalContainer>
  );
}
